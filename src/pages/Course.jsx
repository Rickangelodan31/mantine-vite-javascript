import react from "react";

const API_URL = import.meta.env.VITE_API_URL


const CourseList = ({data}) => {
return (<ul>
    {data?.map(currentCourse => (<li key = {currentCourse.id}
    className={classes.ctn} >
                      <Link to={`/courses/${course.id}`}>

        <image src = {currentCourse.image} className={classes.img} />
        <div>
            <h3>{currentCourse.course}</h3>
            <p>{currentCourse.days}</p>
            <p>{currentCourse.totalcost}</p>
            <button type = 'button' onClick={() => (currentCourse.id)}> BUY NOW </button>
            

        </div>
        </Link>
    </li>))}
</ul>)
}
export default CourseList;