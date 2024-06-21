import _thread
import binascii
import gzip
import json
import os
import signal
from config import LIVE_GIFT_LIST
from src.utils.logger import logger
import re
import time
import requests
import websocket
from src.utils.ws_send import ws_sender
from src import live_rank
from src.utils.common import GlobalVal
from protobuf_inspector.types import StandardParser
from google.protobuf import json_format
from proto.dy_pb2 import PushFrame
from proto.dy_pb2 import Response
from proto.dy_pb2 import MatchAgainstScoreMessage
from proto.dy_pb2 import LikeMessage
from proto.dy_pb2 import MemberMessage
from proto.dy_pb2 import GiftMessage
from proto.dy_pb2 import ChatMessage
from proto.dy_pb2 import SocialMessage
from proto.dy_pb2 import RoomUserSeqMessage
from proto.dy_pb2 import UpdateFanTicketMessage
from proto.dy_pb2 import CommonTextMessage
from proto.dy_pb2 import ProductChangeMessage

# 直播信息全局变量
liveRoomId = ""
ttwid = ""
roomStore = ""
liveRoomTitle = ''
live_stream_url = ""
# 记录抓取直播时间
start_time = time.time()


def onMessage(ws: websocket.WebSocketApp, message: bytes):
    # 相当于每一条消息
    wssPackage = PushFrame()
    # 将二进制序列化后的数据解析到此消息中
    wssPackage.ParseFromString(message)
    logId = wssPackage.logId
    # 使用gzip压缩
    decompressed = gzip.decompress(wssPackage.payload)
    payloadPackage = Response()
    payloadPackage.ParseFromString(decompressed)
    # 发送ack包
    if payloadPackage.needAck:
        sendAck(ws, logId, payloadPackage.internalExt)
    for msg in payloadPackage.messagesList:
        # 反对分数消息
        if msg.method == 'WebcastMatchAgainstScoreMessage':
            unPackMatchAgainstScoreMessage(msg.payload)
            continue

        # 点赞数
        if msg.method == 'WebcastLikeMessage':
            unPackWebcastLikeMessage(msg.payload)
            continue

        # 成员进入直播间消息
        if msg.method == 'WebcastMemberMessage':
            unPackWebcastMemberMessage(msg.payload)
            continue

        # 礼物消息
        if msg.method == 'WebcastGiftMessage':
            unPackWebcastGiftMessage(msg.payload)
            continue

        # 聊天消息
        if msg.method == 'WebcastChatMessage':
            unPackWebcastChatMessage(msg.payload)
            continue

        # 联谊会消息
        if msg.method == 'WebcastSocialMessage':
            unPackWebcastSocialMessage(msg.payload)
            continue

        # 房间用户发送消息
        if msg.method == 'WebcastRoomUserSeqMessage':
            unPackWebcastRoomUserSeqMessage(msg.payload)
            continue

        # 更新粉丝票
        if msg.method == 'WebcastUpdateFanTicketMessage':
            unPackWebcastUpdateFanTicketMessage(msg.payload)
            continue

        # 公共文本消息
        if msg.method == 'WebcastCommonTextMessage':
            unPackWebcastCommonTextMessage(msg.payload)
            continue

        # 商品改变消息
        if msg.method == 'WebcastProductChangeMessage':
            WebcastProductChangeMessage(msg.payload)
            continue
        logger.info('[onMessage] [待解析方法' + msg.method + '等待解析～] [房间Id：' + liveRoomId + ']')


def unPackWebcastCommonTextMessage(data):
    commonTextMessage = CommonTextMessage()
    commonTextMessage.ParseFromString(data)
    data = json_format.MessageToDict(commonTextMessage, preserving_proto_field_name=True)
    log = json.dumps(data, ensure_ascii=False)
    logger.info('[unPackWebcastCommonTextMessage] [] [房间Id：' + liveRoomId + '] | ' + log)
    return data


def WebcastProductChangeMessage(data):
    commonTextMessage = ProductChangeMessage()
    commonTextMessage.ParseFromString(data)
    data = json_format.MessageToDict(commonTextMessage, preserving_proto_field_name=True)
    log = json.dumps(data, ensure_ascii=False)
    logger.info('[WebcastProductChangeMessage] [] [房间Id：' + liveRoomId + '] | ' + log)


