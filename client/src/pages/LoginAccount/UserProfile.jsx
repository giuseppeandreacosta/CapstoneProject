import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const UserProfile = () => {
  const [userData, setUserData] = useState();
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Effettua la richiesta all'API per ottenere i dati dell'utente
        const response = await fetch('http://localhost:3030/api/users', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('_Id')}`
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
  }, []); 

  if (!userData) {
    return <p>Caricamento...</p>;
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
