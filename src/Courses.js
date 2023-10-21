import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import coursesSlice, { addCourse } from './Redux/Slice/coursesSlice';
import StarRatingComponent from 'react-star-rating-component';
import { BrowserRouter as Router,Routes, Route, NavLink} from 'react-router-dom';


function Courses() {
  const [newCourse,setCourse]=useState()
    const {courses}=useSelector(state=>state.coursesReducer)
  
  const [coursesToShow, setCoursesToShow] = useState(4);
  const showMoreText = coursesToShow === courses.length ? 'Show Less' : 'Show More';

  const dispatch=useDispatch()
  const add=()=>{dispatch(addCourse(newCourse))         
  }
  return (
    <div >
    <div className='bloc'>
       {courses.slice(0, coursesToShow).map((courses, index) => (
        <NavLink to={courses.sss} style={{textDecoration:'none'}}>
        <div key={index} className='card'>
        <img src={courses.image} alt={courses.name}></img>
        <h1>{courses.name}</h1>
        <div className='mlk'>
        </div>
        <p>{courses.description}</p>
        <div className='starprice'>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={courses.star}
        />
        <p style={{color:"purple"}}>{courses.coast}</p>
        </div>
        </div>
        </NavLink>
      ))}
    </div>
    {courses.length > 4 && (
        <button onClick={() => setCoursesToShow(coursesToShow === 4 ? courses.length : 4)} className='buttonshow'>
          {showMoreText}
        </button>
      )}
    </div>
  )
}

export default Courses;
