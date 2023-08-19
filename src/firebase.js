// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiGhka0OUwkp63qDpqgfDT4g3_ZVUr-Ig",
  authDomain: "react---ecomm.firebaseapp.com",
  projectId: "react---ecomm",
  storageBucket: "react---ecomm.appspot.com",
  messagingSenderId: "935068213684",
  appId: "1:935068213684:web:274e16a2176189b3d8d2e1",
  measurementId: "G-30MHMH0W57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
