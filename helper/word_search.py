import sqlite3
import re

conn = sqlite3.connect('symptoms.db')
cur = conn.cursor()

symptoms = set()

for row in cur.execute("SELECT symptom FROM symptoms"):
    symptom_text = row[0]
    symptom_text = re.sub('[!@#$.,()]', '', symptom_text)
    symptoms.add(symptom_text)
    for symptom in symptom_text.split():
        if symptom not in [',', ')', '(']:
            symptoms.add(symptom)


def word_search(message):
    symptom_list = []
    recorded_words = set()
    message = re.sub('[!@#$.,]', '', message)
    words = str.lower(message).split()
    two_words = []
    three_words = []

    for i in range(len(words)-1):
        two_words.append(f"{words[i]} {words[i+1]}")

    for i in range(len(words)-2):
        three_words.append(f"{words[i]} {words[i+1]} {words[i+2]}")

    for three_word in three_words:
        if three_word in symptoms:
            symptom_list.append(three_word)
            words = three_word.split()
            for word in words:
                recorded_words.add(word)

    for two_word in two_words:
        if two_word in symptoms:
            symptom_list.append(two_word)
            words = two_word.split()
            for word in words:
                recorded_words.add(word)

    for word in words:
        if word in symptoms and word not in recorded_words and len(word) > 3:
            symptom_list.append(word)



    return symptom_list