import React, { useState } from "react";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton, Divider,
  LinearProgress,
} from "@mui/material";
import {
  Person,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  Translate,
} from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from "react-router-dom";

// Password strength checker
const getPasswordStrength = (password) => {
  let strength = 0;
  if (password.length > 5) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;
  return strength;
};

// Reusable styles for TextField
const customTextFieldStyles = (formik, fieldName) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "& fieldset": {
      borderColor:
        formik.touched[fieldName] && formik.errors[fieldName]
          ? "#D32f2f"
          : "gray",
      borderWidth: "1px",
      
      
    },
    "&:hover fieldset": {
      borderColor:
        formik.touched[fieldName] && formik.errors[fieldName]
          ? "#D32f2f"
          : "green",
      borderWidth: "2px",
    },
    "&.Mui-focused fieldset": {
      borderColor:
        formik.touched[fieldName] && formik.errors[fieldName]
          ? "#D32f2f"
          : "green",
      borderWidth: "2px",
    },
  },
  "& .MuiInputLabel-root": {
    color: "gray",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color:
      formik.touched[fieldName] && formik.errors[fieldName]
        ? "#D32f2f"
        : "green",
    fontWeight: "600",
    fontSize: "1.05rem",
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: "#D32f2f !important",
    fontWeight: "600",
    fontSize: "1.05rem",
  },
  "& .MuiInputLabel-root.Mui-focused.Mui-error": {
    color: "#D32f2f !important",
    fontWeight: "600",
    fontSize: "1.05rem",
  },
});

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

const navigate = useNavigate();
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(3, "At least 3 characters required")
      .required("Full Name is required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "At least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .required("Confirm Password is required"),
      
  })

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // console.log("Form Submitted", values);
       navigate("/login");
    },
  });

  const passwordStrength = getPasswordStrength(formik.values.password);
  return (
    // bg-gradient-to-r from-[#f0fdf4] to-white
    <>
      <div className="flex h-screen ">
  {/* Left Section (Form) */}
  <div className=" min-h-full   flex flex-col items-center justify-items-end  mt-12  w-full md:w-1/2  ">
    <div className="flex flex-col w-full items-center">
      <PersonAddIcon style={{ fontSize: "65px", color: "#22974f",paddingTop:"px" }} />
      <h2 className="font-bold text-5xl text-center text-[#22974f] pt-4">Join Us Today</h2>
      <p className="text-lg text-[#737473] w-[60%] leading-7 text-center font-medium pt-4">
        Create your account and start building amazing resumes
      </p>
    </div>

      <form
        onSubmit={formik.handleSubmit}
        className=" p-8 w-full  max-w-md  space-y-8  flex-grow" >
       

        {/* Full Name */}
        <TextField
          fullWidth
          id="fullName"
          name="fullName"
          label="Full Name"
          variant="outlined"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person
                  className={
                    formik.touched.fullName && formik.errors.fullName
                      ? "text-red-600"
                      : "text-green-800"
                  }
                />
              </InputAdornment>
            ),
          }}
          sx={customTextFieldStyles(formik, "fullName")}
        />

        {/* Email */}
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email
                  className={
                    formik.touched.email && formik.errors.email
                      ? "text-red-600"
                      : "text-green-800"
                  }
                />
              </InputAdornment>
            ),
          }}
          sx={customTextFieldStyles(formik, "email")}
        />

        {/* Password */}
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock
                  className={
                    formik.touched.password && formik.errors.password
                      ? "text-red-600"
                      : "text-green-800"
                  }
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
          sx={customTextFieldStyles(formik, "password")}
        />

        {/* Password Strength */}
        {formik.values.password && (
          <div>
            <p className="text-black font-medium text-sm mt-[-30px]">
              Password Strength:{" "}
              <span
                style={{
                  color:
                    passwordStrength <= 1
                      ? "red"
                      : passwordStrength === 2
                      ? "orange"
                      : passwordStrength === 3
                      ? "green"
                      : "darkgreen",
                }}
              >
                {passwordStrength <= 1
                  ? "Weak"
                  : passwordStrength === 2
                  ? "Fair"
                  : passwordStrength === 3
                  ? "Good"
                  : "Strong"}
              </span>
            </p>
            <LinearProgress
              variant="determinate"
              value={(passwordStrength / 4) * 100}
              sx={{
                height: 5,
                marginTop:"5px",
                borderRadius: 5,
                backgroundColor: "#ddd",
                "& .MuiLinearProgress-bar": {
                  backgroundColor:
                    passwordStrength <= 1
                      ? "red"
                      : passwordStrength === 2
                      ? "orange"
                      : passwordStrength === 3
                      ? "green"
                      : "darkgreen",
                },
              }}
            />
          </div>
        )}

        {/* Confirm Password */}
        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          type={showConfirm ? "text" : "password"}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock
                  className={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "text-red-600"
                      : "text-green-800"
                  }
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirm(!showConfirm)}
                  edge="end"
                >
                  {showConfirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={customTextFieldStyles(formik, "confirmPassword")}
        />

      <Button
  type="submit"
  fullWidth
  variant="contained"
  disabled={!formik.isValid || formik.isSubmitting || !formik.dirty}
  sx={{
    backgroundColor: "#166c36",
    "&:hover": { backgroundColor: "#155a31" }, color: "white",
      padding:"20px",
      borderRadius:"8px",
   fontSize:"15px",
   fontWeight:"bold",
  

    "&.Mui-disabled": {
      backgroundColor: "#f0fdf4", 
      color: "#737473",
      padding:"20px",
      borderRadius:"8px",
   fontSize:"15px",
   fontWeight:"bold"
    },
  }}
>
 Create Your Account
</Button>
  <Divider sx={{ my: 3 }}>Already have an account?</Divider>

          <Button
            fullWidth
            variant="outlined"
            onClick={() => navigate("/login")}
            sx={{
             
              border:"2px solid #15803d ",
              color: "green",
              fontWeight: "bold",
              borderRadius: "12px",
              textTransform: "none",
              padding: "15px",
              fontSize: "15px",
              "&:hover": {
                borderColor: "darkgreen",
                backgroundColor: "rgba(0, 128, 0, 0.05)",
                transform:"translateY(-1px)",
                fontSize: "16px",
              },
            }}
          >
            Sign In Instead
          </Button>
           </form>
           
  </div>

  {/* Right Section (Journey) */}
  <div className="w-1/2 h-full hidden md:flex bg-[#167d3c] flex-col items-center justify-center  pt-[450px] pb-[450px]">
    <h2 className="font-bold text-6xl text-white">Start Your Journey</h2>
    <p className="text-2xl text-[#c4dccd] mt-8 w-[90%] font-semibold leading-10 text-center">
      Join thousands of professionals who have built their dream careers
      with our platform
    </p>
    <div className="grid grid-cols-2 gap-x-52 gap-y-5 mt-12">
      <div>
        <h1 className="font-bold text-5xl text-center text-white">Free</h1>
        <p className="text-[#c4dccd] font-semibold mt-4 text-center text-lg">Forever plan</p>
      </div>
      <div>
        <h1 className="font-bold text-5xl text-center text-white">10+</h1>
        <p className="text-[#c4dccd] font-semibold mt-4 text-center text-lg">Templates</p>
      </div>
      <div>
        <h1 className="font-bold text-5xl text-center text-white">ATS</h1>
        <p className="text-[#c4dccd] font-semibold mt-4 text-center text-lg">Optimized</p>
      </div>
      <div>
        <h1 className="font-bold text-5xl text-center text-white">PDF</h1>
        <p className="text-[#c4dccd] font-semibold mt-4 text-center text-lg">Download</p>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

