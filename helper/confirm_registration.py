import pymongo, os
from dotenv import load_dotenv

load_dotenv()

myclient = pymongo.MongoClient(os.environ["MONGO_URI"])
mydb = myclient["DMnMD"]
mycol = mydb["users"]

def confirm_registration(phone_num):
    mycol.update_one({'phone': phone_num}, {'$set': {'state': 'confirmed'}})

    txtResponse = {
        'status': True,
        'message': "Your registration has been confirmed!"
    }

    return txtResponse

