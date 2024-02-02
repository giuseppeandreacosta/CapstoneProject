import React, { useState } from 'react';
import { Button, Modal, Form, Spinner } from 'react-bootstrap';

const TestimonialForm = ({ onFormSubmit }) => {
  const [showModal, setShowModal] = useState(false);
  const [testimonial, setTestimonial] = useState({ nome: '', eta: '', esperienza: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTestimonial({ ...testimonial, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulazione di un caricamento
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setShowModal(false);
    onFormSubmit(testimonial);
    setTestimonial({ nome: '', eta: '', esperienza: '' });
    setIsLoading(false);
  };

  return (
    <>
      <Button variant="danger" onClick={() => setShowModal(true)}>
        Aggiungi Testimonianza
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)} className="shadow">
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Testimonianza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il nome (opzionale)"
                name="nome"
                value={testimonial.nome}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAge">
              <Form.Label>Età</Form.Label>
              <Form.Control
                type="number"
                placeholder="Inserisci l'età (opzionale)"
                name="eta"
                value={testimonial.eta}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContent">
              <Form.Label>Esperienza</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Condividi la tua esperienza"
                name="esperienza"
                value={testimonial.esperienza}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button variant="danger" type="submit" disabled={isLoading}>
              Invia Testimonianza
            </Button>

            {isLoading && (
              <Spinner animation="border" role="status" className="ms-2">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TestimonialForm;
