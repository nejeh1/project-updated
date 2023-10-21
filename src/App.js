import logo from './logo.svg';
import './App.css';
import Navbarr from './Navbarr';
import Home from './Home';
import Courses from './Courses';
import Teachers from './Teachers';
import Signin from './Signin';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Css1 from './Css1';
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
      <Routes>
          <Route path='signin' element={<Signin></Signin>}></Route>
          <Route path='/' element={<div><Navbarr></Navbarr> <Home></Home><Courses></Courses><Teachers></Teachers><Contact></Contact></div>}></Route>
            <Route path='courses' element={<Courses></Courses>}></Route>
            <Route path='signup' element={<Signup></Signup>}></Route>
            <Route path='html1' element={<Html1></Html1>}></Route>
            <Route path='html1' element={<Html1></Html1>}></Route>
            <Route path='html2' element={<Html2></Html2>}></Route>
            <Route path='html3' element={<Html3></Html3>}></Route>
            <Route path='html4' element={<Html4></Html4>}></Route>
            <Route path='html5' element={<Html5></Html5>}></Route>
            <Route path='html6' element={<Html6></Html6>}></Route>
            <Route path='css1' element={<Css1></Css1>}></Route>
            <Route path='contact' element={<Contact></Contact>}></Route>
          </Routes>
          

    </div>
  );
}

export default App;
