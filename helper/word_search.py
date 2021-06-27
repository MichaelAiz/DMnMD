import sqlite3
import re

conn = sqlite3.connect('symptoms.db')
cur = conn.cursor()

symptoms = set()

for row in cur.execute("SELECT symptom FROM symptoms"):
    symptoms.add(row[0])


def word_search(message):
    symptom_list = []
    message = re.sub('[!@#$.,]', '', message)
    words = str.lower(message).split()

    for word in words:
        if word in symptoms:
            symptom_list.append(word)

    two_words = []

    for i in range(len(words)-1):
        two_words.append(f"{words[i]} {words[i+1]}")

    for two_word in two_words:
        if two_word in symptoms:
            symptom_list.append(two_word)

    three_words = []

    for i in range(len(words)-2):
        three_words.append(f"{words[i]} {words[i+1]} {words[i+2]}")

    for three_word in three_words:
        if three_word in symptoms:
            symptom_list.append(three_word)

    return symptom_list