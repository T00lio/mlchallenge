import React, { useState } from "react";
import { UserAuth } from "../../context/authContext";
import "./signin.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = UserAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <div className="singin-container">
      <form className="form" onSubmit={handleLogin}>
        <h2>Log into your account in</h2>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <hr />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default SignIn;
