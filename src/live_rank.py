import threading
import time
from src.logger import logger

import requests


def get_rank(room_id):
    url = f"https://live.douyin.com/webcast/ranklist/audience/?aid=6383&app_name=douyin_web&live_id=1&device_platform=web&language=zh-CN&cookie_enabled=true&screen_width=2560&screen_height=1440&browser_language=zh-CN&browser_platform=Win32&browser_name=Chrome&browser_version=117.0.0.0&webcast_sdk_version=2450&room_id={room_id}&rank_type=30"
    payload = {}
    headers = {
        'authority': 'live.douyin.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
        'Cookie': 'msToken=SIGjc0nNMCGoBKHwLG2P62wNZehUUEEl1C7DDnOMwjjXUKgF_rFDBLBSqRe6YOnxl3c-tDmAlF7-W3pbYJ8mTxZYfYrLZyK9Q7znbNcuWbfzPBBVNdhEQoOlrakh'
    }
    response = requests.request("GET", url, headers=headers, data=payload)
    rank_list = response.json()
    logger.info(f"[liveRankList] 直播间在线观众排名: {response.text}")


def handle_rank(roo_id, delay):
    while True:
        get_rank(roo_id)
        time.sleep(delay)


def interval_rank(roo_id, delay=30):
    print("间隔30秒更新一下排行")
    rank_t = threading.Thread(target=handle_rank, args=(roo_id, delay))
    rank_t.start()


if __name__ == '__main__':
    room_id = "7280828207350221620"
    get_rank(room_id)
