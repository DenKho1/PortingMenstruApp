# From KB->JSON
import firebase_admin
import json
from firebase_admin import credentials
import requests


key_file = "service_acc.json"

names=["Conditions","Symptoms","Label","Dialogue","regex","intent","lookup"]

cred = credentials.Certificate(key_file)

firebase_admin.initialize_app(cred)

from firebase_admin import firestore

firestore_client = firestore.client()

def exportjson(name):
    collection_name = name 
    documents = firestore_client.collection(collection_name).stream()
    data = {}

    for doc in documents:
         data[doc.id] = doc.to_dict()
    json_file = name+'.json'

    with open(json_file, 'w') as file:

        json.dump(data, file, indent=4)

    print(f"Data has been exported to {json_file}")
           
for name in names:
    exportjson(name)
