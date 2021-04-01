import React, { useState, useEffect } from "react";
import { Row, Col,  Image, Container  } from 'react-bootstrap';


export default function AboutPage(props) {
  const [authorClicked, setAuthorClicked] = useState(0);

  useEffect(() =>{
    document.querySelectorAll('.author')[0].style.height = '';
    document.querySelectorAll('.author')[1].style.height = '';
    document.querySelectorAll('.author')[2].style.height = '';
    document.querySelectorAll('.author')[authorClicked].style.height ='300px' ;
  });

  return (
    
    <>
    <Container className="about-container">
    <Row>
      <Col> 
      <Image  className="author" src={props.AuthorInfo[0].image} roundedCircle onClick={() => setAuthorClicked(0)}/>
      </Col>
      <Col >
      <Image  className="author" src={props.AuthorInfo[1].image} roundedCircle onClick={() => setAuthorClicked(1)}/>
      </Col>
      <Col >
      <Image  className="author" src={props.AuthorInfo[2].image} roundedCircle onClick={() => setAuthorClicked(2)}/>
      </Col>
    </Row>
  
  <Row>
    <Container className="author-text">
    <Col>
<h1 className="author-name">{props.AuthorInfo[authorClicked].name}</h1>
<p>{props.AuthorInfo[authorClicked].about}</p>
    </Col>
    </Container>
  </Row>
  </Container>
  </>
   
  );
}
