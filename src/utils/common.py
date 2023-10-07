import requests
import json

from config import LIVE_WEB_SEND_URL, GAME_UUID, DONATION_UUID


class GlobalVal(object):
    # 点赞总数
    like_num = 0
    # 评论总数
    commit_num = 0
    # 礼物数量和价值
    gift_num = 0
    gift_value = 0
    # 特殊礼物：月下瀑布
    gift_list = []
    # 记录直播间人数
    member_num = 0
    # 在线观众排名
    rank_user = []


# 初始化全局变量：从服务端获取
def init_global():
    payload = json.dumps({
        "taskuuid": "querydonation",
        "gameuuid": GAME_UUID
    })
    headers = {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
        'Content-Type': 'application/json'
    }
    response = requests.request("POST", LIVE_WEB_SEND_URL, headers=headers, data=payload)
    query_json = response.json()
    game_data = query_json.get("response_data").get("data")
    for data in game_data:
        if data.get("uuid") == DONATION_UUID:
            GlobalVal.like_num = data.get("applypoint")
            GlobalVal.commit_num = data.get("popmsg")
            GlobalVal.gift_value = data.get("giftlist")
            GlobalVal.gift_list = [i for i in data.get("fannamereadylist").split("|") if i]
            return
