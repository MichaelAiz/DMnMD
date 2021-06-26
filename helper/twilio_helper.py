from twilio.twiml.messaging_response import MessagingResponse


def generate_response(txtResponse):
    resp = MessagingResponse()
    resp.message(txtResponse["message"])

    return str(resp)