def unPackWebcastUpdateFanTicketMessage(data):
    updateFanTicketMessage = UpdateFanTicketMessage()
    updateFanTicketMessage.ParseFromString(data)
    data = json_format.MessageToDict(updateFanTicketMessage, preserving_proto_field_name=True)
    log = json.dumps(data, ensure_ascii=False)
    logger.info('[unPackWebcastUpdateFanTicketMessage] [] [房间Id：' + liveRoomId + '] | ' + log)
    return data


def unPackWebcastRoomUserSeqMessage(data):
    roomUserSeqMessage = RoomUserSeqMessage()
    roomUserSeqMessage.ParseFromString(data)
    data = json_format.MessageToDict(roomUserSeqMessage, preserving_proto_field_name=True)
    log = json.dumps(data, ensure_ascii=False)
    logger.info('[unPackWebcastRoomUserSeqMessage] [] [房间Id：' + liveRoomId + '] | ' + log)
    return data


def unPackWebcastSocialMessage(data):
    socialMessage = SocialMessage()
    socialMessage.ParseFromString(data)
    data = json_format.MessageToDict(socialMessage, preserving_proto_field_name=True)
    log = json.dumps(data, ensure_ascii=False)
    logger.info('[unPackWebcastSocialMessage] [➕直播间关注消息] [房间Id：' + liveRoomId + '] | ' + log)
    return data


# 普通消息
def unPackWebcastChatMessage(data):
    GlobalVal.commit_num += 1
    chatMessage = ChatMessage()
    chatMessage.ParseFromString(data)
    data = json_format.MessageToDict(chatMessage, preserving_proto_field_name=True)
    log = json.dumps(data, ensure_ascii=False)
    logger.info(
        f'[unPackWebcastChatMessage] [直播间弹幕消息{GlobalVal.commit_num}] [房间Id：' + liveRoomId + '] | ' + log)
    return data


# 礼物消息
def unPackWebcastGiftMessage(data):
    giftMessage = GiftMessage()
    giftMessage.ParseFromString(data)
    data = json_format.MessageToDict(giftMessage, preserving_proto_field_name=True)
    try:
        gift_name = data.get("gift").get("name")
        nick_name = data.get("user").get("nickName")
        # 抖音礼物唯一标识
        gift_traceId = data.get("traceId")
        # 对特殊礼物单独统计
        if gift_name in LIVE_GIFT_LIST and gift_traceId not in GlobalVal.gift_id_list:
            logger.info(f"抓到特殊礼物了: {gift_name}，用户名：{nick_name}")
            GlobalVal.gift_list.append(f"{nick_name}")
            GlobalVal.gift_id_list.append(gift_traceId)
        # 特殊礼物价值依然统计
        GlobalVal.gift_num += int(data.get("totalCount", 1))
        GlobalVal.gift_value += (int(data["gift"]["diamondCount"]) * int(data.get("totalCount", 1)))
        # 将消息发送到我们自己的服务器:websocket链接
        ws_sender(f"收到礼物: {gift_name}，礼物数量:{GlobalVal.gift_num}，礼物价值: {GlobalVal.gift_value}")
    except Exception as e:
        logger.error(f"解析礼物数据出错: {e}")
    log = json.dumps(data, ensure_ascii=False)
    logger.info(
        f'[unPackWebcastGiftMessage] [直播间礼物消息{GlobalVal.gift_num}:{GlobalVal.gift_value}] [房间Id：' + liveRoomId + '] ' + log)
    return data


# xx成员进入直播间消息
def unPackWebcastMemberMessage(data):
    global member_num
    memberMessage = MemberMessage()
    memberMessage.ParseFromString(data)
    data = json_format.MessageToDict(memberMessage, preserving_proto_field_name=True)
    # 直播间人数统计
    member_num = int(data.get("memberCount", 0))
    log = json.dumps(data, ensure_ascii=False)
    logger.info(f'[unPackWebcastMemberMessage] [直播间成员加入: {member_num}] [房间Id：' + liveRoomId + '] | ' + log)
    return data


