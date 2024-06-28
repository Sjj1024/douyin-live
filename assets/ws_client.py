# 导入websocket-client包
import _thread
import time

from proto.dy_pb2 import PushFrame

import websocket


# 定义on_message回调函数用来处理 websocket事件——客户端接收服务端数据时触发
def on_open(ws_app):
    # _thread.start_new_thread(ping, (ws_app,))
    print(f"on_open收到消息")  # 当客户端接收到服务器响应回的数据时，把他打印出来显示一下


def ping(ws):
    while True:
        obj = PushFrame()
        obj.payloadType = 'hb'
        data = obj.SerializeToString()
        ws.send(data, websocket.ABNF.OPCODE_BINARY)
        print("发送心跳......")
        time.sleep(10)


def on_message(ws_app, message):
    print(f"on_message收到消息: {message}")  # 当客户端接收到服务器响应回的数据时，把他打印出来显示一下


def on_error(ws_app, message):
    print(f"on_error收到消息: {message}")  # 当客户端接收到服务器响应回的数据时，把他打印出来显示一下


def on_close(ws_app, message, err):
    print(f"on_close收到消息:{ws_app}, {message}, err:{err}")  # 当客户端接收到服务器响应回的数据时，把他打印出来显示一下


# 实例化一个ws客户端
url = "wss://webcast5-ws-web-lf.douyin.com/webcast/im/push/v2/?room_id=7383939809368328987&compress=gzip&version_code=180800&webcast_sdk_version=1.0.14-beta.0&live_id=1&did_rule=3&user_unique_id=7975819901031660357&identity=audience&signature=6hRWznwaKRkB51YC&aid=6383&device_platform=web&browser_language=zh-CN&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0+%28Windows+NT+10.0%3B+Win64%3B+x64%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Chrome%2F126.0.0.0+Safari%2F537.36+Edg%2F126.0.0.0"

header = {
    'cookie': 'ttwid=1%7C9SEGPfK9oK2Ku60vf6jyt7h6JWbBu4N_-kwQdU-SPd8%7C1697721607%7Cc406088cffa073546db29932058720720521571b92ba67ba902a70e5aaffd5d6',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0'}

ws = websocket.WebSocketApp(url=url,
                            header=header,
                            on_open=on_open,
                            on_message=on_message,
                            on_error=on_error,
                            on_close=on_close)  # 传入的是回调函数所以不要小括号

# 开启ws长连接
# 启动一个无限循环，保持WebSocket连接的持续开放状态，并监听来自服务器的数据流。
# 当有新的消息到达时，将通过 on_message 回调函数处理这些消息。
ws.run_forever()
