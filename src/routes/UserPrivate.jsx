import React from "react";
import { Navigate, Outlet } from "react-router";

const UserPrivate = () => {
  const isLoggedIn = localStorage.getItem("customerId");
  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default UserPrivate;
