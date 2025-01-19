import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc } from "firebase/firestore";

// Configuration for source database (Public Read Access)
const sourceConfig = {
  apiKey: "AIzaSyAaJnf1qmK6CHjhl-rPshdjHtPivv-hkTU",
  authDomain: "menstrual-app-4b6b5.firebaseapp.com",
  projectId: "menstrual-app-4b6b5",

};
const sourceApp = initializeApp(sourceConfig);
const sourceDb = getFirestore(sourceApp);

// Configuration for destination database (Requires Authentication)
const destinationConfig = {
  apiKey: "",
  authDomain: "", // projectId+".firebaseapp.com"
  projectId: "",
};

const destinationApp = initializeApp(destinationConfig, "destination");
const destinationDb = getFirestore(destinationApp);

async function transferData(sourceCollection, destinationCollection) {
  try {
    console.log("Fetching data from:", sourceCollection);
    const sourceSnapshot = await getDocs(collection(sourceDb, sourceCollection));

    if (sourceSnapshot.empty) {
      console.log("No documents found in the source collection!");
      return;
    }

    for (const docSnapshot of sourceSnapshot.docs) {
      const docData = docSnapshot.data();  // ✅ Extract data
      const docID = docSnapshot.id;        // ✅ Get original document ID

      console.log(`Transferring document ID: ${docID}`);

      // ✅ Use setDoc() to keep the same document ID
      await setDoc(doc(destinationDb, destinationCollection, docID), docData);
    }
    console.log("✅ Data transfer complete with correct document names!");
  } catch (error) {
    console.error("❌ Error during transfer:", error);
  }
}

// Transfer data from "sourceCollection" to "destinationCollection"
transferData("Symptoms", "Symptoms");
transferData("Label", "Label");
transferData("Conditions", "Conditions");

