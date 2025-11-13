import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center mb-4">About Me</h2>
            <p className="text-center">
              Accomplished professional with extensive experience in customer-facing roles, skilled in troubleshooting, problem-solving, and effective communication. Proven ability to de-escalate incidents and provide clear, concise information to diverse audiences. Dedicated to delivering exceptional service and ensuring customer satisfaction through logical analysis and detailed documentation.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
