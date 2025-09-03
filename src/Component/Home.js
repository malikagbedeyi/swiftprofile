import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/HeaderStyle.css'

import feature6 from '../assets/Images/feature6.svg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div>
     <div className='Home'>
         <Row>
            <Container className='home-container'>
          <Col xs={5} md={12} sm={12} lg={5}>
            <div className='home-heading'>
             <div className="home-text" >
            <h6>We are here for you</h6>
            </div>
				<h1 className="home-text-1"> Ultimate platform to build strong profile for #Tech jobs in the UK, Ireland and Germany.</h1>
				<h6 className="home-text-2">At SwiftProfile, we will help you with simulated learning, mentoring and a strong profile with or without previous background in Tech.</h6>
					<Button className='home-btn' type="submit">LEARN MORE</Button>
            </div>
          </Col>

          <Col xs={6} md={12} sm={12} lg={6}>
            <div>
                <img className='home-image' src={feature6} alt='homeImage' />
            </div>

          </Col>
          </Container>
          </Row>
         </div>


    </div>
  )
}

export default Home
