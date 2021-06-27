from flask import Flask, request, jsonify
from data.db_functions import get_user, get_symptoms, get_message
from helper.function_selector import function_selector
from helper.twilio_helper import generate_response
from helper.new_user import new_user
from helper.over_twenty import over_twenty
from helper.under_twenty import under_twenty
from helper.confirm_registration import confirm_registration
from helper.save_message import save_message
import os
from flask_socketio import SocketIO
from twilio.rest import Client
from flask_cors import CORS
from bson.json_util import dumps

app = Flask(__name__)
CORS(app)
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
    save_message(phone, message)

    fn = function_selector(phone, message)

    function_out = FUNCTIONS[fn](phone, message)

    response = generate_response(function_out)

    return response


@app.route('/getUser', methods=['GET'])
def user():
    id = None
    phone = None
    name = None
    res = []
    if 'id' in request.args:
        id = int(request.args['id'])
    if 'phone_num' in request.args:
        phone = request.args['phone_num']
    if 'name' in request.args:
        name = request.args['name']
    users = get_user(id, name, phone)

    for user in users:
        res.append(user)
    return dumps(res)


@app.route('/getSymptoms', methods=['GET'])
def symptoms():
    id = None
    user_id = None
    symptom = None
    res = []
    if 'id' in request.args:
        id = int(request.args['id'])
    if 'user_id' in request.args:
        user_id = int(request.args['user_id'])
    if 'symptom' in request.args:
        symptom = request.args['symptom']

    symptoms = get_symptoms(id, user_id, symptom)

    for symptom in symptoms:
        res.append(symptom)

    return dumps(res)


@app.route('/getMessages', methods=['GET'])
def messages():
    id = None
    user_id = None
    res = []
    if 'id' in request.args:
        id = int(request.args['id'])
    if 'user_id' in request.args:
        user_id = int(request.args['user_id'])
    messages = get_message(id, user_id)

    for message in messages:
        res.append(message)
    return dumps(res)


sio.run(app)
