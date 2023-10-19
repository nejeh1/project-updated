import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import coursesSlice, { addCourse } from './Redux/Slice/coursesSlice';
import StarRatingComponent from 'react-star-rating-component';
import { NavLink } from 'react-bootstrap';

function Courses() {
  const [newCourse,setCourse]=useState()
    const {courses}=useSelector(state=>state.coursesReducer)
  
  const dispatch=useDispatch()
  const add=()=>{dispatch(addCourse(newCourse))         
  }
  return (
    <NavLink>
    <div className='bloc'>
      {courses.map((courses,index)=>(
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
      ))}
    </div>
    </NavLink>
  )
}

export default Courses;
