import React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import CurrentUserContext from './CurrentUserContext';

const LoginPage = ({ onLogin }) => {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isEntiPreposti, setIsEntiPreposti] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let loginEndpoint = 'http://localhost:3030/api/login';

      // Scegli l'endpoint corretto in base al tipo di utente
      if (isEntiPreposti) {
        loginEndpoint = 'http://localhost:3030/api/enti-preposti-login';
      }

      const response = await fetch(loginEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'bearer': localStorage.getItem('_Id')
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('_Id', data.token);
        console.log('Login success:', data);

        setCurrentUser(data.user);
        setLoggedIn(true);

        if (onLogin) {
          onLogin();
        }
      } else {
        const errorData = await response.json();
        console.error('Login failed:', response.status, errorData);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  if (loggedIn) {
    // Utilizza Navigate per il redirect
    const redirectRoute = isEntiPreposti ? '/userprofileenti' : '/userprofile';
    return <Navigate to={redirectRoute} />;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-container">
            <p className="title">Bentornato</p>
            <form className="form">
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

              <div className="enti-preposti-checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={isEntiPreposti}
                    onChange={() => setIsEntiPreposti(!isEntiPreposti)}
                  />
                  Accedi come Ente Preposto
                </label>
              </div>

              <Link to="/forgot-password" className="page-link-label">
                Hai dimenticato la password?
              </Link>

              <button className="form-btn" onClick={handleLogin}>
                Accedi
              </button>
            </form>
            <p className="sign-up-label">
              Non hai un account?
              <Link to="/registration">
                <span className="sign-up-link">Registrati</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
