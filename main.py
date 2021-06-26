from flask import Flask, request

app = Flask(__name__)

@app.route('/receiveMsg', methods=['GET', 'POST'])
def recieve_msg():
    message = request.values.get('Body', None)
    phone = request.values.get('From')
    print(message)


app.run()
