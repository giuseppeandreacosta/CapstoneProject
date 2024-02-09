import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './Report.css';

const Report = () => {
  const [segnalazione, setSegnalazione] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    location: '',
    description: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSegnalazione({
      ...segnalazione,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mostra il loader
    setIsLoading(true);

    try {

      // Simula un ritardo di 3 secondi per mostrare il loader
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const response = await fetch('http://localhost:3030/api/segnala-abuso', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(segnalazione),
      });

      if (response.ok) {
        console.log('Segnalazione inviata con successo!');
        // Mostra il messaggio di successo
        setIsSuccess(true);
        // Svuota i campi degli input
        setSegnalazione({
          name: '',
          age: '',
          gender: '',
          email: '',
          location: '',
          description: '',
        });
      } else {
        console.error('Errore durante l\'invio della segnalazione:', response.status);
       
      }
    } catch (error) {
      console.error('Errore generico durante l\'invio della segnalazione:', error);
    } finally {
      
      setIsLoading(true);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className='d-flex justify-content-center align-items-center'>
          <div className="form-container h-100">
            <h2 className="text-center mb-2">Segnala Abuso</h2>

            {isSuccess && (
              <Alert variant="success" onClose={() => setIsSuccess(false)} dismissible>
                Segnalazione inviata con successo!
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il tuo nome"
                  name="name"
                  value={segnalazione.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formAnni">
                <Form.Label>Anni</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Inserisci la tua età"
                  name="age"
                  value={segnalazione.age}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formSesso">
                <Form.Label>Sesso</Form.Label>
                <Form.Control
                  as="select"
                  name="gender"
                  value={segnalazione.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Seleziona</option>
                  <option value="maschio">Maschio</option>
                  <option value="femmina">Femmina</option>
                  <option value="altro">Altro</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formLocation">
                <Form.Label>Posizione</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci la tua posizione"
                  name="location"
                  value={segnalazione.location}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Inserisci la tua email"
                  name="email"
                  value={segnalazione.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formDescrizione">
                <Form.Label>Descrizione</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Descrivi l'abuso che vuoi segnalare"
                  name="description"
                  value={segnalazione.description}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Button variant="danger" type="submit"  disabled={isLoading} className="w-100 mt-3">
                {isLoading ? 'Inviando...' : 'Invia Segnalazione'}
              </Button>

              {/* Visualizza il loader solo quando isLoading è true */}
              {isLoading && (
                <div className="d-flex justify-content-center mt-3">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Report;
