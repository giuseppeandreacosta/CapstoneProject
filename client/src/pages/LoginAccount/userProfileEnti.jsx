import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';

const UserProfileEnti = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('http://localhost:3030/api/reports');
        if (response.ok) {
          const data = await response.json();
          setReports(data);
        } else {
          setError('Errore durante il recupero delle segnalazioni.');
        }
      } catch (error) {
        setError(`Errore generico: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Segnalazioni di Abuso</h2>
          {loading && <Spinner animation="border" role="status" className="d-block mx-auto my-4">
            <span className="sr-only">Caricamento...</span>
          </Spinner>}
          {error && <p className="text-center text-danger">Errore: {error}</p>}
          {reports.map((report) => (
            <Card key={report._id} className="mb-4 shadow">
              <Card.Body>
                <Card.Title>{report.name}</Card.Title>
                <Card.Text>
                  <p><strong>Anni:</strong> {report.age}</p>
                  <p><strong>Sesso:</strong> {report.gender}</p>
                  <p><strong>Posizione:</strong> {report.location}</p>
                  <p><strong>Email:</strong> {report.email}</p>
                  <p><strong>Descrizione:</strong> {report.description}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfileEnti;
