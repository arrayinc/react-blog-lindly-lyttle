import React, { useState, useEffect } from "react";
import { Row, Col, Image, Container, Navbar, Nav } from 'react-bootstrap';


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
      {/* <h1 className="rainbow rainbow_text_animated" id="about-us-header">About Us</h1> */}
      <div>
        <Navbar className="about-nav" variant="light">
          <Navbar.Brand className="about-nav-title" href="#home">About Us</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={() => setAuthorClicked(0)}>Emily</Nav.Link>
            <Nav.Link onClick={() => setAuthorClicked(1)}>Abby</Nav.Link>
            <Nav.Link onClick={() => setAuthorClicked(2)}>Molly</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <h1 className="about-us-header">We love...&nbsp;
          <span
          class="txt-rotate"
          data-period="2000"
          data-rotate='[ "sunshine.", "learning.", "community.", "and coffee!" ]'></span>
      </h1>
      <Container className="about-photo-container">
        <link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" />

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

let TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  let css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};