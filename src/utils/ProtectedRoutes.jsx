import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router";
import { authAPI } from '../services/api';

const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if token exists in localStorage or cookies
        const token = localStorage.getItem('token');
        const userCookie = document.cookie.split('; ').find(row => row.startsWith('user='));
        
        if (token || userCookie) {
          // Verify token with backend
          try {
            const response = await authAPI.getCurrentUser();
            if (response.success) {
              setIsAuthenticated(true);
            } else {
              setIsAuthenticated(false);
              localStorage.removeItem('token');
              localStorage.removeItem('user');
            }
          } catch (error) {
            setIsAuthenticated(false);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
