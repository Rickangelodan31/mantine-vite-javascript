import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CourseDetails.css";



const API_URL = import.meta.env.VITE_API_URL

const CourseDetail = ({ addToCart }) => {
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
        console.log(data);
        setCourse(data);
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, [id]);
  

  const handleBuyNow = async () => {
   await addToCart(course);
    navigate("/Cart");
  };

  return (<>
    <div className="wrapper">
      <h1>Course Details</h1>
      {course ? (
        <div className="coursed">
          <h2>{course.course}</h2>
          <img src={course.image} alt={course.course} />
          <h4>Instuctor: {course.instructor}</h4>
          <h4>Language: {course.language}</h4>
          <h4>Validity: {course.validity}</h4>
          <h4>Time: {course.timing}</h4>
          <h4>Days: {course.days}</h4>
          <h4>Total Cost: ${course.totalcost}</h4>
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
    </>
  );
};


export default CourseDetail;
