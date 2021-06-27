from dotenv import load_dotenv
from data import db_functions as db

load_dotenv()


def new_user(phone, message):
    db.create_new_user(state="prompted", phone=phone)

    txtResponse = {
        'status': True,
        'message': "Hello and welcome to DMnMD! Please respond with your full name."
    }

    return txtResponse


