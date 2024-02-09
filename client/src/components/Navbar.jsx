import React, { useState, useContext } from "react";
import { Button, Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
import anonymous from "../assets/images/anonymous.jpg";
import LoginPage from "../components/Login.jsx";
import  CurrentUserContext  from "./CurrentUserContext";

function NavBar() {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [showLogin, setShowLogin] = useState(false);
  const isLoggedIn = localStorage.getItem("_Id") ? true : false;
  const [redirectLogout, setRedirectLogout] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleRegisterClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("_Id");
    setRedirectLogout(true);
    setCurrentUser(null);
 
  }

  const handleProfileClick = () => {
    console.log("Vai al profilo utente");
  };
 
  console.log("isLoggedIn:", isLoggedIn);

  
  
  return (
    <div>
      {redirectLogout && <Navigate to="/home" />}
      <Navbar expand="lg">
        <Container fluid>
          <img
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="d-inline-block align-top img-fluid pointer me-3"
          />
          <Navbar.Brand href="/home">No Alla Violenza</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex justify-content-center align-items-center w-100"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="about">Chi siamo</Nav.Link>
              <Nav.Link href="testimonials">Testimonianze</Nav.Link>
              <Nav.Link href="report">Segnala Abuso</Nav.Link>
              <Nav.Link href="contacts">Contatti</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              {isLoggedIn ? (
                <Dropdown>
                  <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                    <img
                      src={anonymous}
                      alt="Immagine profilo"
                      width={30}
                      height={30}
                      className="d-inline-block align-top rounded-circle pointer me-3 img-fluid"
                    />
                   
                   </Dropdown.Toggle>
                  <Dropdown.Menu className="">
                    <Dropdown.Item href="userprofile" onClick={handleProfileClick}>
                      Profilo
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Nav.Link href="registration">
                    <Button variant="outline-secondary" onClick={handleRegisterClick}>
                      Registrati
                    </Button>
                  </Nav.Link>
                  <Nav.Link href="login">
                    <Button variant="outline-secondary" onClick={handleLoginClick} >
                      Accedi
                    </Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showLogin && <LoginPage onClose={handleCloseLogin} />}
    </div>
  );
}

export default NavBar;
