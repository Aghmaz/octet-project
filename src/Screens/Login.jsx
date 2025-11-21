import React, { useState } from "react";
import { Person, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { authAPI } from '../services/api';
import { Alert, Snackbar } from '@mui/material';

const Login = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email Required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password Required"),
  });

  const navigate = useNavigate();

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      setLoading(true);
      setError('');
      
      const response = await authAPI.login({
        email: values.email,
        password: values.password,
      });

      if (response.success) {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('token', response.token);
        navigate("/template");
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <>
      <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError('')}>
        <Alert onClose={() => setError('')} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
      
      <div className="flex  justify-center content-center lg:flex-row  h-screen lg:items-center   ">
      {/* Login Form Section */}
      <div className="w-full md:w-1/2 mt-50 pt-36">
        <div className="flex  flex-col   items-center">
          <div className="bg-[#167D3C] p-[10px] rounded-full  ">
            <Person sx={{ color: "white", fontSize: 60 }} />
          </div>
        </div>
        <h1 className="font-bold text-5xl text-center text-[#167D3C] mt-10">
          Welcome Back
        </h1>
        <p className="text-gray-300 font-semibold text-lg text-center mt-6">
          Sign in to continue building your professional resume
        </p>

        <div className="flex justify-center mt-20">
          <div className="w-[100%] sm:w-[70%] md:w-[60%] lg:w-[40%] xl:w-[50%] 2xl:w-[40%]">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isValid,
                dirty,
              }) => (
                <Form>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon
                            sx={{
                              color:
                                touched.email && errors.email
                                  ? "red"
                                  : "#157C3B",
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",

                        "& fieldset": {
                          borderColor: "gray",
                          borderWidth: "1px",
                        },
                        "&:hover fieldset": {
                          borderColor:
                            touched.email && errors.email
                              ? "#D32f2f"
                              : "#157C3B",
                        },
                        "&.Mui-focused": {
                          boxShadow:
                            touched.email && errors.email
                              ? `0 0 0 0.2rem rgba(211, 47, 47, 0.4)`
                              : `0 0 0 0.2rem rgba(21, 124, 59, 0.4)`,
                        },

                        "&.Mui-focused fieldset": {
                          borderColor:
                            touched.email && errors.email
                              ? "#D32f2f"
                              : "#157C3B",
                          borderWidth: "2px",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color:
                          touched.email && errors.email ? "#D32f2f" : "#157C3B",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "red",
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon
                            sx={{
                              color:
                                touched.password && errors.password
                                  ? "red"
                                  : "#157C3B",
                            }}
                          />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      marginTop: 3,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",

                        "& fieldset": {
                          borderColor: "gray",
                          borderWidth: "1px",
                        },
                        "&:hover fieldset": {
                          borderColor:
                            touched.password && errors.password
                              ? "#D32f2f"
                              : "#157C3B",
                        },
                        "&.Mui-focused": {
                          boxShadow:
                            touched.password && errors.password
                              ? `0 0 0 0.2rem rgba(211, 47, 47, 0.4)`
                              : `0 0 0 0.2rem rgba(21, 124, 59, 0.4)`,
                        },

                        "&.Mui-focused fieldset": {
                          borderColor:
                            touched.password && errors.password
                              ? "#D32f2f"
                              : "#157C3B",
                          borderWidth: "2px",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color:
                          touched.password && errors.password
                            ? "#D32f2f"
                            : "#157C3B",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "red",
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={!isValid || !dirty || loading}
                    sx={{
                      marginTop: 6,
                      backgroundColor: "#166c36",
                      "&:hover": { backgroundColor: "#155a31" },
                      color: "white",
                      padding: "20px",
                      borderRadius: "8px",
                      fontSize: "15px",
                      fontWeight: "bold",

                      "&.Mui-disabled": {
                        backgroundColor: "#f0fdf4",
                        color: "#737473",
                        padding: "20px",
                        borderRadius: "8px",
                        fontSize: "15px",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    {loading ? 'Signing In...' : 'Sign In To Your Account'}
                  </Button>
                </Form>
              )}
            </Formik>
            <div
              style={{
                textAlign: "center",
                marginTop: "40px",
                backgroundColor: "#fff",
              }}
            >
              <Divider sx={{ my: 3 }}>Don't Have An Account?</Divider>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => navigate("/signup")}
                sx={{
                  border: "2px solid #15803d ",
                  color: "green",
                  fontWeight: "bold",
                  borderRadius: "12px",
                  textTransform: "none",
                  padding: "15px",
                  fontSize: "15px",
                  "&:hover": {
                    borderColor: "darkgreen",
                    backgroundColor: "rgba(0, 128, 0, 0.05)",
                    transform: "translateY(-1px)",
                    fontSize: "16px",
                  },
                }}
              >
                Create New Account
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 md:w-1/2  hidden  bg-[#30854E] md:flex flex-col   min-h-[150vh]  items-center  justify-center ">
        <h1 className="font-bold text-5xl text-center text-white">
          Build Your Future
        </h1>
        <p className="text-white/70 font-semibold text-lg text-center mt-8">
          Create professional resumes that get you hired with our modern <br />
          templates and AI-powered suggestionsn
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 w-full max-w-lg">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-5xl text-center text-white">50K+</h3>
            <p className="text-white mt-4">Resume Created</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-5xl text-center text-white">95%</h3>
            <p className="text-white mt-4">Success Rate</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-5xl text-center text-white">24/7</h3>
            <p className="text-white mt-4">Support</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
