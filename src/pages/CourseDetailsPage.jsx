import React from "react";
import { useParams } from "react-router-dom";


const CourseDetailPage = () => {
  const { id } = useParams();

  // Assuming courses are fetched from a backend API or stored in state
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

  return (
    <div>
      <h1>Course Detail</h1>
      {course ? <CourseDetail course={course} /> : <p>Course not found</p>}
    </div>
  );
};

export default CourseDetailPage;
