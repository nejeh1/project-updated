import logo from './logo.svg';
import './App.css';
import Navbarr from './Navbarr';
import Home from './Home';
import Courses from './Courses';
import Teachers from './Teachers';
import Signin from './Signin';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Html1 from './Html1';
import Html2 from './Html2';
import Html3 from './Html3';
import Html4 from './Html4';
import Html5 from './Html5';
import Html6 from './Html6';
import Contact from './Contact';
import { useEffect } from 'react';
import axios from 'axios';


function App() {
  //checkpoint api:
  useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/users').then(response=>console.log(response.data))
  
  })
  return (
    <div style={{height:'100vh'}}>
     <Html1></Html1>
    </div>
  );
}

export default App;
