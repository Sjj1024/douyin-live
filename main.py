import logging
from src import dy_live
from src.utils.http_send import send_start

if __name__ == '__main__':
    # 日志配置
    LOG_FORMAT = "%(asctime)s - %(levelname)s - %(message)s"
    logging.basicConfig(level=logging.ERROR)
    # 推送直播点赞等数据
    send_start()
    # 修改为你的直播地址
    live_id = "https://live.douyin.com/266087841771"
    dy_live.parseLiveRoomUrl(live_id)
