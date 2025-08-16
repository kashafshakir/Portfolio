import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Envelope, Telephone, Linkedin, Github } from 'react-bootstrap-icons';

const ContactPage = () => {
  return (
    <Container className="my-5 py-4">
      <Row className="justify-content-center">
        <Col lg={8} className="text-center mb-4">
          <h2 className="display-5 fw-light">Get In Touch</h2>
          <p className="lead text-muted">Feel free to reach out through any of these channels</p>
        </Col>
      </Row>
      
      <Row className="g-4 justify-content-center">
        {/* Email Card */}
        <Col md={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm hover-effect">
            <Card.Body className="text-center p-4">
              <div className="icon-circle bg-primary bg-opacity-10 text-primary mb-3 mx-auto">
                <Envelope size={24} />
              </div>
              <h5 className="fw-light mb-2">Email</h5>
              <a href="mailto:kashafshakir39@gmail.com" className="text-decoration-none text-dark stretched-link">
               kashafshakir39@gmail.com
              </a>
            </Card.Body>
          </Card>
        </Col>
        
        {/* Phone Card */}
        <Col md={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm hover-effect">
            <Card.Body className="text-center p-4">
              <div className="icon-circle bg-success bg-opacity-10 text-success mb-3 mx-auto">
                <Telephone size={24} />
              </div>
              <h5 className="fw-light mb-2">Phone</h5>
              <a href="tel:03131211008" className="text-decoration-none text-dark stretched-link">
                contact me
              </a>
            </Card.Body>
          </Card>
        </Col>
        
        {/* LinkedIn Card */}
        <Col md={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm hover-effect">
            <Card.Body className="text-center p-4">
              <div className="icon-circle bg-info bg-opacity-10 text-info mb-3 mx-auto">
                <Linkedin size={24} />
              </div>
              <h5 className="fw-light mb-2">LinkedIn</h5>
              <a href="https://www.linkedin.com/in/kashaf-shakir-06a1202bb/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark stretched-link">
                kashaf-shakir
              </a>
            </Card.Body>
          </Card>
        </Col>
        
        {/* GitHub Card */}
        <Col md={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm hover-effect">
            <Card.Body className="text-center p-4">
              <div className="icon-circle bg-dark bg-opacity-10 text-dark mb-3 mx-auto">
                <Github size={24} />
              </div>
              <h5 className="fw-light mb-2">GitHub</h5>
              <a href="https://github.com/kashafshakir" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark stretched-link">
                check out my Github
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;