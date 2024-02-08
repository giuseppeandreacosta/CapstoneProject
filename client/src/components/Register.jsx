import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';


const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isEntiPreposti, setIsEntiPreposti] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      username: username,
      password: password,
    };



    try {
      const response = await fetch(
        isEntiPreposti
          ? 'http://localhost:3030/api/enti-preposti-register'
          : 'http://localhost:3030/api/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        }
      );

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
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
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
              {/* Aggiungi i campi aggiuntivi per la registrazione degli "Enti Preposti" */}
              {isEntiPreposti && (
                <>
                  
                </>
              )}
              <div className="enti-preposti-checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={isEntiPreposti}
                    onChange={() => setIsEntiPreposti(!isEntiPreposti)}
                  />
                  Registrati come Ente Preposto
                </label>
              </div>
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
      
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
