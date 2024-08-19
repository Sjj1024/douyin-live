from flask import Flask, request

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


@app.route('/message', methods=['POST'])
def post_user_info():
    # postman 使用默认请求头application/json
    message = request.get_json()
    print(f"收到消息: {message}")
    return {"success": "ok"}


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
