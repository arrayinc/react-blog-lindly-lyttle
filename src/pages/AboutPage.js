import React, { useState, useRef } from 'react';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col, Button, Overlay, } from 'react-bootstrap';
import  PhotoOne  from '../images/carousel/Calm1.jpg';
import PhotoTwo from '../images/carousel/Calm2.jpg';
import PhotoThree from '../images/carousel/Calm3.jpg';


function AboutPage() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
    
  return (
      <div>
    <h1>About the Authors</h1>
    <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={PhotoOne} ref={target} onClick={() => setShow(!show)} roundedCircle fluid />
      {/* <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button> */}
      <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Author Info
          </div>
        )}
      </Overlay>
    </Col>
    <Col xs={6} md={4}>
      <Image src={PhotoTwo} roundedCircle fluid />
    </Col>
    <Col xs={6} md={4}>
      <Image src={PhotoThree} roundedCircle fluid />
    </Col>
  </Row>
</Container>


{/* <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button> */}
      <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Author Info
          </div>
        )}
      </Overlay>
    </div>
    
  );
}


export default AboutPage;
