from data.db_functions import create_new_symptom, get_user
from helper import word_search as w

def under_twenty(phone_num, message):
    user = get_user(phone=phone_num)[0]
    userID = user["_id"]

    symptomMessage = ""

    symptoms = w.word_search(message)
    for symptom in symptoms:
        create_new_symptom(userID, symptom, message)
        symptomMessage = symptomMessage + ", " + symptom

    
    txtResponse = {
        'status': True,
        'message': "These symptoms were recorded: " + symptomMessage
    }

    print(symptomMessage)
    return txtResponse
