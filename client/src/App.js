import React, { useState, createContext, useContext } from "react";
import NavBar from "./components/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About";
import Contact from "./pages/Contacts/Contacts";
import Report from "./pages/Report/Report";
import Testimonials from "./pages/Testimonials/Testimonials";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.jsx";
import LoginPage from "./components/Login.jsx";
import RegisterPage from "./components/Register.jsx";
import UserProfile from "./pages/LoginAccount/UserProfile.jsx";
import CurrentUserContext from "./components/CurrentUserContext";



function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (userData) => {
    setCurrentUser(userData);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <NavBar isLoggedIn={currentUser !== null} onLogout={handleLogout} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/report" element={<Report />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route
            path="/login"
            element={<LoginPage onLogin={handleLogin} />}
          />
          <Route path="/registration" element={<RegisterPage />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
