import logging
import os

from config import LOG_FILE_SAVE, LOG_FILE_NAME, LOG_LEVEL

# 第一步：创建文件日志对象
logger = logging.getLogger()
# 第二步：创建文件日志处理器，默认logging会自己创建一个处理器
file_fmt = "%(asctime)s - %(levelname)s - %(message)s"
# 配置日志文件保存
if LOG_FILE_SAVE:
    file_path = os.path.join(os.getcwd(), LOG_FILE_NAME)
    logging.basicConfig(level=LOG_LEVEL, format=file_fmt, filename=file_path, filemode="a", encoding="utf-8")
else:
    logging.basicConfig(level=LOG_LEVEL, format=file_fmt)
console_handler = logging.StreamHandler()
# 第三步：添加控制台文本处理器
console_handler.setLevel(level=LOG_LEVEL)
console_fmt = "%(asctime)s - %(levelname)s - %(message)s"
fmt1 = logging.Formatter(fmt=console_fmt)
console_handler.setFormatter(fmt=fmt1)
# 第四步：将控制台日志器、文件日志器，添加进日志器对象中
logger.addHandler(console_handler)

if __name__ == '__main__':
    logger.info("这是一条info消息")
