import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter() {
  const token = localStorage.getItem("token");
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"}></Navigate>;
  }
}

export default PrivateRouter;
