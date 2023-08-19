import React, { useState } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/authContext";

function SignUp() {
  const { createUser } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/profile");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="singin-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="formTitle">Create account</h1>
        <p>
          Already have an account? <a href="/Singin">Sing In</a>
        </p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
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
