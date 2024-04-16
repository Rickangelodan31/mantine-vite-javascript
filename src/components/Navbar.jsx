import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Shop from "../pages/Shop/Shop.jsx";
import SignUpForm from "../pages/SignUpForm.jsx";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
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
