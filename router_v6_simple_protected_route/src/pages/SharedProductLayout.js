import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const SharedProductLayout = () => {
  return (
    <>
      <h2>Products</h2>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedProductLayout;
