from flask import Flask, request

app = Flask(__name__)


@app.route('/')
def hello():
    print("hello 收到消息")
    return 'Hello, Flask!'


@app.route('/socket.io/')
def socket():
    print("socket 收到消息")
    return 'Hello, Flask!'


@app.route('/watch', methods=['POST'])
def watch():
    # 获取POST请求中的数据
    data = request.get_json()
    print(f"watch 收到消息: {data}")
    return 'Hello, Flask!'


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8998)
