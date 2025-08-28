import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { Security } from "@mui/icons-material";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add API call for password reset if needed
  };

  return (
    <div className="flex flex-row items-center min-h-screen">
      {/* Left Side */}
      <div className="w-[50%] flex flex-col items-center justify-center">
        <div className="bg-green-700 p-2 rounded-full w-fit mb-4">
          <Security sx={{ color: "white", fontSize: 40 }} />
        </div>
        <h1 className="font-bold text-6xl text-center text-[#30854E]">
          Forgot Your Password?
        </h1>
      </div>

      {/* Right Side */}
      <div className="w-[50%] bg-[#30854E] flex flex-col h-screen items-center justify-center">
        <h1 className="font-bold text-5xl text-center text-white mb-6">
          Reset Password
        </h1>
        <p className="text-white font-semibold text-xl text-center mb-8 w-[90%]">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ width: "100%", maxWidth: 400 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              "& .MuiInputLabel-root": {
                color: "gray", // default label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "green", // when focused
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              mb: 2,
              backgroundColor: "#256029",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.1rem",
              ":hover": { backgroundColor: "#1e4e23" },
            }}
          >
            Send Reset Link
          </Button>
          {submitted && (
            <Alert severity="info" sx={{ mt: 2 }}>
              If this email exists, a reset link will be sent.
            </Alert>
          )}
        </Box>
      </div>
    </div>
  );
};

export default Forgot;
