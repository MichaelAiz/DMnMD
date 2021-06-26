# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client
from Key_Grabber import key


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = key('TWILIO_ACCOUNT_SID')
auth_token = key('TWILIO_AUTH_TOKEN')
client = Client(account_sid, auth_token)

message = client.messages \
    .create(
         body='OOGA BOOGA. THIS NOT A BOT',
         from_='+1',
         to='+1'
     )

print(message.sid)