import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
     
      username: username,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:3030/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const { user, token } = await response.json();
        console.log('Nuovo utente registrato:', user);
        console.log('Token JWT:', token);

       
      } else {
        const errorMessage = await response.json();
        console.error('Errore durante la registrazione:', errorMessage.message);
      }
    } catch (error) {
      console.error('Errore durante la chiamata API:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-container">
            <p className="title">Crea il tuo Account</p>
            <form className="form" onSubmit={handleRegister}>
              <input
                type="text"
                className="input"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="form-btn">
                Registrati
              </button>
            </form>
            <p className="sign-up-label">
              Hai già un account?
              <Link to="/login">
                <span className="sign-up-link">Accedi</span>
              </Link>
            </p>
            <div className="buttons-container mt-5">
              <div className="facebook-login-button">
                <FaFacebookSquare />
                <span>Registrati con Facebook</span>
              </div>
              <div className="google-login-button">
                <FcGoogle />
                <span>Registrati con Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
