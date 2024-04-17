
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:4000";

const CourseDetailsPage = ({ addToCart }) => {
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
    //  const courses = [
    //  {
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
        
          <p>Validity & Access: 20 Days
          Upon enrolment, you can access the class by visiting MY COURSES in the website. Join the Zoom session promptly at the scheduled start time using the registered
          email. Please note that we do not send direct links to participants, you can join the session yourself by logging into the website/Android App using your
          registered email id which was used during the class purchase. The access link will be activated three minutes prior to the Scheduled Start Time. After the live
          session is completed, Recipe PDF & Video recording will be made available by the end of that day.</p>

          <p>You will have 20 days of access to the recording of the LIVE SESSION and recipe PDF. Participants are expected to ensure course completion within the specified
          validity period, as we do NOT have any provision for validity extensions. Participants are expected to download Recipe PDFs before the specified validity period
          expires. We strongly recommend that participants maintain secure copies of their PDFs, including storing a copy in the cloud. Please be aware that we do not
          provide email support for PDF retrieval in cases of device failure or loss. Requests for failed or missed PDFs may take up to 7-10 days to process.</p>

          <p>You will have 20 days of academic support via the dedicated email studentcoordinator@vinotha.com, with email responses typically within 24 to 48 hours. 
          To receive optimal support, we encourage you to share work-in-progress pictures/videos and describe your issue in detail. Please note that without pictures
          and details, you can expect very limited support.</p>
      </div>
      ) : (
        <p>Course not found</p>
      )}
    </div>
  );
};


export default CourseDetailsPage;