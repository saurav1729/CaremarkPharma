import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

const PrivateRoute = ({ adminOnly = false }) => {
  const authCtx = useContext(AuthContext); 
  const user = authCtx.user

  if (!authCtx.isLoggedIn) {
    // If no user is logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user.role !== "ADMIN") {
    // If the route is admin-only and the user is not an admin, redirect to home
    return <Navigate to="/" replace />;
  }

  // If the user passes the checks, render the child routes
  return <Outlet />;
};

export default PrivateRoute;
