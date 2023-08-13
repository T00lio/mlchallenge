import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import "./signin.css";
import { auth } from "../../firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="singin-container">
      <form className="form" onSubmit={signUp}>
        <h1>Create account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <hr />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
