import os

from flask import Flask, request
from helper.function_selector import function_selector
from helper.twilio_helper import generate_response
from helper.new_user import new_user
from helper.over_twenty import over_twenty
from helper.confirm_registration import confirm_registration

app = Flask(__name__)

os.environ["PYTHONPATH"] = os.getcwd()

FUNCTIONS = {
    'new_user': new_user,
    "confirm_registration": confirm_registration,
    "over_twenty": over_twenty
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
