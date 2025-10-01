import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Security, Person } from "@mui/icons-material";
import { TextField, InputAdornment, Button, Alert } from "@mui/material";

const Forgot = () => {
  const [submitted, setSubmitted] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email Required"),
  });

  const handleSubmit = () => {
    setSubmitted(true);
    // Add API call for password reset if needed
  };

  return (
    <div className="flex flex-col md:flex-row items-center h-screen overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="bg-[#30854E] p-3 md:p-4 rounded-full">
            <Security sx={{ color: "white", fontSize: { xs: 40, md: 60 } }} />
          </div>
        </div>

        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-center text-[#30854E] mt-4 md:mt-8">
          Forgot Your Password?
        </h1>

        <p className="text-gray-400 font-medium text-sm md:text-base lg:text-xl text-center mt-4 md:mt-6">
          Enter your email address and we'll send you a link to reset your
          password
        </p>

        <div className="flex justify-center mt-6 md:mt-8">
          <div className="w-full max-w-sm">
            <Formik
              initialValues={{ email: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange, touched, errors }) => (
                <Form>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
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
                      marginTop: 4,
                      paddingY: 2,
                      borderRadius: 2,
                      bgcolor: "#30854E",
                      color: "#fff",
                      fontWeight: "600",
                      fontSize: { xs: 16, md: 20 },
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
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-[#30854E] flex flex-col h-screen items-center justify-center p-4 md:p-6">
        <h1 className="font-bold text-xl md:text-3xl lg:text-4xl text-center text-white">
          Secure Your Account
        </h1>

        <p className="text-white font-medium text-xs md:text-sm lg:text-base text-center mt-4 md:mt-6 w-full max-w-md">
          We care about your security. Reset your password easily and keep your
          account protected.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8 w-full max-w-lg">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-3xl md:text-5xl lg:text-6xl text-center text-white">
              100%
            </h3>
            <p className="text-white mt-2 md:mt-4">Privacy</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-bold text-3xl md:text-5xl lg:text-6xl text-center text-white">
              24/7
            </h3>
            <p className="text-white mt-2 md:mt-4">Support</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-bold text-3xl md:text-5xl lg:text-6xl text-center text-white">
              Fast
            </h3>
            <p className="text-white mt-2 md:mt-4">Recovery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
