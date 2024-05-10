import time

import requests

first = "k5nTZjgE4uyyylw7Rc8N0xp1D-NNAZ2JDbPNXDQt2Sa-Ore8MB1lx98ErTB9svyNvd-967I6pBtNZseWhrtsO2CCvzCcA5g2y04bssuSzwivLlI3Qh28r0k7VN3g"
# first = "BT1qpl5sqsDTjcctEjox76yu51E9MjryRPhgc1WTgpYJUrh4NWS9YxCdJywa_Nyqt1NIdPVAk9I8967mdnjNOMd1icKxmJZzLYnFgeqXjW3Y-5SE31kPMS8tbSzK"
offset = 0
count = 10

# 使用session管理cookie
session = requests.session()


def condition(data):
    lives = data['lives']
    rawdata = lives['rawdata']
    # print('当前过滤数据=', lives)
    # print('当前过滤数据的rawdata=', rawdata)
    res = 'has_ongoing_lottery' in rawdata
    # print('当前过滤数据的结果=', res)
    return res


def search():
    global offset
    url = f"https://www.douyin.com/aweme/v1/web/live/search/?device_platform=webapp&aid=6383&channel=channel_pc_web&search_channel=aweme_live&keyword=%E7%A6%8F%E8%A2%8B&search_source=normal_search&query_correct_type=1&is_filter_search=0&from_group_id=&offset={offset}&count=10&need_filter_settings=1&update_version_code=170400&pc_client_type=1&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1512&screen_height=982&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Chrome&browser_version=124.0.0.0&browser_online=true&engine_name=Blink&engine_version=124.0.0.0&os_name=Mac+OS&os_version=10.15.7&cpu_core_num=8&device_memory=8&platform=PC&downlink=8.3&effective_type=4g&round_trip_time=50&webid=7347516590731134502&msToken={first}&a_bogus=d7WwBdu6dEdsDfyX55dLfY3q65-3YMMH0CPYMD2fpxfVjg39HMYo9exLuttvdQWjLG%2FlIeSjy4hbT3KkrQ%2FbM1wf9WhE%2F2ApsDSkKl1%2Fso0j53inCLRQE0wq5hsAtFemsvH1E%2Fi8ow5GSYSsWnAj-kIAP62kFobyifELt36%3D"
    headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cookie': 'live_use_vvc=%22false%22; odin_tt=a5b308e92c2f826f447b22425cb49c1faa5a13b64c07a6f7309186819371d4c74fe5dcf480e52fe2931fba91397a83a31c94e2df31a3735b839683d58bf010781b5c5f61c231ab52f5ecfbc03f80ff23; douyin.com; device_web_cpu_core=8; device_web_memory_size=8; csrf_session_id=b154f2eb3608feb421dd6c9fe24bc2d4; passport_csrf_token=6bc63b63e5fe245d323c824928bc812e; passport_csrf_token_default=6bc63b63e5fe245d323c824928bc812e; bd_ticket_guard_client_web_domain=2; webcast_local_quality=sd; xgplayer_device_id=22662407371; xgplayer_user_id=81276237572; SEARCH_RESULT_LIST_TYPE=%22single%22; ttwid=1%7CUOwlzl-VvV0COewDTk3CsEdp4EMg8CUFA-ICTdsrLQw%7C1712887757%7Cb40c2475ea6f287e8da8722ef9dfcb4b1b9d35e05158a6fc6dbc3282a4caf15a; download_guide=%223%2F20240425%2F0%22; FORCE_LOGIN=%7B%22videoConsumedRemainSeconds%22%3A180%2C%22isForcePopClose%22%3A1%7D; s_v_web_id=verify_lvey9h9j_2fb16ac8_1098_92f3_e56d_31fdd7e86df0; pwa2=%220%7C0%7C3%7C1%22; dy_swidth=1512; dy_sheight=982; stream_recommend_feed_params=%22%7B%5C%22cookie_enabled%5C%22%3Atrue%2C%5C%22screen_width%5C%22%3A1512%2C%5C%22screen_height%5C%22%3A982%2C%5C%22browser_online%5C%22%3Atrue%2C%5C%22cpu_core_num%5C%22%3A8%2C%5C%22device_memory%5C%22%3A8%2C%5C%22downlink%5C%22%3A10%2C%5C%22effective_type%5C%22%3A%5C%224g%5C%22%2C%5C%22round_trip_time%5C%22%3A100%7D%22; strategyABtestKey=%221714099837.328%22; volume_info=%7B%22isUserMute%22%3Atrue%2C%22isMute%22%3Atrue%2C%22volume%22%3A0.5%7D; webcast_leading_last_show_time=1714127545977; webcast_leading_total_show_times=5; __live_version__=%221.1.1.9930%22; live_can_add_dy_2_desktop=%220%22; bd_ticket_guard_client_data=eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWl0ZXJhdGlvbi12ZXJzaW9uIjoxLCJiZC10aWNrZXQtZ3VhcmQtcmVlLXB1YmxpYy1rZXkiOiJCRExvdFozTlZJU3ZpQjZ3YzREeHdSdTYwaVY1eTIwUzM1UytLTllwTUs0Tmxoc3M3Z1ZjdFpYWmhiQ0ZWTzYrNEVsSGd0U25GM1BERWc4UFgvZFFodVE9IiwiYmQtdGlja2V0LWd1YXJkLXdlYi12ZXJzaW9uIjoxfQ%3D%3D; __ac_nonce=0662e349500a37adc5cc4; __ac_signature=_02B4Z6wo00f01L7KbBAAAIDD7DVMCkfZoXy-6miAAEmh7causFMBYmJugJr.Gc5DqsjImQzBd6vjF4gupiFbFa5e.Le4lsgcVyx9d-RO4D8MS4Lh0y8UKIObcEp5r-8dKPNWulkRQBwhj44zf2; IsDouyinActive=true; home_can_add_dy_2_desktop=%221%22; msToken=A1EV9tPuxIzZWRF9q2-kBCNOYHGFW0YMXVbT86nbSUXTc3y-qze_1b9s7kTRQegMXHV3ddX6FGRQQcffKYJFhpQkxSgI5HaNHX6eehzRoPsSRp5FlYAdWVgaliI=; msToken=BT1qpl5sqsDTjcctEjox76yu51E9MjryRPhgc1WTgpYJUrh4NWS9YxCdJywa_Nyqt1NIdPVAk9I8967mdnjNOMd1icKxmJZzLYnFgeqXjW3Y-5SE31kPMS8tbSzK',
        'priority': 'u=1, i',
        'referer': 'https://www.douyin.com/search/%E7%A6%8F%E8%A2%8B?aid=32efdea1-4fee-4683-b9a8-85f2fa19c2f7&type=live',
        'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
    }
    response = session.get(url, headers=headers)
    date_json = response.json()
    status_code = date_json.get("status_code")
    data_list = date_json.get("data")
    has_more = date_json.get("has_more")
    # 判断是否有福袋
    lottery = [item for item in data_list if condition(item)]
    print(f"搜索结果状态码：{status_code}\n"
          f"搜索结果数据长度：{len(data_list)}\n"
          f"有福袋的数据长度: {len(lottery)}\n"
          f"是否还有: {has_more}\n")
    #  如果没有了，就重新开始搜索
    if has_more == 0:
        offset = 0


def main():
    print("总流程控制")
    global offset
    number = 1
    while True:
        print(f"当前第{number}次搜索")
        search()
        offset += 10
        number += 1
        time.sleep(5)


if __name__ == '__main__':
    main()
