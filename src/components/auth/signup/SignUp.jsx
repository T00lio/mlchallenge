import { useState } from "react";
import { UserAuth } from "../../../context/authContext";
import "./signup.css";

function SignUp() {
  const { createUser } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    createUser(email, password);
  };

  return (
    <div className="singin-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="formTitle">Create account</h1>
        <p>
          Already have an account? <a href="/login">Log In</a>
        </p>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          className="input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          className="input"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="submitButton" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
