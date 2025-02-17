import firebase_admin
from firebase_admin import credentials, firestore
import json

key_file = "service_acc.json"
names=["Conditions","Symptoms","Label","regex","intent","lookup"]
cred = credentials.Certificate(key_file)

firebase_admin.initialize_app(cred)
db = firestore.client()

def import_collection(collection_name, json_file):
    with open(json_file, "r") as f:
        data = json.load(f)
    for doc_id, doc_data in data.items():
        db.collection(collection_name).document(doc_id).set(doc_data)

for name in names:
    print("Importing "+name)
    import_collection(name, name+".json")
    print(name+" Complete")