# 点赞
def unPackWebcastLikeMessage(data):
    likeMessage = LikeMessage()
    likeMessage.ParseFromString(data)
    data = json_format.MessageToDict(likeMessage, preserving_proto_field_name=True)
    # like_num = int(data["total"])
    GlobalVal.like_num = int(data.get("total", 0))
    log = json.dumps(data, ensure_ascii=False)
    logger.info(f'[unPackWebcastLikeMessage] [直播间点赞统计{data["total"]}] [房间Id：' + liveRoomId + '] | ' + log)
    return data


# 解析WebcastMatchAgainstScoreMessage消息包体
def unPackMatchAgainstScoreMessage(data):
    matchAgainstScoreMessage = MatchAgainstScoreMessage()
    matchAgainstScoreMessage.ParseFromString(data)
    data = json_format.MessageToDict(matchAgainstScoreMessage, preserving_proto_field_name=True)
    log = json.dumps(data, ensure_ascii=False)
    logger.info('[unPackMatchAgainstScoreMessage] [不知道是啥的消息] [房间Id：' + liveRoomId + '] | ' + log)
    return data


# 发送Ack请求
def sendAck(ws, logId, internalExt):
    obj = PushFrame()
    obj.payloadType = 'ack'
    obj.logId = logId
    obj.payloadType = internalExt
    data = obj.SerializeToString()
    ws.send(data, websocket.ABNF.OPCODE_BINARY)
    logger.info('[sendAck] [🌟发送Ack] [房间Id：' + liveRoomId + '] ====> 房间标题【' + liveRoomTitle + '】')


def onError(ws, error):
    logger.error('[onError] [webSocket Error事件] [房间Id：' + liveRoomId + ']')


def onClose(ws, a, b):
    # 统计最后的数据
    end_time = time.time()
    total_time = end_time - start_time
    total_info = f"直播抓取时长：{total_time}，点赞数量总计：{GlobalVal.like_num}, 评论数量总计: {GlobalVal.commit_num}, 礼物数量总计：{GlobalVal.gift_num}, 礼物价值总计: {GlobalVal.gift_value}"
    logger.info(total_info)
    # 将消息发送到我们自己的服务器
    # ws_sender(total_info)
    logger.info('[onClose] [webSocket Close事件] [房间Id：' + liveRoomId + ']')
    # 直播结束退出程序
    pid = os.getpid()  # 获取当前进程的PID
    os.kill(pid, signal.SIGTERM)


def onOpen(ws):
    _thread.start_new_thread(ping, (ws,))
    logger.info('[onOpen] [webSocket Open事件] [房间Id：' + liveRoomId + ']')


# 发送ping心跳包
def ping(ws):
    while True:
        obj = PushFrame()
        obj.payloadType = 'hb'
        data = obj.SerializeToString()
        ws.send(data, websocket.ABNF.OPCODE_BINARY)
        logger.info('[ping] [💗发送ping心跳] [房间Id：' + liveRoomId + '] ====> 房间🏖标题【' + liveRoomTitle + '】')
        time.sleep(10)


