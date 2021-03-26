import React from 'react';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col, } from 'react-bootstrap';
import  PhotoOne  from '../images/carousel/Calm1.jpg';
import PhotoTwo from '../images/carousel/Calm2.jpg';
import PhotoThree from '../images/carousel/Calm3.jpg';


function AboutPage() {
    return (
      <div>
    <h1>About the Authors</h1>
    <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={PhotoOne} roundedCircle fluid />
    </Col>
    <Col xs={6} md={4}>
      <Image src={PhotoTwo} roundedCircle fluid />
    </Col>
    <Col xs={6} md={4}>
      <Image src={PhotoThree} roundedCircle fluid />
    </Col>
  </Row>
</Container>
    </div>
    
  );
}


export default AboutPage;
