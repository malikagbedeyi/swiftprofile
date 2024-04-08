import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/HeaderStyle.css'
import logo from '../assets/Images/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Home from './Home';
import AboutUs from './AboutUS';
import Service from './Service';
import Package from './Package';
import Contact from './Contact';


function Header() {
  return ( 
    <div className='swiftprofile'>
      <div className='swiftprofile'>

<Navbar>
        <Container className='menu-container'>
        <Navbar.Brand href="#">
            <img className='menu-logo' src= {logo} alt='Logo' /></Navbar.Brand>
        
            <Nav className="menu-link">
            <Nav.Link href="#"><span>HOME</span></Nav.Link>
            <Nav.Link href="#">ABOUT US</Nav.Link>
            <Nav.Link href="#">SERVICES</Nav.Link>
            <Nav.Link href="#">PACKAGE</Nav.Link>
            <Nav.Link href="#">CONTACT</Nav.Link>
            <Button className='home-button' type="submit">LOG IN</Button>
            <Button className='home-button' type="submit">SIGN UP</Button>
          </Nav>
        </Container>
      </Navbar>
         </div>

        <Home />
        <AboutUs />
        <Service />
        <Package />
        <Contact />


    </div>
  )
}

export default Header
