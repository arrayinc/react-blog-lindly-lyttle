import React, { useState, useEffect } from "react";
import { Row, Col,  Button, Container  } from 'react-bootstrap';
// import { Badge, Button, ButtonGroup, } from "react-bootstrap";
// import BackgroundPhoto from "../images/WorkBreakPage/workbreakblog2.jpg";
// import { Facebook, Twitter, Instagram, FilePersonFill, Calendar } from "react-bootstrap-icons";
// import { Link } from "react-router-dom";

export default function HomeBreakPage(props) {
  const [blogClicked, setBlogClicked] = useState(3);

  // useEffect(() =>{
  //   document.querySelectorAll('.blog-button')[3].style.height = '';
  //   document.querySelectorAll('.blog-button')[4].style.height = '';
  //   document.querySelectorAll('.blog-button')[5].style.height = '';
  //   // document.querySelectorAll('.blog-button')[blogClicked].style.height ='300px' ;
  // });

  return (
    
    <>
    <h1>HomeBreak</h1>
    <Container className="blog-container">
    <Row>
      <Col> 
      <Button className="blog-button" src={props.BlogPageInfo[3].title}  onClick={() => setBlogClicked(3)}/>
      </Col>
      <Col >
      <Button className="blog-button" src={props.BlogPageInfo[4].title}  onClick={() => setBlogClicked(4)}/>
      </Col>
      <Col >
      <Button className="blog-button" src={props.BlogPageInfo[5].title}  onClick={() => setBlogClicked(5)}/>
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
