import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import "./signin.css";
import { auth } from "../../firebase";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="singin-container">
      <form className="form" onSubmit={signIn}>
        <h2>Log into your account in</h2>
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
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default SignIn;
