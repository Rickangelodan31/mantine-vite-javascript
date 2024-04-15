import { Routes, Route } from "react-router-dom";
import "./styles/Global.css";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Career from "./pages/Career.jsx";
<<<<<<< HEAD
import Shop from "./pages/Shop/Shop.jsx";
import Cart from "./pages/Cart/Cart.jsx";
=======
import { Routes, Route } from "react-router-dom";
import Programs from "./pages/Programs.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/Global.css";
import Courses from "./pages/Courses.jsx";

>>>>>>> daf58a083978f1fa53db497e7d565f53d78c8414

function App() {
  return (
    <>
      <Navbar />
<<<<<<< HEAD

=======
      <Courses />
>>>>>>> daf58a083978f1fa53db497e7d565f53d78c8414
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        {/* <Route path="*" element={<h1>404 Page Not Found</h1>} /> */}
      </Routes>
    </>
  );
}

export default App;
