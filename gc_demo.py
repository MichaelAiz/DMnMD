from google.cloud import language_v1
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "E:/Projects/EngHack/auth.json"
client = language_v1.LanguageServiceClient()

text = "Hello doctor. Recently I feel my back hurting. It hurts when I sit and when I walk."
document = {"content": text, "type_": language_v1.Document.Type.PLAIN_TEXT}
response = client.classify_text(request={'document': document})

print(text)

for category in response.categories:
    print(f"Category name: {category.name}")
    print(f"Category Confidence: {category.confidence}")




