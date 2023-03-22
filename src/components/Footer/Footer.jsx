

import React from 'react'
import {Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import '../../styles/footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Testy Treat</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
          
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:pm</p>
              </ListGroupItem>
              
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
            
          </Col>
          <Col lg='3' md='4' sm='6'>
          
            <h5 className='footer__title'>Contact</h5>
              <ListGroup className='deliver__time-list'>
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <p>Location: Kyrgyzstan, Bishkek, Ibraimova 115/1</p>
                </ListGroupItem>
                
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Phone: +996708374919</span>
                </ListGroupItem>
                
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Email: z.elaman699@gmail.com</span>
                </ListGroupItem>
              </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>NewsLetter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder='Enter your email'/>
              <span><i class="ri-send-plane-line"></i></span>
            </div>
          </Col>
        </Row>
        
        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright__text' >Copyright - 2023, website made by Elaman Zarlykov. All Rights Reserved.</p>
          </Col>
          <Col lg='6' md='6'>
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className='m-0'>Follow: </p>
              {""}
              <span><Link to='https://t.me/elaman_11'><i class="ri-telegram-line"></i></Link></span>
              <span><Link to='https://github.com/ElamanZ'><i class="ri-github-line"></i></Link></span>
              <span><Link to='https://wa.me/+996708374919'><i class="ri-whatsapp-line"></i></Link></span>
              <span><Link to='https://www.linkedin.com/in/elaman-zarlykov-a91227237/'><i class="ri-linkedin-line"></i></Link></span>
              <span><Link to=''></Link></span>
              <span><Link to=''></Link></span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer