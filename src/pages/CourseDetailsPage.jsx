import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:4000";

const CourseDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState();
  useEffect(() => {
    // Fetch courses data from the API endpoint
    fetch(API_URL + "/courses/" + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setCourse(data);
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, [id]);
  // const courses = [
  //   {
  //     id: 1,
  //     course: "Basic Cake Baking Workshop",
  //     image:
  //       "https://res.cloudinary.com/dsivotpgq/image/upload/v1713254263/Basic_k3jmjx.png",
  //     totalcost: 50,
  //   },
  //   {
  //     id: 2,
  //     course: "Advanced Cake Baking Workshop",
  //     image:
  //       "https://res.cloudinary.com/dsivotpgq/image/upload/v1713252587/AdvancedCakes_sah1vu.png",
  //     totalcost: 100,
  //   },
  //   {
  //     id: 3,
  //     course: " CupCake Baking Workshop",
  //     image:
  //       "https://res.cloudinary.com/dsivotpgq/image/upload/v1713254964/CupCakes_ghrggo.png",
  //     days: 2,
  //     totalcost: 50,
  //   },
  //   {
  //     id: 4,
  //     course: "Cookies Baking Workshop",
  //     image:
  //       "https://res.cloudinary.com/dsivotpgq/image/upload/v1713254912/Cookies_fkmx5u.jpg",
  //     days: 1,
  //     totalcost: 60,
  //   },
  //   {
  //     id: 5,
  //     course: "SugarlessCakes Baking Workshop",
  //     image:
  //       "https://res.cloudinary.com/dsivotpgq/image/upload/v1713256568/PopSicles_peu2nr.png",
  //     days: 1,
  //     totalcost: 50,
  //   },
  //   {
  //     id: 6,
  //     course: "Eggless Cake Baking Workshop",
  //     image:
  //       "https://res.cloudinary.com/dsivotpgq/image/upload/v1713255053/EgglessCakes_jp4xbs.jpg",
  //     days: 2,
  //     totalcost: 100,
  //   },
  //   {
  //     id: 7,
  //     course: "PopSicles",
  //     image:
  //       "https://res.cloudinary.com/dsivotpgq/image/upload/v1713256568/PopSicles_peu2nr.png",
  //     days: 2,
  //     totalcost: 100,
  //   },
  //   {
  //     id: 8,
  //     course: "Luxury Cake Fillings Masterclass",
  //     image:
  //       "https://res.cloudinary.com/dsivotpgq/image/upload/v1713256614/Luxury_cyxrid.png",
  //     days: 2,
  //     totalcost: 120,
  //   },
  //   {
  //     id: 9,
  //     course: "Doll Cakes",
  //     image:
  //       "https://res.cloudinary.com/dsivotpgq/image/upload/v1713255019/DollCakes_vmiofo.png",
  //     days: 2,
  //     totalcost: 100,
  //   },
  // ];

  const handleBuyNow = () => {
    addToCart(course);
    navigate("/Cart");
  };

  return (
    <div>
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

export default CourseDetailPage;
