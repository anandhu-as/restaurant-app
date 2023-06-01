import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import About from "../About/About";
export const Navbar = () => {
  return (
    <div className="navBar">
      <img
        src="https://www.muraldecal.com/en/img/asfs1336-png/folder/products-detalle-png/stickers-breaking-bad-los-pollos-hermanos.png"
        alt=""
      />
      <h2>los pollos hermanos</h2>
      <Link to="/">Home</Link>
      <Link to="/food">Food</Link>
      <Link to="/About">About</Link>
    </div>
  );
};
