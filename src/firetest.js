import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase"; // Import your Firestore setup

// Function to add a test document to a collection
export const addTestDocument = async () => {
  const testDocRef = doc(db, "testCollection", "testDocumentId");

  try {
    await setDoc(testDocRef, { data: "Hello, Firestore!" });
  } catch (error) {}
};

// Call the function to test Firestore connectivity
addTestDocument();
