import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar ">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "blue",
            };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "blue",
            };
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "blue",
            };
          }}
        >
          Products
        </NavLink>

        <NavLink
          to="/login "
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "blue",
            };
          }}
        >
          Login
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
