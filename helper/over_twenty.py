from google.cloud import language_v1
#from word_search import word_search()
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "E:/Projects/EngHack/auth.json"
client = language_v1.LanguageServiceClient()

def over_twenty(message):
    text = message
    document = {"content": text, "type_": language_v1.Document.Type.PLAIN_TEXT}
    response = client.classify_text(request={'document': document})
    result = {}

    print(text)

    for category in response.categories:
        result[category.name] = category.confidence #Turn the categories into a dictionary of the form: {category.name: category.confidence}
        print(f"Category name: {category.name}")
        print(f"Category Confidence: {category.confidence}")
        if("Health" in category.name and category.confidence > 0.4):
            #word_search(message)

    if(not result): #checks if the dictionary is empty to see if no categories were returned
        #word_search(message)
    
    txtResponse = {
        "status": True,
        "message": "These symptoms were recorded:"
    }

    return txtResponse
