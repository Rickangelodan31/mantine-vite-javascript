<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
=======
>>>>>>> d4ee7045ef8bc0439ab0a289a92e38f1284b4ee7

import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

<<<<<<< HEAD
const API_URL = "http://localhost:4000/courses:/id";


function CourseDetailsPage(props) {
  const {courseId} = useParams()
  const {course, setCourse} = useState(undefined);

  useEffect(() =>{
    const foundCourse = props.data.find((course) => course.id === courseId)
    setCourse(foundCourse)
  }, [courseId])

  return(
    <div>
      <h1>Course Details</h1>
      {course && <Link key ={course.id} className="details" to = {`/courses/${course.id}`}>
        <img src ={course.image} className={resolveClassNames.img} />
        <h3>{course.course}</h3>
        <p>{course.days}</p>
        <p>{course.totalCost}</p>
        </Link> }

    </div>
  )

}
export default CourseDetailsPage;

=======
const CourseDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const history = useHistory();
  const courses = [
    {
      id: 1,
      course: "Basic Cake Baking Workshop",
      image: "Basic.png",
      days: 1,
      totalcost: 50,
      productImage: "AdvancedCakes.png",
    },
    {
      id: 2,
      course: "Advanced Cake Baking Workshop",
      image: "AdvancedCakes",
      days: 2,
      totalcost: 100,
      productImage: "Basic.png",
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
  const course = courses.find((course) => course.id === parseInt(id));

  const handleBuyNow = () => {
    addToCart(course);
    history.push("/checkout");
  };

  return (
    <div>
      <h1>Course Detail</h1>
      <h1>Course Detail</h1>
      {course ? (
        <div>
          <h2>{course.course}</h2>
          <img src={course.image} alt={course.course} />
          <p>Total Cost: ${course.totalcost}</p>
          <button onClick={handleBuyNow}>Buy Now</button>
        </div>
      ) : (
        <p>Course not found</p>
      )}
    </div>
  );
};
>>>>>>> d4ee7045ef8bc0439ab0a289a92e38f1284b4ee7

