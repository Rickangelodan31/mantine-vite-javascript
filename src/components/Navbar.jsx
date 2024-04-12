import React from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home.jsx";

const Navbar = () => {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li>
            <Link className="a " to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="a " to="/about">
              About
            </Link>
            <Link Link className="a " to="/career">
              Career
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
