# PortingMenstruApp
Ports data from the original firestore to a different one

This program requires the use of node.js

# Initializing the javascript

1. run mkdir firebase-transfer

2. run cd firebase-transfer

3. run npm init-y to initialize the Node.js project

4. run npm install firebase

5. add the transfer.js file to the firebase-transfer folder

# Setting up the Destination Firestore Knowledge Base
1. Publish the Firestore Database Rules to
   -  allow read: if true; //this enables public read access
   -  allow write: if true; //have this up temporarily as it allows anyone to add, remove or edit parts of the KB
2. Set up Web API Key
   - Open the gear icon to access Project settings
   - Check if the Web Api Key has a key in the General tab
       - if Web Api key is not there Enable Authentication by going to the left bar. It should be in the Build tab. Authorize email/password sign-in method

# Transfering the KB
1. Apply the information for Project settings' general page to the transfer.js file
   - Set destinationConfig to the Web Api Info with instructions
3. run node transfer.js


# JSON IMPORT AND EXPORT

To Export data from a Firestore Database into a json file, the following steps must be used
1. Set the Firestore Database's rules to allow read: if true;
2. Download a service account json credentials in the Firebase project's settings under Service account. Select the python option and click Generate private key
3. Rename the downloaded json file as "service_acc.json" and place in the same folder as exportjson.py
4. Run exportjson.py

To import data from a json file into a FireStore Database, the following steps must be used
1. Set the Firestore Database's rules to "allow write: if true;" Make sure to save the previous rule in place as leaving this on can be dangerous.
2. Download a service account json credentials in the Firebase project's settings under Service account. Select the python option and click Generate private key
3. Rename the downloaded json file as "service_acc.json" and place in the same folder as importjson.py
4. Run importjson.py
5. Reinstate the previous write rule