def wssServerStart():
    websocket.enableTrace(False)
    # 拼接获取弹幕消息的websocket的链接
    # socket_url = f"""wss://webcast5-ws-web-lf.douyin.com/webcast/im/push/v2/?app_name=douyin_web&version_code=180800&webcast_sdk_version=1.0.14-beta.0&update_version_code=1.0.14-beta.0&compress=gzip&device_platform=web&cookie_enabled=true&screen_width=1470&screen_height=956&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Mozilla&browser_version=5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_7)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/125.0.0.0%20Safari/537.36&browser_online=true&tz_name=Asia/Shanghai&cursor=t-1718889258481_r-1_d-1_u-1_fh-7382572598213268506&internal_ext=internal_src:dim|wss_push_room_id:{liveRoomId}|wss_push_did:7347145653502019126|first_req_ms:1718889258376|fetch_time:1718889258481|seq:1|wss_info:0-1718889258481-0-0|wrds_v:7382573131375846404&host=https://live.douyin.com&aid=6383&live_id=1&did_rule=3&endpoint=live_pc&support_wrds=1&user_unique_id=7347145653502019126&im_path=/webcast/im/fetch/&identity=audience&need_persist_msg_count=15&insert_task_id=&live_reason=&room_id={liveRoomId}&heartbeatDuration=0&signature=6gK6lxl48wh Mxdc"""
    socket_url = f"""wss://webcast5-ws-web-lf.douyin.com/webcast/im/push/v2/?app_name=douyin_web&version_code=180800&webcast_sdk_version=1.0.14-beta.0&update_version_code=1.0.14-beta.0&compress=gzip&device_platform=web&cookie_enabled=true&screen_width=1512&screen_height=982&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Mozilla&browser_version=5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_7)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/126.0.0.0%20Safari/537.36&browser_online=true&tz_name=Asia/Shanghai&internal_ext=internal_src:dim|wss_push_room_id:{liveRoomId}|wss_push_did:7347516590731134502|first_req_ms:1718958540257|fetch_time:1718958540387|seq:1|wss_info:0-1718958540387-0-0|wrds_v:7382870712479910356&host=https://live.douyin.com&aid=6383&live_id=1&did_rule=3&endpoint=live_pc&support_wrds=1&user_unique_id=7347516590731134502&im_path=/webcast/im/fetch/&identity=audience&need_persist_msg_count=15&insert_task_id=&live_reason=&room_id={liveRoomId}&heartbeatDuration=0&signature=6gK6lxl48wh+Mxdc"""
    h = {
        'cookie': 'ttwid=' + ttwid,
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    }
    # 创建一个长连接，并开始侦听消息
    ws = websocket.WebSocketApp(
        socket_url, on_message=onMessage, on_error=onError, on_close=onClose,
        on_open=onOpen,
        header=h
    )
    ws.run_forever()


