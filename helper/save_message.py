from data.db_functions import get_user, create_new_message


def save_message(phone_number, message):
    user_id = get_user(phone=phone_number)[0]['_id']

    create_new_message(user_id, message)
