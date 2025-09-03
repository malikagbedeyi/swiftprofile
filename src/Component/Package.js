import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/HeaderStyle.css'

import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.png';
import img5 from '../assets/img/img5.png';
import img6 from '../assets/img/img6.png';
import img7 from '../assets/img/img7.png';
import img8 from '../assets/img/img8.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';



function Package() {
  return (
    <div id='package'>
      <div className='Package'>
        <Container>
        <div className="packages">
<h1 className="packages-heading-h1">Packges</h1>
<p className="packages-heading-p">Our flexible packages designed just for you.</p>
</div>
<Row className=''>
<Col xs={8} md={12} sm={12} lg={8} className="form-row">
    <div className="form-group">
        <label className="filter">Filter with Packages name</label>
        <input type="text" 
         className="form-control" 
         placeholder="Enter Packages Name"
         onChange={e =>e.target.value}
         />
    </div>
</Col>
<Col xs={4} md={12} sm={12} lg={4} className="form-row">
    <div className="form-group">
        <label className="filter">Filter with Category</label>
        <select className="form-control">
              <option value="">All Packages</option>
              <option value="1">Break into Tech (BrinT)</option>
              <option value="2">Resume</option>
              <option value="3">Interview Prep</option>
              <option value="4">Consulting</option>
        </select>
    </div>
</Col> 
</Row>

<div>
<Row className='Pricing-row'>
<Col xs={3} md={6} sm={12} lg={3} className='pricing-col'>
<div className="pricing"> 
<div className="icon">
<img src={img3} className="packages-img" alt="img"></img> </div>
<h6 className="packages-heading-h6">CV/ RESUME</h6>

<div className="p-head">
  <div className="p-dollar">$105
  <hr />
  </div>
</div>



 <div className="pt-body">
      <ul>
             <li> Resume </li>
         </ul>
</div>

 <div className="p-foot">
      <button type="button" className="btd  btn btn-success">Add</button>
        <button type="button" className="view">view</button>
</div>

</div>
</Col>

<Col  xs={3} md={6} sm={12} lg={3} className='pricing-col'>
<div className="pricing"> 
<div className="icon">
<img src={img4} className="packages-img" alt="img"></img> </div>
<h6 className="packages-heading-h6">LINKEDIN OPTIMISATION</h6>

<div className="p-head">
  <div className="p-dollar">$50 
  <hr />
  </div>
</div>

 <div className="pt-body">
      <ul>
             <li> Resume </li>
         </ul>
</div>

 <div className="p-foot">
      <button type="button" className="btd  btn btn-success">Add</button>
        <button type="button" className="view">view</button>
</div>

</div>
</Col>

<Col  xs={3} md={6} sm={12} lg={3} className='pricing-col'>
<div className="pricing"> 
<div className="icon">
<img src={img1} className="packages-img" alt="img"></img> </div>
<h6 className="packages-heading-h6">INTERVIEW PREPARATION</h6>

<div className="p-head">
  <div className="p-dollar">$500 
  <hr />
  </div>
</div>

 <div className="pt-body">
      <ul>
             <li> Interview Prep </li>
         </ul>
</div>

 <div className="p-foot">
      <button type="button" className="btd  btn btn-success">Add</button>
        <button type='submit' className="view">view</button>
</div>

</div>
</Col>

<Col xs={3} md={6} sm={12} lg={3} className='pricing-col'>
<div className="pricing"> 
<div className="icon">
<img src={img6} className="packages-img" alt="img"></img> </div>
<h6 className="packages-heading-h6">IT BUSINESS ANALYSIS</h6>

<div className="p-head">
  <div className="p-dollar">$660 
  <hr />
  </div>
</div>

 <div className="pt-body">
      <ul>
             <li> Break into Tech (BrinT) </li>
         </ul>
</div>

 <div className="p-foot">
      <button type="button" className="btd  btn btn-success">Add</button>
        <button type="button" className="view">view</button>
</div>

</div>
</Col>



    <Col xs={3} md={6} sm={12} lg={3} className='pricing-col'>
     <div className="pricing"> 
         <div className="icon">
         <img src={img5} class="packages-img"  alt="img"></img> </div>
           <h6 className="packages-heading-h6">IT SUPPORT & SERVICE MANAGEMENT</h6>

          <div className="p-head">
            <div className="p-dollar">$500  <hr /></div>
           </div>

          <div className="pt-body">
            <ul>
                <li>Break into Tech (BrinT) </li>
            </ul>
      </div>

       <div className="p-foot">
           <button type="button" className="btd  btn btn-success">Add</button>
           <button type="button" className="view">view</button>
        </div>

       </div>
  </Col>

   <Col xs={3} md={6} sm={12} lg={3} className='pricing-col'>
     <div className="pricing"> 
       <div className="icon">
         <img src={img2} className="packages-img" alt="img"></img> </div>
          <h6 className="packages-heading-h6">IT PROJECT MANAGEMENT & CHANGE</h6>

      <div className="p-head">
        <div className="p-dollar">$715  <hr /></div>
     </div>

        <div className="pt-body">
           <ul>
             <li> Break into Tech (BrinT)</li>
            </ul>
        </div>

          <div className="p-foot">
              <button type="button" className="btd  btn btn-success">Add</button>
             <button type="button" className="view">view</button>
         </div>

       </div>
    </Col>

    <Col xs={3} md={6} sm={12} lg={3} className='pricing-col'>
      <div className="pricing"> 
        <div className="icon">
          <img src={img7} className="packages-img" title="" alt="img"></img> </div>
              <h6 className="packages-heading-h6">INFORMATION AND CYBER SECURITY</h6>

          <div className="p-head">
            <div className="p-dollar">$1,120  <hr /></div>
           </div>

          <div className="pt-body">
           <ul>
             <li>Break into Tech (BrinT) </li>
           </ul>
     </div>

            <div className="p-foot">
             <button type="button" className="btd  btn btn-success">Add</button>
             <button type="button" className="view">view</button>
          </div>

        </div>
     </Col>

      <Col xs={3} md={6} sm={12} lg={3} className='pricing-col'>
      <div className="pricing"> 
      <div className="icon">
      <img src={img8} class="packages-img" alt="img"></img> </div>
      <h6 className="packages-heading-h6">T AUDIT, TECH RISK AND CYBER GRC</h6>

   <div className="p-head">
     <div className="p-dollar">$2,000  <hr /></div>
   </div>

    <div className="pt-body">
      <ul>
             <li>Break into Tech (BrinT) </li>
         </ul>
   </div>

    <div className="p-foot">
      <button type="button" className="btd  btn btn-success">Add</button>
        <button type="button" className="view">view</button>
     </div>
    </div>
   </Col>
   </Row>
   </div>
   <div class="viewMore"><button type='submit' className='home-button'href="#">View More</button></div>
        </Container>
      </div>

      <div>
        <Container>
        <div className="middle-packages ">
<h1 className="middle-packages-h1">No stories, just facts</h1>
<h6 className="middle-packages-h6">We have worked with people across disciplines, providing services that helps change their</h6><h6 class="middle-packages-h6"> stories and careers</h6>

<div className='fact-row'>
<Row>
<Col xs={3} md={6} sm={12} lg={3} className='pricing-col' >
<div className="">
    <h1 class="fact-heading-h1">150+</h1>
    <h6 class="fact-heading-h6">EXCITED CLIENT</h6>
</div>
</Col>

<Col xs={3} md={6} sm={12} lg={3} className='pricing-col'>
 <div className="fact">
    <h1 className="fact-heading-h1">250+</h1>
    <h6 className="fact-heading-h6">PROJECTS COMPLETED</h6>
</div>
</Col>

<Col xs={3} md={6} sm={12} lg={3} className='pricing-col'>
 <div className="fact">
    <h1 className="fact-heading-h1">50+</h1>
    <h6 className="fact-heading-h6">EXPERTS</h6>
</div>
</Col>

<Col xs={3} md={6} sm={12} lg={3} className='pricing-col'>
 <div className="fact">
    <h1 className="fact-heading-h1">100+</h1>
    <h6 className="fact-heading-h6">CAREER SWITCH</h6>
</div>
</Col>
</Row>

</div>
</div>
        </Container>
      </div>

      <div className='bottom-package-contact'>
        <Container>
        <div className="bottom-packages">
<h1 className="bottom-packages-h1">What people say about us</h1>
<h6 className="bottom-packages-h6">We value feedback from our esteemed clients regarding the services we provided to them and</h6><h6 class="bottom-packages-h6">our we delivered on our engagements.</h6>   

<Row className='bottom-row-contact'>
<Col  xs={4} md={6} sm={12} lg={4} className='pricing-col'>
<div className="bottom-row">
    <div className="top">
        <span>Abi.A</span>
    <label className="label">Project & Change Manager,
         <i class="uk">UK</i>
     </label>
    
    </div>
    <div className="middle">
        <p>I switched from being a pharmacist to Tech with the help "..... <span class="span"> <a class="span" href="">read more</a></span></p>
    </div>
</div>
</Col>
<Col  xs={4} md={6} sm={12} lg={4} className='pricing-col'>
<div className="bottom-row">
    <div class="top">
        <span>Mescell. T,</span>
    <label className="label">Senior Corporate Accountant, 
         <i className="uk">UK</i>
     </label>
    
    </div>
    <div className="middle">
        <p>Mine was not a tech related event, but I was happy with t".....  <span class="span"> <a class="span" href="">read more</a></span></p>
    </div>
</div>
</Col>
<Col xs={4} md={6} sm={12} lg={4} className='pricing-col'>
<div className="bottom-row">
    <div className="top">
        <span>Tolu O.</span>
    <label className="label">IT Service Management Specialist, 
         <i className="uk">UK</i>
     </label>
    
    </div>
    <div className="middle">
        <p>I had the mindset of working in the care sector as a care"..... <span class="span"> <a class="span" href="">read more</a></span></p>
    </div>
</div>
</Col>

<Col xs={4} md={6} sm={12} lg={4} className='pricing-col'>
<div className="bottom-row">
    <div className="top">
        <span>Josh. C,</span>
    <label className="label">Security Analyst &amp; Penetration Tester, 
         <i className="uk">Dublin</i>
     </label>
    
    </div>
    <div className="middle">
        <p>Swift profile is No.1 when it comes to mentoring. From co"..... <span class="span"> <a class="span" href="">read more</a></span></p>
    </div>
</div>
</Col>
</Row>
</div>


        </Container>
      </div>
    </div>
  )
}

export default Package
