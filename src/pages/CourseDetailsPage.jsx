

import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetailsPage = ({ addToCart }) => {
  const { id } = useParams();
  
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
        
          <p>Validity & Access: 20 Days
          Upon enrolment, you can access the class by visiting MY COURSES in the website. Join the Zoom session promptly at the scheduled start time using the registered
          email. Please note that we do not send direct links to participants, you can join the session yourself by logging into the website/Android App using your
          registered email id which was used during the class purchase. The access link will be activated three minutes prior to the Scheduled Start Time. After the live
          session is completed, Recipe PDF & Video recording will be made available by the end of that day.</p>

          <p>You will have 20 days of access to the recording of the LIVE SESSION and recipe PDF. Participants are expected to ensure course completion within the specified
          validity period, as we do NOT have any provision for validity extensions. Participants are expected to download Recipe PDFs before the specified validity period
          expires. We strongly recommend that participants maintain secure copies of their PDFs, including storing a copy in the cloud. Please be aware that we do not
          provide email support for PDF retrieval in cases of device failure or loss. Requests for failed or missed PDFs may take up to 7-10 days to process.</p>

          <p>You will have 20 days of academic support via the dedicated email studentcoordinator@jeyadra.com, with email responses typically within 24 to 48 hours. 
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
