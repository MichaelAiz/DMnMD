import pymongo, os, re
from dotenv import load_dotenv

# from confirm_registration import confirm_registration() 
# from new_user import new_user()
# from over_twenty import over_twenty()
# from under_twenty import under_twenty()

load_dotenv()

myclient = pymongo.MongoClient(os.environ["MONGO_URI"])
mydb = myclient["DMnMD"]
mycol = mydb["users"]


def function_selector(phone_num, msg):
    # Query db for matching number
    query = {"phone": phone_num}
    res = mycol.find_one(query)

    # Regex to count words
    words = len(re.findall(r'\w+', msg))

    if res == None:
        return "new_user"

    else:
        if res["state"] == "prompted":
            return "confirm_registration"

        else:
            if words > 20:
                return "over_twenty"
            else:
                return "under_twenty"
