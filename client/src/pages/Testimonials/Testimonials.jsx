// Testimonials.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import TestimonialForm from './TestimonialForm';
import './Testimonials.css';

const Testimonials = () => {
  const [testimonianze, setTestimonianze] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('http://localhost:3030/api/testimonials');
        const data = await response.json();

        if (data && data.length > 0) {
          const allTestimonials = data.reduce((acc, current) => acc.concat(current.testimonianze), []);
          setTestimonianze(allTestimonials);
        } else {
          setError('Dati delle testimonianze non trovati.');
        }
      } catch (error) {
        console.error('Errore durante il recupero delle testimonianze:', error);
        setError('Si è verificato un errore durante il recupero delle testimonianze.');
      }
    };

    fetchTestimonials();
  }, []);

  const handleFormSubmit = async (newTestimonial) => {
    try {
      //  chiamata POST per inviare la testimonianza al backend
      const response = await fetch('http://localhost:3030/api/invia-testimonianza', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTestimonial),
      });

      if (response.ok) {
        // Aggiorna lo stato delle testimonianze se l'invio è riuscito
        const updatedTestimonianze = [...testimonianze, newTestimonial];
        setTestimonianze(updatedTestimonianze);
      } else {
        console.error('Errore durante l\'invio della testimonianza:', response.statusText);
      }
    } catch (error) {
      console.error('Errore durante l\'invio della testimonianza:', error.message);
    }
  };

  return (
    <Container className="margin-top-1">
      <h2 className="text-center mb-4">Testimonianze</h2>
      
      <div className="text-end">
        <TestimonialForm onFormSubmit={handleFormSubmit} />
      </div>
      <Row xs={1} md={2} lg={3} className="g-4 mt-3">
        {error && <p className="error-message">{error}</p>}
        {testimonianze.map((testimonianza, index) => (
          <Col key={index}>
            <Card className="mb-3 testimonial-card">
              <Card.Body>
                <Card.Title className="testimonial-name">{testimonianza?.nome}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted testimonial-age">{testimonianza?.eta} anni</Card.Subtitle>
                <Card.Text className="testimonial-experience">{testimonianza?.esperienza}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
