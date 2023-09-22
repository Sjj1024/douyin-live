import websocket
import threading

from config import LIVE_WEB_SEND


def on_open(ws):
    print("连接已建立")
    # 发送消息给服务器
    ws.send("Hello, server!")


def on_message(ws, message):
    print("收到服务端的消息：", message)


def on_close(ws):
    print("连接已关闭")


def on_error(ws, error):
    print("发生错误：", error)


def send_msg(msg: str):
    print("对外提供的方法" + msg)


# 创建WebSocket连接
ws_send = websocket.WebSocketApp("ws://192.168.110.196:8989/echo",
                                 on_open=on_open,
                                 on_message=on_message,
                                 on_close=on_close,
                                 on_error=on_error)

if LIVE_WEB_SEND:
    # 启动WebSocket客户端
    print(f"start send websocket")
    # 阻塞，所以使用线程启动
    t = threading.Thread(target=ws_send.run_forever)
    t.start()
    # ws_send.run_forever()
