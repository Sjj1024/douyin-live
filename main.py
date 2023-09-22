import logging
from src import dy_live

if __name__ == '__main__':
    # 日志配置
    LOG_FORMAT = "%(asctime)s - %(levelname)s - %(message)s"
    logging.basicConfig(level=logging.ERROR)
    # 修改为你的直播地址
    live_id = "https://live.douyin.com/933039431393"
    dy_live.parseLiveRoomUrl(live_id)
