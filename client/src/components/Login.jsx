import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import CurrentUserContext from "./CurrentUserContext"; // Assicurati di inserire il percorso corretto

const LoginPage = ({ onLogin }) => {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3030/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('_Id', data.token);
        console.log('Login success:', data);

        // Utilizza setCurrentUser per impostare i dati dell'utente nel contesto
        setCurrentUser(data.user);

        setLoggedIn(true);

        // Se desideri gestire il login anche localmente, puoi chiamare onLogin
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

  // Se loggedIn è true, reindirizza l'utente
  if (loggedIn) {
    return <Navigate to="/userprofile" />;
  }

  const handleEntiPrepostiLogin = async () => {
    try {
      // Aggiungi qui la logica di autorizzazione per gli "Enti Preposti"
      // Ad esempio, puoi fare una richiesta al backend per verificare le credenziali degli "Enti Preposti"

      // Simuliamo una risposta positiva per l'esempio
      const response = await fetch('http://localhost:3030/api/enti-preposti-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('_Id', data.token);
        console.log('Enti Preposti Login success:', data);

        // Aggiorna lo stato come se fosse un login normale
        setCurrentUser(data.user);
        setLoggedIn(true);

        // Puoi gestire ulteriori azioni come con il login normale
        if (onLogin) {
          onLogin();
        }
      } else {
        // Se la risposta è diversa da OK, gestisci di conseguenza
        const errorData = await response.json();
        console.error('Enti Preposti Login failed:', response.status, errorData);
      }
    } catch (error) {
      console.error('Error during Enti Preposti login:', error.message);
    }
  };

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
              <p className="page-link">
                <span className="page-link-label"> Password dimenticata?</span>
              </p>
              <button className="form-btn" onClick={handleLogin}>
                Accedi
              </button>
              <button className="form-btn" onClick={handleEntiPrepostiLogin}>
                Entri Preposti
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
