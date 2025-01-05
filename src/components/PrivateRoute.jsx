import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ adminOnly = false }) => {
  const user = useSelector((state) => state.user);

  if (!user) {
    // If no user is logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user.role !== "admin") {
    // If the route is admin-only and the user is not an admin, redirect to home
    return <Navigate to="/" replace />;
  }

  // If the user passes the checks, render the child routes
  return <Outlet />;
};

export default PrivateRoute;
