from flask import Flask, request, jsonify
from data.db_functions import get_user, get_symptoms, get_message
from helper.function_selector import function_selector
from helper.twilio_helper import generate_response
from helper.new_user import new_user
from helper.over_twenty import over_twenty
from helper.under_twenty import under_twenty
from helper.confirm_registration import confirm_registration
import os
from flask_socketio import SocketIO, emit
from twilio.rest import Client

app = Flask(__name__)
sio = SocketIO(app, cors_allowed_origins="*")

os.environ["PYTHONPATH"] = os.getcwd()

FUNCTIONS = {
    'new_user': new_user,
    "confirm_registration": confirm_registration,
    "over_twenty": over_twenty,
    "under_twenty": under_twenty
}

twilio_client = Client(os.getenv('TWILIO_ACCOUNT_SID'), os.getenv('TWILIO_AUTH_TOKEN'))


@sio.on('connect')
def connect():
    print("conntected")


@sio.on("message")
def handle_message(data):
    print(data)
    twilio_client.messages.create(body=data['message'], from_="+16479521958", to=data['phone'])


@app.route('/receiveMsg', methods=['GET', 'POST'])
def recieve_msg():
    message = request.values.get('Body', None)
    phone = request.values.get('From')
    sio.emit('message', {'message': message, 'phone': phone})

    fn = function_selector(phone, message)

    function_out = FUNCTIONS[fn](phone, message)

    response = generate_response(function_out)

    return response


@app.route('/getUser', methods=['GET'])
def get_user():
    id = None
    phone_num = None
    name = None
    if 'id' in request.args:
        id = int(request.args['id'])
    if 'phone_num' in request.args:
        phone = request.args['phone_num']
    if 'name' in request.args:
        name = request.args['name']
    user = get_user(id, name, phone)
    return jsonify(user)


@app.route('/getSymptoms', methods=['GET'])
def get_symptoms():
    id = None
    user_id = None
    symptom = None
    if 'id' in request.args:
        id = int(request.args['id'])
    if 'user_id' in request.args:
        user_id = int(request.args['user_id'])
    if 'symptom' in request.args:
        symptom = request.args['symptom']
    symptoms = get_symptoms(id, user_id, symptom)
    return jsonify(symptoms)


@app.route('/getMessages', methods=['GET'])
def get_messages():
    id = None
    user_id = None
    if 'id' in request.args:
        id = int(request.args['id'])
    if 'user_id' in request.args:
        user_id = int(request.args['user_id'])
    messages = get_message(id, user_id)
    return jsonify(messages)


sio.run(app)