def parseLiveRoomUrl(url):
    """
    解析直播的弹幕websocket地址
    :param url:直播地址
    :return:
    """
    headers = {
        'authority': 'live.douyin.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'cache-control': 'max-age=0',
        'cookie': 'xgplayer_user_id=251959789708; passport_assist_user=Cj1YUtyK7x-Br11SPK-ckKl61u5KX_SherEuuGPYIkLjtmV3X8m3EU1BAGVoO541Sp_jwUa8lBlNmbaOQqheGkoKPOVVH42rXu6KEb9WR85pUw4_qNHfbcotEO-cml5itrJowMBlYXDaB-GDqJwNMxMElMoZUycGhzdNVAT4XxCJ_74NGImv1lQgASIBA3Iymus%3D; n_mh=nNwOatDm453msvu0tqEj4bZm3NsIprwo6zSkIjLfICk; LOGIN_STATUS=1; store-region=cn-sh; store-region-src=uid; sid_guard=b177a545374483168432b16b963f04d5%7C1697713285%7C5183999%7CMon%2C+18-Dec-2023+11%3A01%3A24+GMT; ttwid=1%7C9SEGPfK9oK2Ku60vf6jyt7h6JWbBu4N_-kwQdU-SPd8%7C1697721607%7Cc406088cffa073546db29932058720720521571b92ba67ba902a70e5aaffd5d6; odin_tt=1f738575cbcd5084c21c7172736e90f845037328a006beefec4260bf8257290e2d31b437856575c6caeccf88af429213; __live_version__=%221.1.1.6725%22; device_web_cpu_core=16; device_web_memory_size=8; live_use_vvc=%22false%22; csrf_session_id=38b68b1e672a92baa9dcb4d6fd1c5325; FORCE_LOGIN=%7B%22videoConsumedRemainSeconds%22%3A180%7D; __ac_nonce=0658d6780004b23f5d0a8; __ac_signature=_02B4Z6wo00f01Klw1CQAAIDAXxndAbr7OHypUNCAAE.WSwYKFjGSE9AfNTumbVmy1cCS8zqYTadqTl8vHoAv7RMb8THl082YemGIElJtZYhmiH-NnOx53mVMRC7MM8xuavIXc-9rE7ZEgXaA13; webcast_leading_last_show_time=1703765888956; webcast_leading_total_show_times=1; webcast_local_quality=sd; xg_device_score=7.90435294117647; live_can_add_dy_2_desktop=%221%22; msToken=sTwrsWOpxsxXsirEl0V0d0hkbGLze4faRtqNZrIZIuY8GYgo2J9a0RcrN7r_l179C9AQHmmloI94oDvV8_owiAg6zHueq7lX6TgbKBN6OZnyfvZ6OJyo2SQYawIB_g==; tt_scid=NyxJTt.vWxv79efmWAzT2ZAiLSuybiEOWF0wiVYs5KngMuBf8oz5sqzpg5XoSPmie930; pwa2=%220%7C0%7C1%7C0%22; download_guide=%223%2F20231228%2F0%22; msToken=of81bsT85wrbQ9nVOK3WZqQwwku95KW-wLfjFZOef2Orr8PRQVte27t6Mkc_9c_ROePolK97lKVG3IL5xrW6GY6mdUDB0EcBPfnm8-OAShXzlELOxBBCdiQYIjCGpQ==; IsDouyinActive=false; odin_tt=7409a7607c84ba28f27c62495a206c66926666f2bbf038c847b27817acbdbff28c3cf5930de4681d3cfd4c1139dd557e; ttwid=1%7C9SEGPfK9oK2Ku60vf6jyt7h6JWbBu4N_-kwQdU-SPd8%7C1697721607%7Cc406088cffa073546db29932058720720521571b92ba67ba902a70e5aaffd5d6',
        'referer': 'https://live.douyin.com/721566130345?cover_type=&enter_from_merge=web_live&enter_method=web_card&game_name=&is_recommend=&live_type=game&more_detail=&room_id=7317569386624125734&stream_type=vertical&title_type=&web_live_tab=all',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0'
    }
    res = requests.get(url=url, headers=headers)
    global ttwid, roomStore, liveRoomId, liveRoomTitle, live_stream_url
    data = res.cookies.get_dict()
    ttwid = data['ttwid']
    res = res.text
    res_room_info = re.search(r'room\\":{.*\\"id_str\\":\\"(\d+)\\".*,\\"status\\":(\d+).*"title\\":\\"([^"]*)\\"', res)
    if res_room_info:
        room_status = res_room_info.group(2)
        room_title = res_room_info.group(3)
        liveRoomTitle = room_title
        logger.info(f"房间标题: {liveRoomTitle}")
        if room_status == '4':
            raise ConnectionError("直播已结束")
    res_room = re.search(r'roomId\\":\\"(\d+)\\"', res)
    # 获取直播主播的uid和昵称等信息
    live_room_search = re.search(r'owner\\":(.*?),\\"room_auth', res)
    live_room_res = live_room_search.group(1).replace('\\"', '"')
    live_room_info = json.loads(live_room_res)
    logger.info(f"主播账号信息: {live_room_info}")
    print(f"主播账号信息: {live_room_info}")
    # 直播间id
    liveRoomId = res_room.group(1)
    # 获取m3u8直播流地址：m3u8直播比flv延迟2秒左右
    res_stream = re.search(r'hls_pull_url_map\\":(\{.*?})', res)
    res_stream_m3u8s = json.loads(res_stream.group(1).replace('\\"', '"'))
    # HD1和FULL_HD1随机获取，优先获取FULL_HD1
    res_m3u8_hd1 = res_stream_m3u8s.get("FULL_HD1", "").replace("http", "https")
    if not res_m3u8_hd1:
        res_m3u8_hd1 = res_m3u8_hd1.get("HD1", "").replace("http", "https")
    logger.info(f"直播流m3u8链接地址是: {res_m3u8_hd1}")
    print(f"直播流m3u8链接地址是: {res_m3u8_hd1}")
    # 找到flv直播流地址:区分标清|高清|蓝光
    res_flv_search = re.search(r'flv\\":\\"(.*?)\\"', res)
    res_stream_flv = res_flv_search.group(1).replace('\\"', '"').replace("\\\\u0026", "&")
    if "https" not in res_stream_flv:
        res_stream_flv = res_stream_flv.replace("http", "https")
    logger.info(f"直播流FLV地址是: {res_stream_flv}")
    print(f"直播流FLV地址是: {res_stream_flv}")
    # 开始获取直播间排行
    live_rank.interval_rank(liveRoomId)
    # 创建websocket客户端，并开始监听消息
    wssServerStart()


