from flask import Flask, request
from pyChatGPT import ChatGPT

# For more detail, you can refer to this repo 
# https://github.com/terry3041/pyChatGPT
session_token = ''
conversation_id = ''

app = Flask(__name__)
chatgpt = ChatGPT(session_token, conversation_id=conversation_id)

@app.route('/generate')
def generate():
    text = request.args.get('text')
    result = chatgpt.send_message(text)
    return result['message']

if __name__ == '__main__':
    app.run(debug=True)
