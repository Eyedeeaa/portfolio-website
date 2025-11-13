import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const projects = [
  {
    title: 'Homelab Project: Active Directory Domain & Client Integration',
    description: [
      'Successfully deployed a Windows Server and integrated client workstations, demonstrating strong technical troubleshooting and logical problem-solving skills to ensure seamless operation.',
      'Troubleshot and resolved critical DNS resolution failures, highlighting the ability to identify the root cause of complex technical issues and implement effective solutions.',
      'Implemented user account management and configured Group Policy Objects (GPOs), demonstrating an understanding of system organization and centralized management.',
    ],
  },
  {
    title: 'Homelab Project: Secure DNS & Ad-Blocking Server',
    description: [
      'Successfully built and deployed a network-wide ad-blocking and privacy-focused DNS server, showcasing a proactive and solution-oriented mindset.',
      'Engineered a recursive DNS solution, demonstrating a deep technical understanding and the ability to enhance system efficiency and security.',
      'Implemented a network-wide ad and tracker blocker, significantly improving the user experience for all connected devices.',
    ],
  },
  {
    title: 'Data Analysis Project (Placeholder)',
    description: [
      'This is a placeholder for a future data analysis project.',
      'I am currently expanding my skills in data analysis and will be adding projects here soon.',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <ul>
                    {project.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
