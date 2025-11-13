import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const experiences = [
  {
    company: 'Action Force Security INC.',
    location: 'Los Angeles, CA',
    title: 'Security Officer',
    period: 'Jun 2019 - Current',
    description: [
      'Demonstrated an ability to manage and de-escalate critical situations through calm, logical thinking and effective communication, skills directly applicable to resolving customer complaints and ensuring operational continuity.',
      'Maintained a secure environment through vigilant monitoring and identifying potential issues, reflecting a proactive approach to problem-solving.',
      'Ensured close attention to detail in adhering to protocols and documented activities and incidents thoroughly, contributing to comprehensive record-keeping.',
    ],
  },
  {
    company: 'Samsung/Bestbuy',
    location: 'Los Angeles, CA',
    title: 'Sales Lead',
    period: 'Jun 2013 - Jun 2019',
    description: [
      'Provided technical assistance and support to customers, effectively resolving product inquiries and device-related issues.',
      'Diagnosed device malfunctions and guided non-technical users through troubleshooting steps, translating complex information into easily understandable instructions.',
      'Taught classes to groups of 5-8 new non-technical users, which improved customer understanding and satisfaction.',
      'Collaborated with internal teams to enhance service protocols and improve overall customer satisfaction.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Work Experience</h2>
        {experiences.map((exp, index) => (
          <Row key={index} className="mb-4">
            <Col>
              <h4>{exp.company}</h4>
              <h5>
                {exp.title} | {exp.location} | {exp.period}
              </h5>
              <ul>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Experience;
