import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filter } from './Redux/Slice/coursesSlice';
import { BrowserRouter as Router,Routes, Route, NavLink} from 'react-router-dom';

function Navbarr() {
  const [name,setName]=useState()
  const dispatch=useDispatch()

  const search=()=>{
   dispatch(filter(name))
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="light" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#">CodeProsper</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='navlinks'>
            <NavLink to={"/"} style={{textDecoration:"none", color:"black"}}>HOME</NavLink>
            <NavLink to={"/courses"} style={{textDecoration:"none" , color:"black"}}>COURSES</NavLink>
            <NavLink to={"/contact"} style={{textDecoration:"none" , color:"black"}}>CONTACT</NavLink>
            </div>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={((e)=>setName({name:e.target.value}))}
            />
            <Button onClick={search} variant="outline-success" className='searchbtn'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;