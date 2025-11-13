import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';

const skills = {
  soft: ['Problem-Solving', 'Communication', 'Troubleshooting', 'Detail-Oriented', 'Customer Service'],
  technical: ['Windows Client/Server', 'Active Directory', 'Networking', 'Linux', 'Cloud basics'],
  languages: ['Python (Working Knowledge)', 'SQL (Intermediate)'],
  certifications: [
    'Earned: Google IT',
    'In Progress: CompTIA (A+/Cloud+/Net+/Sec+)',
    'AWS',
    'Azure',
    'ITIL',
    'LPI Linux Essentials',
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Skills</h2>
        <Row>
          <Col md={6}>
            <h4 className="text-center">Soft Skills</h4>
            <div className="text-center">
              {skills.soft.map((skill, index) => (
                <Badge pill bg="primary" key={index} className="m-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <h4 className="text-center">Technical Skills</h4>
            <div className="text-center">
              {skills.technical.map((skill, index) => (
                <Badge pill bg="secondary" key={index} className="m-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6}>
            <h4 className="text-center">Languages</h4>
            <div className="text-center">
              {skills.languages.map((skill, index) => (
                <Badge pill bg="success" key={index} className="m-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <h4 className="text-center">Certifications</h4>
            <div className="text-center">
              {skills.certifications.map((skill, index) => (
                <Badge pill bg="info" key={index} className="m-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
