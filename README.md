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
   -  allow read: if true;
   -  allow write: if true;
2. Set up Web API Key
   - Open the gear icon to access Project settings
   - Check if the Web Api Key has a key in the General tab
       - if Web Api key is not there Enable Authentication by going to the left bar. It should be in the Build tab. Authorize email/password sign-in method
   - Apply the information for Project settings' general page to the transfer.js file 
