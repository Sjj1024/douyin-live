import time
import requests
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36',
    'Referer': 'https://www.douyin.com/',
}


# 过滤包含福袋的数据
def condition(data):
    lives = data['lives']
    rawdata = lives['rawdata']
    # print('当前过滤数据=', lives)
    # print('当前过滤数据的rawdata=', rawdata)
    res = 'has_ongoing_lottery' in rawdata
    # print('当前过滤数据的结果=', res)
    return res


# 读取短视频列表
def get_live_list(keyword):
    retry = 0
    browser_version = re.findall(r'/(\d+\.\d+\.\d+\.\d+) ', headers['User-Agent'])[0]
    url = 'https://www.douyin.com/aweme/v1/web/live/search/'
    params = {
        "device_platform": "webapp",
        "aid": "6383",
        "channel": "channel_pc_web",
        "version_code": "170400",
        "version_name": "17.4.0",
        "cookie_enabled": "true",
        "screen_width": "1920",
        "screen_height": "1080",
        "browser_platform": "Win32",
        "browser_name": "Chrome",
        "browser_version": browser_version,
        "browser_online": "true",
        "engine_version": browser_version,
        "os_name": "Windows",
        "os_version": "10",
        "cpu_core_num": "8",
        "device_memory": "8",
        "platform": "PC",
        "downlink": "10",
        "effective_type": "4g",
        "round_trip_time": "100",
        "webid": "",
        "msToken": "",
        "search_channel": "aweme_live",
        "keyword": keyword,
        "search_source": "switch_tab",
        "query_correct_type": "1",
        "is_filter_search": "0",
        "from_group_id": "",
        "offset": "0",
        "count": "10",
        "browser_language": "zh-CN"
    }
    # proxies = get_proxy_info()
    try:
        # 发送 POST 请求
        # response = requests.get(url, params=params, headers=headers, proxies=proxies, timeout=10)
        response = requests.get(url, params=params, headers=headers, timeout=10)
        # 检查响应状态码
        if response.status_code == 200:
            # 响应内容
            data = response.json()
            data = data['data']
            # 筛选出包含福袋的直播数据
            res = [item for item in data if condition(item)]
            print('获取关键字直播查询结果=', len(res))
            return res
        else:
            # 请求失败
            print(f'登录失败:{response.status_code}')
            raise Exception(f'登录失败:{response.status_code}')
    except Exception as e:
        print("请求列表信息异常=", e)
        print("重试中---", retry)
        get_live_list(keyword)


if __name__ == '__main__':
    con = 0
    while True:
        get_live_list('奖')
        time.sleep(5)
