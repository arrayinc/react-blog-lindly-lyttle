import React, { useState, useRef } from 'react';
import Image from 'react-bootstrap/Image';
import { Row, Col, Overlay, } from 'react-bootstrap';
import  PhotoOne  from '../images/carousel/Calm1.jpg';

function AboutAuthor1() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
      
    return (
    <Row>
        <Image src={PhotoOne} ref={target} onClick={() => setShow(!show)} roundedCircle fluid />
        <Overlay target={target.current} show={show} placement="bottom">
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
  </Row>
    )}
    export default AboutAuthor1;