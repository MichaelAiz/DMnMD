import sqlite3
import pandas as pd
from numpy import nan

conn = sqlite3.connect('symptoms.db')


def run_loader():
    df = pd.read_csv('data/symptoms.csv')
    del df['syd']
    df['symptom'] = df['symptom'].replace("", nan)
    df = df.dropna(subset=["symptom"])
    df['symptom'] = df['symptom'].apply(str).apply(str.lower)

    df.to_sql('symptoms', con=conn)
