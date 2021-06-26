from flask import Flask, request
from helper.function_selector import function_selector
from helper.twilio_helper import generate_response
from helper.new_user import new_user

app = Flask(__name__)

FUNCTIONS = {
    'new_user': new_user
}


@app.route('/receiveMsg', methods=['GET', 'POST'])
def recieve_msg():
    message = request.values.get('Body', None)
    phone = request.values.get('From')

    fn = function_selector(phone, message)

    function_out = FUNCTIONS[fn](phone, message)

    response = generate_response(function_out)

    return response


app.run()
