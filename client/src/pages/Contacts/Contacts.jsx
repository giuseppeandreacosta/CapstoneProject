import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './Contacts.css';

const Contacts = () => {
  const associazioneContatti = [
    { nome: 'Associazione CoopSole', email: 'info@associazione.com', telefono: '+39 123 456 789' },
    { nome: 'Responsabile Assistenza', email: 'assistenza@associazione.com', telefono: '+39 987 654 321' },
    { nome: 'Volontariato', email: 'volontariato@associazione.com', telefono: '+39 111 222 333' },
  ];

  const entiContatti = [
    { nome: 'Polizia Locale', telefono: '113', indirizzo: 'Via della Polizia, 123' },
    { nome: 'Centro Antiviolenza', telefono: '+39 555 123 456', indirizzo: 'Via del Centro, 456' },
    { nome: 'Ospedale San Giovanni', telefono: '+39 777 888 999', indirizzo: 'Via dell\'Ospedale, 789' },
  ];

  return (
    <Container className="margin-top">
      <Row>
        <Col md={8} className="mx-auto">
          <h2 className="text-center mb-4">Contatti</h2>

          {/* Contatti dell'Associazione */}
          <Card className="mb-4">
            <Card.Header>Contatti dell'Associazione</Card.Header>
            <ListGroup variant="flush">
              {associazioneContatti.map((contatto, index) => (
                <ListGroup.Item key={index}>
                  <strong>{contatto.nome}</strong>
                  <br />
                  Email: {contatto.email}
                  <br />
                  Telefono: {contatto.telefono}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>

          {/* Contatti degli Enti */}
          <Card>
            <Card.Header>Contatti degli Enti</Card.Header>
            <ListGroup variant="flush">
              {entiContatti.map((contatto, index) => (
                <ListGroup.Item key={index}>
                  <strong>{contatto.nome}</strong>
                  <br />
                  Telefono: {contatto.telefono}
                  <br />
                  Indirizzo: {contatto.indirizzo}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
