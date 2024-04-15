import {Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function CourseDetails(props){
    const {courseId} = useParams()
    const [course, setCourse] = useState();

    useEffect(() => {
        const foundCourse = props.data.find((course) => course.id === courseId)
        setCourse(foundCourse)
    }, [courseId])  
    return (
        <div>
            <h1>Details</h1>
            
        </div>
    )
}