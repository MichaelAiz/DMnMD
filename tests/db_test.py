import pytest
from data.db_state import get_db_conn
import data.db_functions as db


class Test:
    user_id = 0

    @classmethod
    def setup_class(cls):
        cls.test_user = {
            'state': 'confirmed',
            'name': 'test',
            'phone': 0
        }
        cls.test_msg = {
            'content': 'test'
        }
        cls.test_symptom = {
            'symptom': 'test',
            'content': 'test'
        }

    @classmethod
    def teardown_class(cls):
        client = get_db_conn()
        client["users"].delete_many({'user_id': cls.user_id})
        client["messages"].delete_many({"user_id": cls.user_id})
        client["symptoms"].delete_many({'user_id': cls.user_id})

    def test_create_user(self):
        new_user = db.create_new_user(self.test_user['state'], self.test_user['name'], self.test_user['phone'])
        self.user_id = new_user["_id"]
        assert self.test_user["name"] == new_user["name"]

    def test_create_message(self):
        new_message = db.create_new_message(self.user_id, self.test_msg["content"])

        assert self.test_msg["content"] == new_message["content"]

    def test_create_symptom(self):
        new_symptom = db.create_new_symptom(self.user_id, self.test_symptom["symptom"], self.test_symptom["content"])

        assert self.test_symptom["content"] == new_symptom["content"]

    def test_get_user(self):
        users = db.get_user(self.user_id)

        for user in users:
            assert user["name"] == self.test_user["name"]

    def test_get_message(self):
        msgs = db.get_message(user_id=self.user_id)

        for msg in msgs:
            assert msg["content"] == self.test_msg["content"]

    def test_get_symptom(self):
        symptoms = db.get_symptoms(user_id=self.user_id)

        for symptom in symptoms:
            assert symptom["symptom"] == self.test_symptom["symptom"]