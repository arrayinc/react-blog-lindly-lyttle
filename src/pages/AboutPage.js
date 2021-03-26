import React from 'react';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col, } from 'react-bootstrap';
function AboutPage() {
  return (
    <>
    <div>
    <h1>About the Authors</h1>
    <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" roundedCircle />
    </Col>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" thumbnail />
    </Col>
  </Row>
</Container>
    </div>
    </>
  );
}
export default AboutPage;

