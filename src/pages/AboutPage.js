import React, { useState, useRef } from 'react';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col, } from 'react-bootstrap';
import AboutAuthor1 from './AboutAuthor1';
import AboutAuthor2 from './AboutAuthor2';
import AboutAuthor3 from './AboutAuthor3';


function AboutPage() {
    
  return (
      <div>
    <h1>About the Authors</h1>
    <Container>
  <Row>
  <Col xs={6} md={4}>
<AboutAuthor1 />
</Col>
<Col xs={6} md={4}>
<AboutAuthor2 />
</Col>
<Col xs={6} md={4}>
<AboutAuthor3 />
</Col>
  </Row>
</Container>
    </div>
    
  );
}


export default AboutPage;
