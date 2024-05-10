import re
import json
import requests


def get_room_id(url: str):
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
    res = res.text
    res_room_info = re.search(r'room\\":{.*\\"id_str\\":\\"(\d+)\\".*,\\"status\\":(\d+).*"title\\":\\"([^"]*)\\"', res)
    if res_room_info:
        room_status = res_room_info.group(2)
        if room_status == '4':
            raise ConnectionError("直播已结束")
    res_room = re.search(r'roomId\\":\\"(\d+)\\"', res)
    # 获取直播主播的uid和昵称等信息
    live_room_search = re.search(r'owner\\":(.*?),\\"room_auth', res)
    live_room_res = live_room_search.group(1).replace('\\"', '"')
    live_room_info = json.loads(live_room_res)
    print(f"主播账号信息: {live_room_info}")
    # 直播间id
    live_id = res_room.group(1)
    return live_id


def get_conditions_info(conditions: list):
    conditions_desc = ""
    for (index, c) in enumerate(conditions):
        conditions_desc += f"{index + 1}.{c.get('description')} "
    return conditions_desc


def get_lottery_info(room_id):
    url = f"https://live.douyin.com/webcast/lottery/melon/lottery_info/?aid=6383&app_name=douyin_web&live_id=1&device_platform=web&language=zh-CN&enter_from=page_refresh&cookie_enabled=true&screen_width=1512&screen_height=982&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Chrome&browser_version=124.0.0.0&room_id={room_id}&query_from=1&msToken=5c3e_hFFyFYFYmJCaVuvPXCOPorD-Wi7azk5ZHBUdBGZV7UP038be6fWlKsN8n1vXL_hJk9mhzcKK-Lfu2IO46tIYfvvBuZqd5qXZpMduUpG8XJ6ROC9WteZyW2K"
    headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cache-control': 'no-cache',
        'cookie': 'has_avx2=null; device_web_cpu_core=8; device_web_memory_size=8; live_use_vvc=%22false%22; xgplayer_user_id=32142398740; csrf_session_id=b154f2eb3608feb421dd6c9fe24bc2d4; odin_tt=a5b308e92c2f826f447b22425cb49c1faa5a13b64c07a6f7309186819371d4c74fe5dcf480e52fe2931fba91397a83a31c94e2df31a3735b839683d58bf010781b5c5f61c231ab52f5ecfbc03f80ff23; passport_csrf_token=6bc63b63e5fe245d323c824928bc812e; passport_csrf_token_default=6bc63b63e5fe245d323c824928bc812e; bd_ticket_guard_client_web_domain=2; webcast_local_quality=sd; SEARCH_RESULT_LIST_TYPE=%22single%22; ttwid=1%7CUOwlzl-VvV0COewDTk3CsEdp4EMg8CUFA-ICTdsrLQw%7C1712887757%7Cb40c2475ea6f287e8da8722ef9dfcb4b1b9d35e05158a6fc6dbc3282a4caf15a; __ac_nonce=0662a095500344b59f1a0; __ac_signature=_02B4Z6wo00f01OHJxKwAAIDDszbktR5C2nTh6cAAAF5e7JV0RQje.O9NY-t5t6vN9NKbPcnfXMkFfQLkfKLc17gPyPteEs6w5xUu7in-FxDZfmcOuSUKGOIUEeUxSuh0vbz9E.lVYSPp2boo0f; webcast_leading_last_show_time=1714030934972; webcast_leading_total_show_times=4; bd_ticket_guard_client_data=eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWl0ZXJhdGlvbi12ZXJzaW9uIjoxLCJiZC10aWNrZXQtZ3VhcmQtcmVlLXB1YmxpYy1rZXkiOiJCRExvdFozTlZJU3ZpQjZ3YzREeHdSdTYwaVY1eTIwUzM1UytLTllwTUs0Tmxoc3M3Z1ZjdFpYWmhiQ0ZWTzYrNEVsSGd0U25GM1BERWc4UFgvZFFodVE9IiwiYmQtdGlja2V0LWd1YXJkLXdlYi12ZXJzaW9uIjoxfQ%3D%3D; download_guide=%223%2F20240425%2F0%22; pwa2=%220%7C0%7C3%7C0%22; FORCE_LOGIN=%7B%22videoConsumedRemainSeconds%22%3A180%2C%22isForcePopClose%22%3A1%7D; home_can_add_dy_2_desktop=%221%22; __live_version__=%221.1.1.9809%22; xg_device_score=7.541386294591826; live_can_add_dy_2_desktop=%220%22; IsDouyinActive=true; msToken=LrwiNPyulLPWEKS-5jj4OvncuOKQA8y4qFfo1j-JN2Yw3-eg_j-DrE_CKTQmOz44dwG26uOxevFyITDrkPwx82M4k4XvQ8zgm3MjnQDDmtZ89Yikpkve-kRMQSuo; msToken=9c9mgSK4XRWea3b1RaXscGkC4J5QD-EjBbOwPPnp8NseDQUL5aqbmKzPEFkD3UNjDkWmqKcmJGGAlN6ruhBpihUXfD9jBGhK2ww3XvPuxqy4jN199v9yJqLVlXWU',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
    }
    response = requests.request("GET", url, headers=headers)
    # 判断是否有福袋{'data': {}, 'extra': {'now': 1714101042446}, 'status_code': 0}
    lottery_json = response.json().get("data").get("lottery_info", None)
    if lottery_json:
        # 奖品信息:name 钻石
        prize_info = lottery_json.get("prize_info").get("name")
        # 参与条件
        conditions = lottery_json.get("conditions")
        conditions_desc = get_conditions_info(conditions)
        # 奖品统计
        prize_count = lottery_json.get("prize_count")
        # 开始时间
        # start_time = lottery_json.get("start_time")
        # 抽奖时间
        draw_time = lottery_json.get("draw_time")
        # 当前时间
        current_time = lottery_json.get("current_time")
        # 还剩多少时间开奖
        residue_time = draw_time - current_time
        minutes = residue_time // 60
        seconds = residue_time % 60
        # 已参与人数
        candidate_num = lottery_json.get("candidate_num")
        print(f"福袋信息是: \n"
              f"奖品名称:{prize_info}\n"
              f"参与条件:{conditions_desc}\n"
              f"奖品总数:{prize_count}\n"
              f"剩余时间:{minutes}分{seconds}秒\n"
              f"已参与人数:{candidate_num}\n")
    else:
        print("直播间没有福袋")


def main(url: str):
    room_id = get_room_id(url)
    get_lottery_info(room_id)


if __name__ == '__main__':
    live_url = "https://live.douyin.com/770534886161"
    main(live_url)
