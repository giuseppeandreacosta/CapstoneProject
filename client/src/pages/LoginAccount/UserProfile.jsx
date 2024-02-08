import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

const UserProfile = () => {
  const { id } = useParams();
  console.log('User ID:', id);
  
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('_Id');

        if (!token) {
          setError('Token non disponibile.');
          return;
        }

        const decodedToken = parseJwt(token);
        const userId = id || decodedToken.userId;

        const response = await fetch(`http://localhost:3030/api/users/${userId}`, {
          headers: {
            'Authorization': `JWT ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          setError('Errore durante la richiesta dei dati dell\'utente');
        }
      } catch (error) {
        setError(`Errore durante la richiesta dei dati dell'utente: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) {
    return <p>Caricamento...</p>;
  }

  if (error) {
    return <p>Errore: {error}</p>;
  }

  if (!userData) {
    return <p>Dati dell'utente non disponibili.</p>;
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Profilo utente</Card.Title>
              <Card.Text>
                <p>Username: {userData.username}</p>
                <p>Email: {userData.email}</p>
              </Card.Text>
              <Button variant="primary">Modifica</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
