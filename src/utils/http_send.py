import json
import threading
import time
import requests
from config import DONATION_UUID, LIVE_WEB_SEND_URL, LIVE_HTTP_SEND, LIVE_SEND_INTERVAL
from src.utils.common import GlobalVal


def sender():
    total_info = f"点赞：{GlobalVal.like_num}, 评论: {GlobalVal.commit_num}, 礼物价值: {GlobalVal.gift_value}"
    print(f"获取到的直播数据是:{total_info}")
    payload = json.dumps({
        "taskuuid": "updatedonation",
        "uuid": DONATION_UUID,
        "applypoint": GlobalVal.like_num,
        "popmsg": GlobalVal.commit_num,
        "giftlist": GlobalVal.gift_value,
        "fannamereadylist": "|".join(GlobalVal.gift_list),
        "donationdetail": json.dumps(GlobalVal.rank_user)
    })
    headers = {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
        'Content-Type': 'application/json'
    }
    # print(f"推送的直播数据是:{payload}")
    response = requests.request("POST", LIVE_WEB_SEND_URL, headers=headers, data=payload)
    print(f"HTTP推送消息结果: {response.json()}")


def http_send():
    print("http sender")
    while True:
        time.sleep(LIVE_SEND_INTERVAL)
        # 防止中间重启推送0数据
        sender()


def send_start():
    if LIVE_HTTP_SEND:
        # 启动WebSocket客户端
        print(f"start http senders")
        # 阻塞，所以使用线程启动
        t = threading.Thread(target=http_send)
        t.start()
    else:
        print(f"unopened http senders")
        total_info = f"点赞：{GlobalVal.like_num}, 评论: {GlobalVal.commit_num}, 礼物价值: {GlobalVal.gift_value}"
        print(f"获取到的直播数据是:{total_info}")
