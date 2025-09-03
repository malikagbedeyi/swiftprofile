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
import Footer from './Footer';


function Header() {
  return ( 
    <div className='swiftprofile'>
      <div className='swiftprofile'>
<Navbar>
        <div className='container-fluid menu-container'>
        <div className='NavbarBrand' href="#">
            <img className='menu-logo' src= {logo} alt='Logo' />
            </div>
            <Nav className="menu-link">
            <Nav.Link href="/"><span>HOME</span></Nav.Link>
            <Nav.Link href="#about-us">ABOUT US</Nav.Link>
            <Nav.Link href="#service">SERVICES</Nav.Link>
            <Nav.Link href="#package">PACKAGE</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
            <div className='button-container'>
            <Button className='home-button' type="submit">LOG IN</Button>
            <Button className='home-button' type="submit">SIGN UP</Button>
         </div>
          </Nav>

        </div>
      </Navbar>
         </div>
        <Home />
        <AboutUs />
        <Service />
        <Package />
        <Contact />
        <Footer />


    </div>
  )
}

export default Header
