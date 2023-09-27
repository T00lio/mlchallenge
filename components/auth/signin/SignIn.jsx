import React, { useState } from "react";
import { UserAuth } from "../../../context/authContext";
import { Container, Typography, TextField, Button } from "@mui/material";

function SignIn() {
  const { signIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    signIn(email, password);
  };

  return (
    <div style={containerStyle}>
      <Container style={formContainerStyle} component="main" maxWidth="xs">
        <Typography variant="h5" style={formTitleStyle}>
          Log into your account
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
            Log In
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default SignIn;
