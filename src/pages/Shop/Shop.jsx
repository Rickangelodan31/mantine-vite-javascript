import { useEffect, useState } from "react";
import "./shop.css";
import { Link } from "react-router-dom";

const API_URL = `${import.meta.env.VITE_API_URL}/courses`

const Courses = [
  {
    id: 1,
    course: "Basic Cake Baking Workshop",
    image:
      "https://res.cloudinary.com/dsivotpgq/image/upload/v1713254263/Basic_k3jmjx.png",
    totalcost: 50,
  },
  {
    id: 2,
    course: "Advanced Cake Baking Workshop",
    image:
      "https://res.cloudinary.com/dsivotpgq/image/upload/v1713252587/AdvancedCakes_sah1vu.png",
    totalcost: 100,
  },
  {
    id: 3,
    course: " CupCake Baking Workshop",
    image:
      "https://res.cloudinary.com/dsivotpgq/image/upload/v1713254964/CupCakes_ghrggo.png",
    days: 2,
    totalcost: 50,
  },
  {
    id: 4,
    course: "Cookies Baking Workshop",
    image:
      "https://res.cloudinary.com/dsivotpgq/image/upload/v1713254912/Cookies_fkmx5u.jpg",
    days: 1,
    totalcost: 60,
  },
  {
    id: 5,
    course: "SugarlessCakes Baking Workshop",
    image:
      "https://res.cloudinary.com/dsivotpgq/image/upload/v1713256604/SugarlessCakes_f6taa7.jpg",
    days: 1,
    totalcost: 50,
  },
  {
    id: 6,
    course: "Eggless Cake Baking Workshop",
    image:
      "https://res.cloudinary.com/dsivotpgq/image/upload/v1713255053/EgglessCakes_jp4xbs.jpg",
    days: 2,
    totalcost: 100,
  },
  {
    id: 7,
    course: "PopSicles",
    image:
      "https://res.cloudinary.com/dsivotpgq/image/upload/v1713256568/PopSicles_peu2nr.png",
    days: 2,
    totalcost: 100,
  },
  {
    id: 8,
    course: "Luxury Cake Fillings Masterclass",
    image:
      "https://res.cloudinary.com/dsivotpgq/image/upload/v1713256614/Luxury_cyxrid.png",
    days: 2,
    totalcost: 120,
  },
  {
    id: 9,
    course: "Doll Cakes",
    image:
      "https://res.cloudinary.com/dsivotpgq/image/upload/v1713255019/DollCakes_vmiofo.png",
    days: 2,
    totalcost: 100,
  },
];

const Shop = ({ addToCart }) => {
  // Define state to store the fetched courses
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses data from the API endpoint
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response error");
        }
        return response.json();
      })
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Tasty Temptations Baking School</h1>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <Link to={`/course/${course.id}`}>
                <img src={course.image} alt={course.course} />
                <p>{course.course}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shop;
