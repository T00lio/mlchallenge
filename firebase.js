// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDiGhka0OUwkp63qDpqgfDT4g3_ZVUr-Ig",
//   authDomain: "react---ecomm.firebaseapp.com",
//   projectId: "react---ecomm",
//   storageBucket: "react---ecomm.appspot.com",
//   messagingSenderId: "935068213684",
//   appId: "1:935068213684:web:274e16a2176189b3d8d2e1",
//   measurementId: "G-30MHMH0W57",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBYueULUTkRy82Cgm21IcTfLjbeQKLwI00",
  authDomain: "react-app-from-learner-t-c8836.firebaseapp.com",
  projectId: "react-app-from-learner-t-c8836",
  storageBucket: "react-app-from-learner-t-c8836.appspot.com",
  messagingSenderId: "69422694816",
  appId: "1:69422694816:web:9dae27fff18576aa27a4c5",
  measurementId: "G-PCVE1F3665",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Firestore service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Get users collection data
export const usersCollectionRef = collection(db, "users");
