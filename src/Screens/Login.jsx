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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

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

  const handleSubmit = (values) => {
    alert("User Login");
  };

  return (
    <div className="flex flex-row items-center">
      {/* Login Form Section */}
      <div className="w-[50%]">
        <div className="flex justify-center">
          <div className="bg-[#30854E] p-[10px] rounded-full">
            <Person sx={{ color: "white", fontSize: 60 }} />
          </div>
        </div>
        <h1 className="font-bold text-6xl text-center text-[#30854E] mt-20">
          Welcome Back
        </h1>
        <p className="text-gray-400 font-semibold text-2xl text-center mt-10">
          Sign in to continue building your professional <br /> resume
        </p>

        <div className="flex justify-center mt-10">
          <div className="w-[40%]">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
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
                  {/* Email Field */}
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
                                touched.email && errors.email ? "red" : "gray",
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "16px",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "red",
                      },
                    }}
                  />

                  {/* Password Field */}
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
                                  : "gray",
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
                      marginTop: 4,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "16px",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "red",
                      },
                    }}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    fullWidth
                    disabled={!isValid || !dirty}
                    sx={{
                      marginTop: 6,
                      paddingY: 2,
                      borderRadius: 2,
                      bgcolor: "#30854E",
                      color: "#fff",
                      fontWeight: "600",
                      fontSize: 20,
                      "&.Mui-disabled": {
                        bgcolor: "#a5d6a7",
                        color: "#f5f5f5",
                      },
                    }}
                  >
                    Sign In to Your Account
                  </Button>
                </Form>
              )}
            </Formik>

            {/* Text + Button Section */}
            <div
              style={{
                textAlign: "center",
                marginTop: "70px",
                backgroundColor: "#fff",
              }}
            >
              <hr />
              <p className="-mt-[14px] mb-14 bg-white w-56 mx-auto font-semibold tracking-wider text-gray-500">
                {" "}
                New to Resume Builder?
              </p>

              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: "600",
                  textTransform: "none",
                  borderColor: "#30854E",
                  color: "#30854E",
                  paddingY: 1.5,
                  "&:hover": {
                    borderColor: "#246b3b",
                    backgroundColor: "rgba(48,133,78,0.04)",
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
      <div className="w-[50%] bg-[#30854E] flex flex-col h-screen items-center justify-center ">
        <h1 className="font-bold text-6xl text-center text-white">
          Build Your Future
        </h1>
        <p className="text-white font-semibold text-2xl text-center mt-10 w-[90%]">
          Create professional resumes that get you hired with our modern
          templates and AI-powered suggestions
        </p>
        <div className="grid grid-cols-3 gap-10 mt-10">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-6xl text-center text-white">50K+</h3>
            <p className="text-white mt-4">Resume Created</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-6xl text-center text-white">95%</h3>
            <p className="text-white mt-4">Success Rate</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-6xl text-center text-white">24/7</h3>
            <p className="text-white mt-4">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// const Login = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const initialValues = {
//     email: "",
//     password: "",
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string().email("Invalid Email").required("Email Required"),
//     password: Yup.string()
//       .min(6, "Minimum 6 characters ")
//       .required("Password Required"),
//   });

//   const handleSubmit = async (values, { setError }) => {
//     try {
//       setLoading(true);
//       debugger;
//       const response = await fetch.post(
//         "https://jsonplaceholder.typicode.com/users",
//         values
//       );
//       console.log(response, "response");
//       if (response?.data?.id) {
//         navigate(`/home/${response.data.id}`);
//       }
//     } catch (error) {
//       setLoading(false);
//       setError({ password: "invalid credientials" });
//     } finally {
//       setLoading(false);
//     }
//   };
//   //   sm md lg xl 2xl 3xl 4xl .....
//   //  px py p ps pe pt pb   , mx my ms me mt mb
//   return (
//     <div className="container mx-auto bg-[#3e95b0]">
//       <h1 className="textTransform: uppercase text-[256px]">Login</h1>
//       <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-col-1  gap-4">
//         <div>
//           <p className="border text-red-400 rounded-lg ">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
//             a, placeat architecto modi eaque minus ratione nemo et eligendi.
//             Ducimus quasi minima numquam voluptate quaerat officia fuga odio
//             dolorum at. Iure debitis officiis aliquam qui itaque, magnam aut
//             unde. Cum iste eum rerum recusandae vitae laborum ducimus error
//             ipsum maiores, distinctio illum, expedita voluptate nihil molestias?
//           </p>
//         </div>
//         <div>
//           <p className="border text-red-400 rounded-3xl shadow-2xl">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
//             a, placeat architecto modi eaque minus ratione nemo et eligendi.
//             Ducimus quasi minima numquam voluptate quaerat officia fuga odio
//             dolorum at. Iure debitis officiis aliquam qui itaque, magnam aut
//             unde. Cum iste eum rerum recusandae vitae laborum ducimus error
//             ipsum maiores, distinctio illum, expedita voluptate nihil molestias?
//           </p>
//         </div>
//         <div>
//           <p className="border text-red-400 rounded-full">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
//             a, placeat architecto modi eaque minus ratione nemo et eligendi.
//             Ducimus quasi minima numquam voluptate quaerat officia fuga odio
//             dolorum at. Iure debitis officiis aliquam qui itaque, magnam aut
//             unde. Cum iste eum rerum recusandae vitae laborum ducimus error
//             ipsum maiores, distinctio illum, expedita voluptate nihil molestias?
//           </p>
//         </div>
//         <div>
//           <p className="border text-red-400 rounded-e-xl">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
//             a, placeat architecto modi eaque minus ratione nemo et eligendi.
//             Ducimus quasi minima numquam voluptate quaerat officia fuga odio
//             dolorum at. Iure debitis officiis aliquam qui itaque, magnam aut
//             unde. Cum iste eum rerum recusandae vitae laborum ducimus error
//             ipsum maiores, distinctio illum, expedita voluptate nihil molestias?
//           </p>
//         </div>
//       </div>

//       {loading ? (
//         " API is calling.. "
//       ) : (
//         <div className="w-[460px]">
//           <Formik
//             initialValues={initialValues}
//             onSubmit={handleSubmit}
//             validationSchema={validationSchema}
//           >
//             {({ errors, touched }) => (
//               <Form>
//                 <div>
//                   <label htmlFor="email">Email</label>
//                   <Field
//                     id="email"
//                     name="email"
//                     placeholder="jane@acme.com"
//                     type="email"
//                   />
//                   {touched.email && errors.email && (
//                     <div style={{ color: "red" }}>{errors.email}</div>
//                   )}
//                   {/* <ErrorMessage
//                   name="email"
//                   component="div"
//                   style={{ color: "red" }}
//                 /> */}
//                 </div>
//                 <div>
//                   <label htmlFor="password">password</label>
//                   <Field
//                     id="password"
//                     name="password"
//                     placeholder="please enter your password"
//                   />
//                   <ErrorMessage
//                     name="password"
//                     component="div"
//                     className="error"
//                   />
//                 </div>

//                 <button type="submit">Submit</button>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;
