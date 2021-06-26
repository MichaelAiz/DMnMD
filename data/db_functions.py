from data.db_state import get_db_conn


def create_new_user(state=None, name=None, phone=None):
    new_user = {
        "state": state,
        "name": name,
        "phone": phone
    }

    users = get_db_conn()["users"]
    new_user_id = users.insert_one(new_user).inserted_id

    new_user["_id"] = new_user_id

    return new_user


def create_new_message(user_id, content):
    new_message = {
        'user_id': user_id,
        'content': content
    }

    messages = get_db_conn()["messages"]
    new_mesage_id = messages.insert_one(new_message).inserted_id

    new_message["_id"] = new_mesage_id
    return new_message


def create_new_symptom(user_id, symptom, content):
    new_symptom = {
        'user_id': user_id,
        'symptom': symptom,
        'content': content
    }

    symptoms = get_db_conn()["messages"]
    new_symptom_id = symptoms.insert_one(new_symptom).inserted_id

    new_symptom["_id"] = new_symptom_id
    return new_symptom

def generate_query_obj(proto_obj):
    query_obj = {}
    for key, val in proto_obj.items():
        if val is not None:
            query_obj[key] = val
    return query_obj

def get_user(_id=None, state=None, name=None, phone=None):
    proto_query_obj = {
        '_id': _id,
        'state': state,
        'name': name,
        'phone': phone
    }
    query_obj = generate_query_obj(proto_query_obj)

    users = get_db_conn()["users"]

    return users.find(query_obj)


def get_message(_id=None, user_id=None, content=None):
    proto_query_obj = {
        '_id': _id,
        'user_id': user_id,
        'content': content
    }
    query_obj = generate_query_obj(proto_query_obj)

    messages = get_db_conn()["messages"]

    return messages.find(query_obj)


def get_symptoms(_id=None, user_id=None, symptom=None, content=None):
    proto_query_obj = {
        '_id': _id,
        'user_id': user_id,
        'symptom': symptom,
        'content': content
    }
    query_obj = generate_query_obj(proto_query_obj)

    symptoms = get_db_conn()["symptoms"]

    return symptoms.find(query_obj)

