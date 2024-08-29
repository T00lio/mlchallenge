import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYueULUTkRy82Cgm21IcTfLjbeQKLwI00",
  authDomain: "react-app-from-learner-t-c8836.firebaseapp.com",
  projectId: "react-app-from-learner-t-c8836",
  storageBucket: "react-app-from-learner-t-c8836.appspot.com",
  messagingSenderId: "69422694816",
  appId: "1:69422694816:web:9dae27fff18576aa27a4c5",
  measurementId: "G-PCVE1F3665",
};

// Initialize Firebase and Firestore outside of the component to avoid re-initializing on every render
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function CTA() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (validateEmail(email)) {
      try {
        const emailCollection = collection(db, "subscribedEmails");
        await addDoc(emailCollection, {
          email: email,
          timestamp: new Date(),
        });
        setMessage("Thank you for subscribing!");
        setEmail(""); // Clear input after submission
      } catch (error) {
        console.error("Error adding document: ", error);
        setMessage("Error: Could not submit email.");
      }
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <section className="bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-300 py-12">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Stay up-to-date with our latest offers
        </h2>
        <p className="mt-4 text-white md:text-lg">
          Subscribe to our newsletter and be the first to know about our
          exclusive deals and new product launches.
        </p>
        <form
          className="mt-10 grid flex-col items-center gap-4 sm:flex-row"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="self-center justify-center ml-auto mr-auto w-full max-w-md rounded-md border-transparent bg-white p-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:flex-1"
          />
          <button
            type="submit"
            className="inline-flex h-12 w-full items-center justify-center rounded-md bg-indigo-600 px-6 text-sm font-medium text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Subscribe
          </button>
        </form>
        {message && <p className="mt-4 text-white">{message}</p>}
      </div>
    </section>
  );
}

export default CTA;
