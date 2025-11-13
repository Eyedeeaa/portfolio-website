import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const educations = [
  {
    institution: 'Western Governors University',
    location: 'Online',
    degree: 'Bachelors Of Science - Cloud Computing',
    period: 'Expected Graduation: Spring 2026',
  },
  {
    institution: 'Miguel Contreras Learning Complex',
    location: 'Los Angeles, CA',
    degree: 'High School Diploma',
    period: 'Aug 2008 - Jun 2012',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Education</h2>
        {educations.map((edu, index) => (
          <Row key={index} className="mb-4">
            <Col>
              <h4>{edu.institution}</h4>
              <h5>
                {edu.degree} | {edu.location} | {edu.period}
              </h5>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Education;
