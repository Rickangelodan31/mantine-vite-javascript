import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


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


