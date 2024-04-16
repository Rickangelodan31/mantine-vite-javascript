
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


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

