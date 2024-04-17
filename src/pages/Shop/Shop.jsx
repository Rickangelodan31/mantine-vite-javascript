import { useState } from "react";
import "./shop.css";
import { Link } from "react-router-dom";
import CourseDetail from "../CourseDetailsPage.jsx";

const API_URL = "http://localhost:400/courses";

const courses = [
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
      "https://res.cloudinary.com/dsivotpgq/image/upload/v1713256568/PopSicles_peu2nr.png",
    days: 1,
    totalcost: 50,
  },
  {
    id: 6,
    course: "Eggless Cake Baking Workshop",
    image: "https://res.cloudinary.com/dsivotpgq/image/upload/v1713255053/EgglessCakes_jp4xbs.jpg",
    days: 2,
    totalcost: 100,
  },
  {
    id: 7,
    course: "PopSicles",
    image: "https://res.cloudinary.com/dsivotpgq/image/upload/v1713256568/PopSicles_peu2nr.png",
    days: 2,
    totalcost: 100,
  },
  {
    id: 8,
    course: "Luxury Cake Fillings Masterclass",
    image: "https://res.cloudinary.com/dsivotpgq/image/upload/v1713256614/Luxury_cyxrid.png" ,
    days: 2,
    totalcost: 120,
  },
  {
    id: 9,
    course: "Doll Cakes",
    image: "https://res.cloudinary.com/dsivotpgq/image/upload/v1713255019/DollCakes_vmiofo.png",
    days: 2,
    totalcost: 100,
  },
];

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>School Of Baking</h1>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <Link to={`/courses/${course.id}`}>
                <img src={course.image} alt={course.course} />
                <p>${course.totalcost}</p>
              </Link>

              {/* <div>
            {" "}
            <img src="Basic.png" alt="" />
            <li>Advanced Cake Baking Workshop</li>
          </div>

          <div>
            {" "}
            <img src="Basic.png" alt="" />
            <li> CupCake Baking Workshop</li>
          </div>

          <div>
            {" "}
            <img src="Basic.png" alt="" />
            <li>Cookies Baking Workshop</li>
          </div>

          <div>
            {" "}
            <img src="Basic.png" alt="" />
            <li>SugarlessCakes Baking Workshop</li>
          </div>

          <div>
            {" "}
            <img src="Basic.png" alt="" />
            <li>Eggless Cake Baking Workshop</li>
          </div>

          <div>
            {" "}
            <img src="Basic.png" alt="" />
            <li>PopSicles</li>
          </div>

          <div>
            {" "}
            <img src="Basic.png" alt="" />
            <li>Luxury Cake Fillings Masterclass</li>
          </div>

          <div>
            {" "}
            <img src="Basic.png" alt="" />
            <li>Doll Cakes </li>
            
          </div> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shop;
