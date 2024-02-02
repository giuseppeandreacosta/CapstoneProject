import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" py-5 " > 
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
                <FaFacebook size={30} className="text-black-50 mr-2" />
              </a>
              </div>
              <div className="instagram">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="text-black-50 mr-2" />
              </a>

              </div>
              <div className="twitter">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} className="text-black-50" />
              </a>

              </div>
            </div>
          </Col>
          <Col md={4} className='d-flex justify-content-center align-items-center'>
            <div className="contacts">

            <h5>Contatti d'emergenza</h5>
            <p>Email: emergenza@example.com</p>
            <p>Telefono: +39 123 456 789</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
