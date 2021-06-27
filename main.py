from flask import Flask, request, jsonify
from data.db_functions import get_user, get_symptoms, get_message
from helper.function_selector import function_selector
from helper.twilio_helper import generate_response
from helper.new_user import new_user
from helper.over_twenty import over_twenty
from helper.confirm_registration import confirm_registration
import os

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

@app.route('./getUser', methods = ['GET'])
def get_user():
    id = None
    phone_num = None
    name = None
    if ('id' in request.args):
        id = int(request.args['id'])
        user = get_user(id, phone_num, name)[0]
        return jsonify(user)
    if('phone_num' in request.args):
        phone = request.args['phone_num']
        user = get_user(id, phone_num, name)[0]
        return jsonify(user)
    if('name' in request.args):
        name = request.args['name']
        user = get_user(id, phone_num, name)[0]
        return jsonify(user)

@app.route('./getSymptoms', methods = ['GET'])
def get_symptoms():
    id = None
    user_id = None
    symptom = None
    if('id' in request.args):
        id = int(request.args['id'])
        symptoms = get_symptoms(id, user_id, symptom)
        return jsonify(symptoms) #should only return one symptom since id was specified
    if('user_id' in request.args):
        user_id = int(request.args['user_id'])
        symptoms = get_symptoms(id, user_id, symptom)
        return jsonify(symptoms) # should return all symptoms associated with user
    if('symptom' in request.args):
        symptom = request.args['symptom']
        symptoms = get_symptoms(id, user_id, symptom)
        return jsonify(symptoms) 
    

@app.route('./getMessages', methods = ['GET'])
def get_messages():
    id = None
    user_id = None
    if('id' in request.args):
        id = int(request.args['id'])
        messages=get_message(id, user_id)
        return jsonify(messages) #should return a specific message
    if('user_id' in request.args):
        user_id = int(request.args['user_id'])
        messages=get_message(id, user_id) 
        return jsonify(messages) #should return all messages associated with user

app.run()
