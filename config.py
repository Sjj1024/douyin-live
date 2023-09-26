import logging

# 配置日志信息
LOG_FILE_SAVE = False
LOG_FILE_NAME = "log.txt"
LOG_LEVEL = logging.DEBUG
LOG_FORMAT = "%(asctime)s - %(levelname)s - %(message)s"

# 直播信息配置：直播地址，直播用户排名，直播排名抓取间隔，直播推送到后台，推送到后台地址
LIVE_ROOM_URL = ""
# 是否抓取在线打赏排名
LIVE_RANK_LIST = True
# 获取礼物排名时间间隔
LIVE_RANK_INTERVAL = 30
# 使用ws推送直播数据
LIVE_WEB_SEND = False
# 是否开启HTTP推送
LIVE_HTTP_SEND = True
# HTTP推送地址
LIVE_WEB_SEND_URL = "http://dev.*******/game/gamemgnt"
# 应援UUID
DONATION_UUID = "efa3fc3d-efb8-4201-82fa-92d9aeaeb98d"
