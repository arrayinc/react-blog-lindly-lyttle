import React, { useState, useEffect } from "react";
import { Row, Col,  Button, Container  } from 'react-bootstrap';
// import { Badge, Button, ButtonGroup, } from "react-bootstrap";
// import BackgroundPhoto from "../images/WorkBreakPage/workbreakblog2.jpg";
// import { Facebook, Twitter, Instagram, FilePersonFill, Calendar } from "react-bootstrap-icons";
// import { Link } from "react-router-dom";

export default function WorkBreakPage(props) {
  const [blogClicked, setBlogClicked] = useState(0);

  // useEffect(() =>{
  //   document.querySelectorAll('.blog-button')[0].style.height = '';
  //   document.querySelectorAll('.blog-button')[1].style.height = '';
  //   document.querySelectorAll('.blog-button')[2].style.height = '';
  //   // document.querySelectorAll('.blog-button')[blogClicked].style.height ='300px' ;
  // });

  return (
    
    <>
    <h1>WorkBreak</h1>
    <Container className="blog-container">
    <Row>
      <Col> 
      <Button className="blog-button" src={props.BlogPageInfo[0].title}  onClick={() => setBlogClicked(0)}/>
      </Col>
      <Col >
      <Button className="blog-button" src={props.BlogPageInfo[1].title}  onClick={() => setBlogClicked(1)}/>
      </Col>
      <Col >
      <Button className="blog-button" src={props.BlogPageInfo[2].title}  onClick={() => setBlogClicked(2)}/>
      </Col>
    </Row>
  
  <Row>
    <Container className="blog-content">
    <Col>
<h1 className="blog-date">{props.BlogPageInfo[blogClicked].date}</h1>
<p>{props.BlogPageInfo[blogClicked].author}</p>
<p>{props.BlogPageInfo[blogClicked].content}</p>

    </Col>
    </Container>
  </Row>
  </Container>
  </>
   
  );
}
