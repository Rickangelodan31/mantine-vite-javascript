import { Routes, Route } from "react-router-dom";
import "./styles/Global.css";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Career from "./pages/Career.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import CourseDetail from "./pages/CourseDetailsPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/course/:id" component={<CourseDetail />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
