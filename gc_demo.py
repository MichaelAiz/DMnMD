from google.cloud import language_v1
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "E:/Projects/EngHack/auth.json"
client = language_v1.LanguageServiceClient()

text = "Hello doctor. I have 3 ants a broken wife an old desk. Also there is no way I am not awesome and old whore standing blood clots rotten apples."
document = {"content": text, "type_": language_v1.Document.Type.PLAIN_TEXT}
response = client.classify_text(request={'document': document})

print(text)

for category in response.categories:
    print(f"Category name: {category.name}")
    print(f"Category Confidence: {category.confidence}")



