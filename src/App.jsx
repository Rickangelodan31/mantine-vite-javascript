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

  const addToCart = async (course) => {
    /* setCart([...cart, course]); */

    try {
      const response = await fetch(`${API_URL}/carts`);
      const parsed = await response.json();
      if (parsed[0]) {
        parsed[0].courses.push(course);
        const updatedCart = await fetch(`${API_URL}/carts/${parsed[0].id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( {courses: parsed[0].courses }),
        });
        const updatedCartParsed = await updatedCart.json();
      } else {
        const newCart = await fetch(`${API_URL}/carts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ courses: [course] }),
        });
        const newCartParsed = await newCart.json();
      }
    } catch (error) {
      console.log(error);
    }
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
        <Route path="/signup" element={<SignUpForm />} />

        <Route path="/cart" element={<Cart cartItems={cart} />} />
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
