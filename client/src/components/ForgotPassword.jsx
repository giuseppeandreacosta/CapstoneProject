import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const ResetPasswordPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isResetComplete, setIsResetComplete] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3030/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Password reset success:', result);

        // Imposta lo stato di reset completato su true
        setIsResetComplete(true);
      } else {
        const errorMessage = await response.json();
        console.error('Errore durante il reset della password:', errorMessage.message);
      }
    } catch (error) {
      console.error('Errore durante la chiamata API:', error);
    }
  };

  // Se il reset è completato, reindirizza l'utente
  if (isResetComplete) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-container">
            <p className="title">Reset Password</p>
            <form className="form" onSubmit={handleResetPassword}>
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
                placeholder="Nuova Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="form-btn">
                Resetta Password
              </button>
            </form>
            <p className="sign-up-label">
              Ricordi la password? <Link to="/login">Accedi</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
