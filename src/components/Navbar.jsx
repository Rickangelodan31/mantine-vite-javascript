import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Shop from "../pages/Shop/Shop.jsx";
import SignUpForm from "../pages/SignUpForm.jsx";
import "./navbar.css";
import logo from "../components/logo/Logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src ={logo} className="logo" />
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
        <Link to="/signup"> SignUp </Link>
        <Link to="/Cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
