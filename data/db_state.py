import os

from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

client = MongoClient(os.getenv("MONGO_URI"))


def get_db_conn():
    return client["DMnMD"]
