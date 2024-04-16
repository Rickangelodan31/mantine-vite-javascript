import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Career from "./pages/Career.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import CourseDetail from "./pages/CourseDetailsPage.jsx";
import SignUpForm from "./pages/SignUpForm.jsx";

const API_URL = "http://localhost:4000";

function App() {
  const [cart, setCart] = useState([]);
  const [courses, setCourses] = useState([]);

  const addToCart = (course) => {
    setCart([...cart, course]);
  };
  useEffect(() => {
    fetch(API_URL + "/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop courses={courses} />} />

        <Route path="/" element={<Shop />} />

        <Route path="/signup" element={<SignUpForm />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route
          path="/course/:id"
          element={<CourseDetail addToCart={addToCart} />}
        />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
