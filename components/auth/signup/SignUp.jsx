import React, { useState } from "react";
import { UserAuth } from "../../../context/authContext";
import { Container, Typography, TextField, Button, Link } from "@mui/material";

function SignUp() {
  const { createUser } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setError] = useState("");

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  };

  const formContainerStyle = {
    width: "100%",
    maxWidth: "400px",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  };

  const formTitleStyle = {
    marginBottom: "16px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    createUser(email, password);
  };

  return (
    <div style={containerStyle}>
      <Container component="main" maxWidth="xs" style={formContainerStyle}>
        <Typography variant="h5" style={formTitleStyle}>
          Create account
        </Typography>
        <Typography variant="body2">
          Already have an account? <Link href="/login">Log In</Link>
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            style={{ marginTop: "16px" }}
          >
            Sign up
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default SignUp;
