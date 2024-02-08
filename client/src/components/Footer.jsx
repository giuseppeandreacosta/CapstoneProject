import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import facebook from '../assets/images/facebookIcon.png';
import instagram from '../assets/images/instagramIcon.jpg';
import twitter from '../assets/images/twitterIcon.png';
import './Footer.css';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-4 " > 
      <Container fluid >
        <Row className='d-flex justify-content-center align-items-center'>
          <Col md={4} className='text-center d-flex align-items-center justify-content-center'>
            <h5>Copyright © {currentYear} No Alla Violenza</h5>
          </Col>
          <Col md={4} className='text-center '>
            {/* <h5>Social Media</h5> */}
            <div className='d-flex justify-content-center gap-3 my-3 align-items-center'>
              <div className="facebook">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img className="img-fluid" src={facebook}  alt="facebook" />
              </a>
              </div>
              <div className="instagram">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
               <img className="img-fluid" src={instagram} alt="" />
              </a>

              </div>
              <div className="twitter">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitter} className="img-fluid" alt="" />
              </a>

              </div>
            </div>
          </Col>
          <Col md={4} >
            <div className="contacts d-flex justify-content-center align-items-center flex-column">

            <h5>Contatti d'emergenza</h5>
            <p>Email: emergenza@noallaviolenza.com</p>
            <p>Telefono: +39 123 456 789</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
