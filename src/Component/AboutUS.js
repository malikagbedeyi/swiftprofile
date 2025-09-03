import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/HeaderStyle.css'
import pic3 from '../assets/Images/pic-3.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function AboutUs() {
  return (
    <div>
       <div className='About-Us' id='about-us'>
        <div className='container'>
            <div className='about-container'>
              <div className='about-content'>
    <video className="About-Us-video home-image"  poster={pic3}
        controls="controls">
        <img src="https://swiftprofile.com/static/video/v-1.mp4" type="video/mp4"></img>
            <img src="https://swiftprofile.com/static/video/v-1.mp4" type="video/ogg"></img>
    </video>
    </div>
     <div className='about-content'>
            <div className='About'>
            <h1 className="home-text-1">About Us</h1>
				<p className="About-heading-h6">There are over 2 million Tech jobs in the UK, Ireland and Germany that are yet to be filled. Getting into these jobs requires a strong skillset, resume, mentoring and profile that matches the job responsibilities.</p>
<p className="About-heading-h6">At Swift Profile, we enhance individual/ people to be qualified for various Tech and non-Tech jobs.</p>
<p className="About-heading-h6">Do not mistake us for Certification or Structured Learning Institute, We do it differently!! Our approach is to collaborate with you and get you into the Job.</p>
<p className=" About-heading-h6">We focus on the experience that gets you the job, not the experience that leaves you with just the theoretical knowledge.</p>
	<div className=" div-button">
        <button className='about-button' type="submit" href="#">EXPLORE OUR SERVICES</button></div>
            </div>
            </div>
          </div>
          </div>
         </div>
    </div>
  )
}

export default AboutUs
