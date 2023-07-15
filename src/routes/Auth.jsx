import React from "react";
import { Navigate, Outlet } from "react-router";

const Auth = () => {
  const isLoggedIn = localStorage.getItem("customerId");
  return <>{!isLoggedIn ? <Outlet /> : <Navigate to="/user-profile" />}</>;
};

export default Auth;
