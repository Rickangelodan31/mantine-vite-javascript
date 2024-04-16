import { useState } from "react";
import "./shop.css";
import { Link } from "react-router-dom";
import CourseDetail from '../CourseDetailsPage.jsx';

const API_URL = "http://localhost:4000/courses";

const courses = [
  {
    id: 1,
    course: "Basic Cake Baking Workshop",
    image: "Basic.png",
    totalcost: 50,
  },
  {
    id: 2,
    course: "Advanced Cake Baking Workshop",
    image: "AdvancedCakes.png",
    totalcost: 100,
  },
  {
    id: 3,
    course: " CupCake Baking Workshop",
    image: "CupCakes.png",
    days: 2,
    totalcost: 50,
    productImage: "Cookies.jpg",
  },
  {
    id: 4,
    course: "Cookies Baking Workshop",
    image: "Cookies.jpg",
    days: 1,
    totalcost: 60,
    productImage: "CupCakes.png",
  },
  {
    id: 5,
    course: "SugarlessCakes Baking Workshop",
    image: "Sugarless.jpg",
    days: 1,
    totalcost: 50,
    productImage: "DollCakes.png",
  },
  {
    id: 6,
    course: "Eggless Cake Baking Workshop",
    image: "EgglessCakes.jpg",
    days: 2,
    totalcost: 100,
    productImage: "EgglessCakes.jpg",
  },
  {
    id: 7,
    course: "PopSicles",
    image: "PopSicles.png",
    days: 2,
    totalcost: 100,
    productImage: "Luxury.png",
  },
  {
    id: 8,
    course: "Luxury Cake Fillings Masterclass",
    image: "Luxury.png",
    days: 2,
    totalcost: 120,
    productImage: "PopSlices.png",
  },
  {
    id: 9,
    course: "Doll Cakes",
    image: "DollCakes.png",
    days: 2,
    totalcost: 100,
    productImage: "SugarlessCakes.png",
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
                <img src={course} alt={course.course} />
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
