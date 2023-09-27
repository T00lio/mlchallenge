import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase"; // Import your Firestore setup

// Function to add a test document to a collection
export const addTestDocument = async () => {
  const testDocRef = doc(db, "testCollection", "testDocumentId");

  try {
    await setDoc(testDocRef, { data: "Hello, Firestore!" });
    console.log("Test document added to Firestore successfully.");
  } catch (error) {
    console.error("Error adding test document to Firestore: ", error);
  }
};

// Call the function to test Firestore connectivity
addTestDocument();
