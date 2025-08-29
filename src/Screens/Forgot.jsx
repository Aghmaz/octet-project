import React, { useState } from "react";
import { Security } from "@mui/icons-material";
import { TextField, InputAdornment, Button, Alert } from "@mui/material";
import { Person } from "@mui/icons-material";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add API call for password reset if needed
  };

  return (
    <div className="flex flex-row items-center">
      {/* Left Section */}
      <div className="w-[50%]">
        <div className="flex justify-center">
          <div className="bg-[#30854E] p-[10px] rounded-full">
            <Security sx={{ color: "white", fontSize: 60 }} />
          </div>
        </div>
        <h1 className="font-bold text-6xl text-center text-[#30854E] mt-20">
          Forgot Your Password?
        </h1>
        <p className="text-gray-400 font-semibold text-2xl text-center mt-10">
          Enter your email address and we'll send you a link to reset your
          password
        </p>
        <div className="flex justify-center mt-10">
          <div className="w-[40%]">
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={{ color: "gray" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "16px",
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                sx={{
                  marginTop: 6,
                  paddingY: 2,
                  borderRadius: 2,
                  bgcolor: "#30854E",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: 20,
                  "&:hover": {
                    bgcolor: "#246b3b",
                  },
                }}
              >
                Send Reset Link
              </Button>
              {submitted && (
                <Alert severity="info" sx={{ mt: 2 }}>
                  If this email exists, a reset link will be sent.
                </Alert>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[50%] bg-[#30854E] flex flex-col h-screen items-center justify-center ">
        <h1 className="font-bold text-6xl text-center text-white">
          Secure Your Account
        </h1>
        <p className="text-white font-semibold text-2xl text-center mt-10 w-[90%]">
          We care about your security. Reset your password easily and keep your
          account protected.
        </p>
        <div className="grid grid-cols-3 gap-10 mt-10">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-6xl text-center text-white">100%</h3>
            <p className="text-white mt-4">Privacy</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-6xl text-center text-white">24/7</h3>
            <p className="text-white mt-4">Support</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-6xl text-center text-white">Fast</h3>
            <p className="text-white mt-4">Recovery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
