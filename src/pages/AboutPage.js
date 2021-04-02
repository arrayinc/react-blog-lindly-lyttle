import React, { useState, useEffect } from "react";
import { Row, Col, Image, Container } from 'react-bootstrap';


export default function AboutPage(props) {
  const [authorClicked, setAuthorClicked] = useState(0);



  useEffect(() => {
    document.querySelectorAll('.author')[0].style.height = '';
    document.querySelectorAll('.author')[1].style.height = '';
    document.querySelectorAll('.author')[2].style.height = '';
    document.querySelectorAll('.author')[authorClicked].style.height = '200px'
    // document.querySelectorAll('.author')[authorClicked].style.width ='275px'
  });

  return (

    <>
      <h1 className="rainbow rainbow_text_animated" id="about-us-header">About Us</h1>
      <Container className="about-photo-container">
        <Row>
          <Col>
            <Image className="author" id="fadein" src={props.AuthorInfo[0].photo} roundedCircle onClick={() => setAuthorClicked(0)} />
          </Col>
          <Col >
            <Image className="author" id="fadein" src={props.AuthorInfo[1].photo} roundedCircle onClick={() => setAuthorClicked(1)} />
          </Col>
          <Col >
            <Image className="author" id="fadein" src={props.AuthorInfo[2].photo} roundedCircle onClick={() => setAuthorClicked(2)} />
          </Col>
        </Row>

        <Row>
          <Container className="author-bio-container">
            <Col>
              <h1 className="author-name">{props.AuthorInfo[authorClicked].name}</h1>
              <p className="about-text">{props.AuthorInfo[authorClicked].about}</p>
            </Col>
          </Container>
        </Row>
    </Container>
    </>

  );
}
