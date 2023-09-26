# 配置日志信息
LOG_FILE_SAVE = False
LOG_FILE_NAME = "log.txt"
LOG_LEVEL = ""
LOG_FORMAT = "%(asctime)s - %(levelname)s - %(message)s"

# 直播信息配置：直播地址，直播用户排名，直播排名抓取间隔，直播推送到后台，推送到后台地址
LIVE_ROOM_URL = ""
LIVE_RANK_LIST = True
# 获取礼物排名时间间隔
LIVE_RANK_INTERVAL = 5
# 使用ws推送直播数据
LIVE_WEB_SEND = False
# 是否开启HTTP推送
LIVE_HTTP_SEND = True
# HTTP推送地址
LIVE_WEB_SEND_URL = "http://dev.degnity.com:8087/game/gamemgnt"
# 应援UUID
DONATION_UUID = "73ba8e83-e32d-4ef0-8eca-5877a4f5fab4"
