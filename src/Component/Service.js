import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/HeaderStyle.css'
import pic3 from '../assets/Images/pic-3.png';
import feature5 from '../assets/Images/feature-5.svg'
import pic2 from '../assets/Images/pic-2.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Service() {

    const [toggle, setToggle] = useState(1)

function updateToggle(id){
    setToggle(id)
}

  return (
    <div>
       <div className='Services'>
            <Container>
                <div>
<div className="services-head">
	<h6 className="services-heading-h5">Our Services</h6>
	<h1 className="service-heading">Amazing services that suits your career needs</h1>
	<p className="services-heading-h6">Collaborating with you to build a digital CV, strong profile and sizeable portfolio that is relevant in the</p><p  class="services-heading-h6">UK, Ireland, and Germany.</p>
</div>


  <div className="tab-style-2 Service p-35px-t justify-content-center">
            <ul className="nav">
                <li className="item nav-link flex-fill" onClick={()=>updateToggle(1)}>
                        <div className="icon"><i className=" fa-solid ti-pencil-alt"></i></div>
                        <span>CV/ Resume</span>
                </li>

                <li className="item nav-link flex-fill" onClick={()=>updateToggle(2)}>
                        <div className="icon"><i className=" fa-solid ti-check-box"></i></div>
                        <span>Break into Tech (BrinT)</span>
                </li>
                <li class="item nav-link flex-fill" onClick={()=>updateToggle(3)}>
                   
                        <div className="icon"><i className=" fa-solid ti-rocket"></i></div>
                        <span>Interview Prep</span>
                </li>
                
                <li className="item nav-link flex-fill" onClick={()=>updateToggle(4)}>
                        <div className="icon"><i className=" fa-solid ti-folder"></i></div>
                        <span>Consulting</span>
                </li>
            </ul>

            <div className={toggle === 1 ? "show-content" : "content"}>
                    <Row className="toggle-2 align-items-center">
                        <Col xs={6} md={12} sm={12} lg={6} className="Services-head">              
                                    <h3 className="black-color font-alt">Our digital CV/ Resume that presents you just the
                                        right way
                                    </h3>
                                    <p>It is often said that your resume says a lot about you. It has the ability to
                                        project your personality and skillset ahead of being considered for an
                                        opportunity or interview. Our SP Digital Resume service will:</p>
                                    <ul class="check-list">
                                        <li><i className="fa-solid fa-check"></i> Set you up with the right opportunities</li>
                                        <li><i className="fa-solid fa-check"></i> Project your technical and soft skills
                                            appropriately </li>
                                        <li><i className="fa-solid fa-check"></i>Be structured to present your personality in the
                                            right way</li>
                                    </ul>
                                    <div className="read-more">
                                        <Button className='home-button' type="submit" href="#">Find Out more</Button>
                                    </div>
                            
                        </Col> 

                        <Col xs={6} md={12} sm={12} lg={6} className="">
                            <img className="home-image" src={feature5}  alt="image"></img>
                        </Col> 
                    </Row>
                </div>

                <div className={toggle === 2 ? "show-content" : "content"}>
                    <Row className=" toggle-2 align-items-center">
                        <Col xs={6} md={12} sm={12} lg={6}>
                            <img className='img home-image' src={pic3}  alt="image"></img>
                        </Col>

                        <Col xs={6} md={12} sm={12} lg={6} className="">
                                    <h3 className="black-color font-alt">Break into the Tech space with or without prior
                                        knowledge in Tech.
                                    </h3>
                                    <p>Not all Tech jobs require coding!!! Our break into tech (BrinT) service is
                                        tailored to empower you with simulated experience that would help you get the
                                        right job that pays well than any other sector in UK, Ireland, Canada, US and
                                        Germany.
                                    </p>
                                    <ul className="check-list">
                                        <li><i className="fa-solid fa-check "></i> Project Management and Business Analysis</li>
                                        <li><i className="fa-solid fa-check"></i> IT Service Management Specialist</li>
                                        <li><i className="fa-solid fa-check"></i> Information and Cyber Security</li>
                                        <li><i className="fa-solid fa-check"></i> Software Testing and Quality Assurance</li>
                                        <li><i className="fa-solid fa-check"></i> Technology Risk and IT Audit</li>
                                    </ul>
                                    <div className="read-more">
                                       <Button className='home-button' type="submit" href="#">Find Out more</Button>
                                    </div>
                        </Col> 
                    </Row>
                </div> 
            
                <div className={toggle === 3 ? "show-content" : "content"}>
                <Row className="toggle-2 align-items-center">
                        <Col xs={6} md={12} sm={12} lg={6}>
                                    <h3 className="black-color font-alt">
                                        Often times, the job comes to the prepared
                                    </h3>
                                    <p>Knowing what to say and how to deliver it would elevate your chances of getting
                                        hired ahead of other candidates. Our preparedness and readiness session is a
                                        one-to-one session where we prepare you ahead of your interviews with solid
                                        responses that helps you get jobs at both entry and senior level.</p>
                                    <ul className="check-list">
                                        <li><i class="fa-solid fa-check"></i> Right responses for your profile and technical
                                            questions</li>
                                        <li><i class="fa-solid fa-check"></i> 1:1 sessions that build your confidence</li>
                                        <li><i class="fa-solid fa-check"></i> Relatable experience for answering behavioural
                                            Interview questions (STAR)</li>
                                    </ul>
                                    <div className="read-more">
                                        <Button className='home-button' type="submit" href="#">Find Out more</Button>
                            </div>
                        </Col> 

                        <Col xs={6} md={12} sm={12} lg={6}>
                            <img className="img home-image" src={pic2} alt="image"></img>
                        </Col> 
                    </Row>
                </div>


                <div className={toggle === 4 ? "show-content" : "content"}>
                <Row className="toggle-2 align-items-center">
                        <Col  xs={6} md={12} sm={12} lg={6}>
                            <img className="img home-image" src={feature5} t alt="image"></img>
                        </Col> 

                        <Col  xs={6} md={12} sm={12} lg={6}>
                                    <h3 className="black-color font-alt">We provide training and consulting services for
                                        corporate entities, and not for profit organisation.</h3>
                                    <p>Bridging skills gap through learning and development is important as new
                                        methodologies and tools evolves. For our corporate clients, we provide
                                        structured trainings sessions on different domains of information technology
                                        ranging from Cyber security to Technology Risk, IT Audit, Security Compliance
                                        and Cloud.</p>
                                    <p>Do not worry, we have a service that helps you bridge the gap.</p>
                                    <ul class="check-list">
                                        <li><i className="fa-solid fa-check"></i> Corporate Learning and Development</li>
                                        <li><i className="fa-solid fa-check"></i> Technology Consulting</li>
                                        <li><i className="fa-solid fa-check"></i> Project Management as a Service (PM-aaS)</li>
                                        <li><i className="fa-solid fa-check"></i> IT Managed Services</li>
                                    </ul>
                                    <div className="read-more">
                                       <Button  className='home-button' type="submit" href="#">Find Out more</Button>
                                    </div>
                        </Col> 
                    </Row>
                </div>

            </div>
        </div>
            </Container>
         </div>
    </div>
  )
}

export default Service
