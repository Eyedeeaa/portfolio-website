import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const contact = {
  email: 'danny.r20@outlook.com',
  linkedin: 'https://www.linkedin.com/in/danny-r20/',
  github: 'https://github.com/your-github-username', // Placeholder
};

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Contact</h2>
        <Row className="text-center">
          <Col>
            <p>
              Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p>
              LinkedIn: <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">{contact.linkedin}</a>
            </p>
            <p>
              GitHub: <a href={contact.github} target="_blank" rel="noopener noreferrer">{contact.github}</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
