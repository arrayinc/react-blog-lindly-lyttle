import React, { useState, useEffect } from "react";
import { Row, Col,  Button, Container  } from 'react-bootstrap';
// import { Badge, Button, ButtonGroup, } from "react-bootstrap";
// import BackgroundPhoto from "../images/WorkBreakPage/workbreakblog2.jpg";
// import { Facebook, Twitter, Instagram, FilePersonFill, Calendar } from "react-bootstrap-icons";
// import { Link } from "react-router-dom";

export default function PlayBreakPage(props) {
  const [blogClicked, setBlogClicked] = useState(6);

  // useEffect(() =>{
  //   document.querySelectorAll('.blog-button')[6].style.height = '';
  //   document.querySelectorAll('.blog-button')[7].style.height = '';
  //   document.querySelectorAll('.blog-button')[8].style.height = '';
  //   // document.querySelectorAll('.blog-button')[blogClicked].style.height ='300px' ;
  // });

  return (
    
    <>
    <Container className="blog-container">
    <Row>
      <Col> 
      <Button className="blog-button" src={props.BlogPageInfo[6].title}  onClick={() => setBlogClicked(6)}/>
      </Col>
      <Col >
      <Button className="blog-button" src={props.BlogPageInfo[7].title}  onClick={() => setBlogClicked(7)}/>
      </Col>
      <Col >
      <Button className="blog-button" src={props.BlogPageInfo[8].title}  onClick={() => setBlogClicked(8)}/>
      </Col>
    </Row>
  
  <Row>
    <Container className="blog-content">
    <Col>
<h1 className="blog-date">{props.BlogPageInfo[blogClicked].title}</h1>
<p>{props.BlogPageInfo[blogClicked].content}</p>
    </Col>
    </Container>
  </Row>
  </Container>
  </>
   
  );
}
