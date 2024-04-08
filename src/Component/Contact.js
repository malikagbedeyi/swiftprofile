import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/HeaderStyle.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div>
      <div className="contact">
   <Container>
        <Row>
            <Col xs={4} md={6} sm={12} lg={4} className='pricing-col'>
                <div className="contact-row">
                    <h4 className="contact-heading-h4">Consultation is #FREE</h4>
                    <p className="contact-heading-p">Get a professional help today</p>

                     <h5 className="contact-heading-h5">Address</h5>
                    <p className="contact-heading-p">UK, Ireland, Germany, Canada, and US</p>

                     <h5 className="contact-heading-h5">Email</h5>
                    <p className="contact-heading-p">support@swiftprofile.com</p>

                    <h5 className="contact-heading-h5">Phone</h5>
                    <p className="contact-heading-p">+44 73 7723 2501 , +353 851 457 958</p>
                </div>
            </Col>

             <Col xs={8} md={6} sm={12} lg={8} className='pricing-col'>
                <div className="contact-row-form">
                     <h4 className="contact-heading-h4">Say Something</h4>
                     <input type="text" 
                     placeholder="Name"
                      name="name" 
                      className="form-control"
                      onChange={e=>e.target.value}
                      />
                     <Row>
                         <Col xs={6} md={12} sm={12} lg={6} className='pricing-col'>
                               <input type="text" 
                               placeholder="Email"
                                name="email" 
                                className="form-control"
                                onChange={e=>e.target.value}
                                />
                         </Col>

                          <Col xs={6} md={12} sm={12} lg={6} className='pricing-col'>
                               <input type="text" 
                               placeholder="Phone Number"
                                name="phone number"
                                 className="form-control"
                                 onChange={e=>e.target.value}
                                 />
                         </Col>
                         <Col xs={12} md={12} sm={12} lg={12} className='pricing-col'>
                             <textarea placeholder="Your Comment" 
                             name="comment" className="form-xl"></textarea>
                         </Col>
                     </Row>
                      <button className="get-in-touch" type="submit" name="send">GET IN TOUCH</button>
                </div>
            </Col>
        </Row>
    </Container>
</div>

<footer>
<div className="the-end">
     <div className="container-2">
      <a className="footer-link" target="_blank" href="https://www.linkedin.com/in/Agbedeyi-Malik/">LinkedIn</a>
      <a className="footer-link" target="_blank" href="https://twitter.com/Aggbedeyi-Malik">Twitter</a>
      <a className="footer-link" target="_blank" href="https://www.appbrewery.co/">Website</a>
      </div>
</div>
</footer>
    </div>
  )
}

export default Contact