# 十六进制字符串转protobuf格式(用于快手网页websocket调试分析包体结构)
def hexStrToProtobuf(hexStr):
    # 示例数据
    # hexStr = '08d40210011aeb250a8e010a81010a0b66666731343535323939391206e68595e799bd1a6a68747470733a2f2f70312e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f31322f32312f424d6a41794d6a45784d5449794d5441304d6a68664d6a67784d4445354e7a67344d5638795832686b4d6a6335587a49324d513d3d5f732e6a7067180120012a04323132300aa8010a9e010a0b79697869616f77753636361209e79fa5e5b08fe6ada61a830168747470733a2f2f616c69696d672e612e7978696d67732e636f6d2f75686561642f41422f323032322f31302f30322f31392f424d6a41794d6a45774d4449784f544d304e4442664e6a497a4d4455324d445977587a4a66614751304e444a664d546b335f732e6a70674030655f306f5f306c5f3530685f3530775f3835712e73726318012a033430330ab6010aac010a0c4c31333130373432373635301212e9bb8ee699a8f09f8c8af09f8c8af09f8c8a1a870168747470733a2f2f616c69696d672e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f31392f31332f424d6a41794d6a45784d546b784d7a4d784d5452664d5441344e5467794d5449334d5638795832686b4e444935587a45304d513d3d5f732e6a70674030655f306f5f306c5f3530685f3530775f3835712e73726318012a033335390ac2010ab8010a104757515053414148445244444145775a121ee69492e4b880e58fa3e8a28be6989fe6989fe98081e7bb99e58c97e699a81a830168747470733a2f2f616c69696d672e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f31322f32312f424d6a41794d6a45784d5449794d5445774d6a4e664d5445314d7a59354d4451324e6c38795832686b4e7a46664f5449355f732e6a70674030655f306f5f306c5f3530685f3530775f3835712e73726318012a033130330a91010a88010a0f337870323538746a6d6376337a62751209e58699e7949ce8af971a6a68747470733a2f2f70332e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f32302f31372f424d6a41794d6a45784d6a41784e7a4d784e5442664d7a45784d7a4d784f5445784e6c38795832686b4d545530587a49344d513d3d5f732e6a706718012a0233340aac010aa3010a0979756875616e306b64120ce88a8be594a4e1b587e1b69c1a870168747470733a2f2f616c69696d672e612e7978696d67732e636f6d2f75686561642f41422f323032322f30362f31312f30312f424d6a41794d6a41324d5445774d5451334e5452664d5441774d6a51324f4445344f4638795832686b4e444535587a457a4e773d3d5f732e6a70674030655f306f5f306c5f3530685f3530775f3835712e73726318012a0233330a8a010a81010a0c6868686832303033313032391205e888aac2b71a6a68747470733a2f2f70332e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f30332f32322f424d6a41794d6a45784d444d794d6a41784d546c664d6a4d7a4d7a45794d4455304d3138795832686b4e544133587a4d314d513d3d5f732e6a706718012a0233310aab010aa2010a0f3378686d3568677a6e657963666b6b1209e890a8e5bf853536391a830168747470733a2f2f616c69696d672e612e7978696d67732e636f6d2f75686561642f41422f323032302f30372f32342f30382f424d6a41794d4441334d6a51774f4449774d4442664d5467344e5455314d5449784e6c38795832686b4d6a4d79587a673d5f732e6a70674030655f306f5f306c5f3530685f3530775f3835712e73726318012a0232330a93010a8a010a0f33787569663363746b6e6d38773271120be790aae790aa37313432321a6a68747470733a2f2f70312e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f31382f31322f424d6a41794d6a45784d5467784d6a45784e4446664d7a45794f5441354f446b304e3138795832686b4e7a6730587a49344e773d3d5f732e6a706718012a0232320a94010a8b010a0f337862677a6a627034777570763567120cefbc87e7bbade99b86efbc821a6a68747470733a2f2f70352e612e7978696d67732e636f6d2f75686561642f41422f323032322f30382f33302f31352f424d6a41794d6a41344d7a41784e5451334e4452664d5441324d6a51334d6a41324e3138795832686b4f545533587a63314e413d3d5f732e6a706718012a0232320aa5010a9c010a0979796473696f73313212054c696b652e1a870168747470733a2f2f616c69696d672e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f31382f31322f424d6a41794d6a45784d5467784d6a51324e4456664d6a4d354d4459774d5455344e5638785832686b4d546731587a51354d773d3d5f732e6a70674030655f306f5f306c5f3530685f3530775f3835712e73726318012a0232310a90010a85010a0a48657969676530353230120be4bba5e6ad8c20f09f8e801a6a68747470733a2f2f70312e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f31332f31302f424d6a41794d6a45784d544d784d4455354d6a4e664d544d324e6a41304e7a41774d5638785832686b4d6a6779587a51794f413d3d5f732e6a7067180120012a0231320aa8010a9f010a0f33786b623464793435706a797570711206e684a6e6829f1a830168747470733a2f2f616c69696d672e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f30342f32322f424d6a41794d6a45784d4451794d6a41774d445a664e4445794f446b324d545931587a4a66614751324e4456664f446b355f732e6a70674030655f306f5f306c5f3530685f3530775f3835712e73726318012a0231310aa5010a9c010a08776a353431383830120ae88b8fe791bee699a82f1a830168747470733a2f2f616c69696d672e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f30332f30302f424d6a41794d6a45784d444d774d4449344e546c664d6a41354e6a45794e544d31587a4666614751304d7a6c664e444d785f732e6a70674030655f306f5f306c5f3530685f3530775f3835712e73726318012a0231310abc010ab3010a0f33786334746a7a376e7875636561791216e7a9bfe5b1b1e794b2efbc88696b756ee59ba2efbc891a870168747470733a2f2f616c69696d672e612e7978696d67732e636f6d2f75686561642f41422f323032322f30382f32362f31312f424d6a41794d6a41344d6a59784d5451334d4442664d6a4d314d7a41314d4449774d3138795832686b4e444d79587a4d7a4e673d3d5f732e6a70674030655f306f5f306c5f3530685f3530775f3835712e73726318012a0231300a8c010a84010a0957535162616f353230120fe5b08f20e5a88120e5b09120e380821a6668747470733a2f2f70312e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f31332f31392f424d6a41794d6a45784d544d784f5445354d5446664f5455314e4449304f445578587a4a666147517a4e5452664e4449785f732e6a706718012a01330a8f010a87010a0f337834646178626768746a78716979120ce7a78be8be9ee1b587e1b69c1a6668747470733a2f2f70332e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f31342f31312f424d6a41794d6a45784d5451784d544d7a4d544a664e7a55354d7a63774d446b31587a4a66614751784f544e664e5459315f732e6a706718012a01330a8d010a85010a0f3378723937706975747768326d7a321206e791bee4b8811a6a68747470733a2f2f70312e612e7978696d67732e636f6d2f75686561642f41422f323032312f30342f32332f32312f424d6a41794d5441304d6a4d794d5445304e544a664d5463794d7a55304f4463304d4638795832686b4f546378587a59354e513d3d5f732e6a706718012a01330ab0010aa8010a0d6c713431383835343138386868120de585b3e4ba8ee58a8920e5bcb71a870168747470733a2f2f616c69696d672e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f30352f32332f424d6a41794d6a45784d4455794d7a4d334e544a664d54517a4f44497a4e6a67784d6c38795832686b4d544578587a67324f413d3d5f732e6a70674030655f306f5f306c5f3530685f3530775f3835712e73726318012a01330a8b010a83010a0e4c544431353933313731353337371209e4bba5e6a4bfe383bb1a6668747470733a2f2f70332e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f30372f31392f424d6a41794d6a45784d4463784f544d314d545a664d5441314d5463784e4459334e6c38795832686b4f444579587a55315f732e6a706718012a01330a89010a83010a0b64796c3230303830363130120ce5b08fe5b08fe5a79ce99c961a6668747470733a2f2f70342e612e7978696d67732e636f6d2f75686561642f41422f323032322f31302f31362f31312f424d6a41794d6a45774d5459784d5455354e5442664f4449304e7a517a4e545535587a4a66614751334d7a42664e5445335f732e6a70672a01320ab7010ab1010a0f3378727a33667a69737438717334611218e5bf98e5b79de38088e5b7b2e69c89e58584e5bc9fe380891a830168747470733a2f2f616c69696d672e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f31342f31312f424d6a41794d6a45784d5451784d54557a4d6a42664f4441304e444d794f545579587a4666614751304d7a52664d7a4d785f732e6a70674030655f306f5f306c5f3530685f3530775f3835712e7372632a01320a90010a8a010a0e796f6e6773686974756f7a68616e1210e5b08fe58b87e5a3ab2de99988e8b68a1a6668747470733a2f2f70312e612e7978696d67732e636f6d2f75686561642f41422f323032322f30352f32382f31332f424d6a41794d6a41314d6a67784d7a51354d445a664e7a59304f44517a4d7a6b35587a4a66614751794d6a56664e544d7a5f732e6a70672a01320a8d010a87010a0f3378746d706b6167627536766e7139120ce5ad90e792a9e1b587e1b69c1a6668747470733a2f2f70312e612e7978696d67732e636f6d2f75686561642f41422f323032322f31302f33312f31312f424d6a41794d6a45774d7a45784d544d784e4468664e6a45324d4445304d444d30587a4a66614751314e446c664d54497a5f732e6a70672a01320a89010a83010a0f4c4a483532304c4a31333134656d6f1204f09f88b71a6a68747470733a2f2f70352e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f31342f31382f424d6a41794d6a45784d5451784f4441314d4442664d6a67354d4441774f5455314e6c38795832686b4d6a6730587a63794e513d3d5f732e6a70672a01320aa5010a9d010a0f33786967326675743533373872626b1204456e6d681a830168747470733a2f2f616c69696d672e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f32332f31312f424d6a41794d6a45784d6a4d784d544d784e446c664d6a59324e7a517a4d4455334f5638785832686b4d7a4132587a6b315f732e6a70674030655f306f5f306c5f3530685f3530775f3835712e73726318012a01320ab1010aab010a0f33786d39353268396a393473787a731212e5ad90e792a9efbc88e5b08fe58fb7efbc891a830168747470733a2f2f616c69696d672e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f30372f30302f424d6a41794d6a45784d4463774d4451794e4452664d6a517a4d5463314d6a49354e5638795832686b4e5464664e7a49785f732e6a70674030655f306f5f306c5f3530685f3530775f3835712e7372632a01320aa9010aa3010a0f3378397370326436703272727866391206e585b1e5928c1a870168747470733a2f2f616c69696d672e612e7978696d67732e636f6d2f75686561642f41422f323032322f30372f32382f31322f424d6a41794d6a41334d6a67784d6a55314d7a42664d6a4d354e6a4d774e4455304d3138795832686b4e6a6b35587a45774e413d3d5f732e6a70674030655f306f5f306c5f3530685f3530775f3835712e7372632a01320aa5010a9f010a0b4c5a5032303133313479611206e6b3bde4b8801a870168747470733a2f2f616c69696d672e612e7978696d67732e636f6d2f75686561642f41422f323032322f30372f31332f31362f424d6a41794d6a41334d544d784e6a49304e5456664d546b324e4445794f4463334f5638795832686b4f545179587a597a4d673d3d5f732e6a70674030655f306f5f306c5f3530685f3530775f3835712e7372632a01320a9f010a99010a0f3378326e37793865656573766b6879121ee58c97e699a8e79a84e4bfa1e699baefbc88e5b7b2e7b4abe7a082efbc891a6668747470733a2f2f70312e612e7978696d67732e636f6d2f75686561642f41422f323032322f31312f31332f31312f424d6a41794d6a45784d544d784d5441344d6a68664d5467344d44497a4f5441354e5638785832686b4f446b79587a45795f732e6a70672a013220a699a0ebca30'
    with open('t-proto', 'wb') as w:
        w.write(binascii.unhexlify(hexStr))
    parser = StandardParser()
    print(parser)
    with open('t-proto', 'rb') as fh:
        output = parser.parse_message(fh, 'message')
    print(output)
    return output
