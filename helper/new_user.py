from twilio.rest import Client
from twilio.twiml.messaging_response import MessagingResponse
from dotenv import load_dotenv
import os
#from create_new_user import

load_dotenv()

account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
client = Client(account_sid, auth_token)

def new_user():
    message = client.messages \
                .create(
                     body="Please enter your name and phone number",
                     from_='+1',
                     to='+1'
                 )
    


