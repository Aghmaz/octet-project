import React from "react";
import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = ({ user }) => {
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
