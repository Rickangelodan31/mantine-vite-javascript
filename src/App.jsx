import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Career from "./pages/Career.jsx";
import { Routes, Route } from "react-router-dom";
import Programs from "./pages/Programs.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/Global.css";

const App = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/users");

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
