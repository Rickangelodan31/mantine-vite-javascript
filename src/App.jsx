import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Career from "./pages/Career.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import CourseDetail from "./pages/CourseDetailsPage.jsx";
import SignUpForm from "./pages/SignUpForm.jsx";


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (course) => {
    setCart([...cart, course]);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
<<<<<<< HEAD
        <Route path="/signup" element={< SignUpForm />} /> 
=======
>>>>>>> d4ee7045ef8bc0439ab0a289a92e38f1284b4ee7
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/course/:id" element={<CourseDetail addToCart={addToCart} />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
