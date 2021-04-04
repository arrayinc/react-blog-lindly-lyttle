/* Imported React and Hook */
import React, { useState } from "react";
/* Imported Components from Bootstrap */
import { Navbar, Nav, Row, Container, Badge, Image } from 'react-bootstrap';
/* Imported Icons from Bootstrap */
import { Facebook, Twitter, Instagram, Bookmark, ThreeDotsVertical, Calendar } from "react-bootstrap-icons";

/* Homebreak Homepage Containing All Blogs */
export default function HomeBreakPage(props) {
  const [blogClicked, setBlogClicked] = useState(3);
  return (
    <>
      <div>
        <Navbar className="homebreak-blogpage-nav" variant="light">
          <Navbar.Brand className="blog-nav-title" href="#home">Home Break</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={() => setBlogClicked(3)}>Self-care</Nav.Link>
            <Nav.Link onClick={() => setBlogClicked(4)}>Holistic Health</Nav.Link>
            <Nav.Link onClick={() => setBlogClicked(5)}>Meditation</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <Container className="blog-container">
        <Row>
          <div className="blog-button-one" onClick={() => setBlogClicked(3)}></div>
          <div className="blog-button-two" onClick={() => setBlogClicked(4)}></div>
          <div className="blog-button-three" onClick={() => setBlogClicked(5)}></div>
        </Row>
      </Container>
      <Row>
        <Container className="blog-content">
          <h1 className="blog-title">{props.BlogPageInfo[blogClicked].title}</h1>
          <Container className="subtitle-container">
            <h3 className="blog-subtitle">{props.BlogPageInfo[blogClicked].subtitle}</h3>
          </Container>
          <br />
          <Image className="homebreak-author-avatar" src={props.BlogPageInfo[blogClicked].authoravatar} alt="" />
          <h6 className="blog-author">Authored By {props.BlogPageInfo[blogClicked].author} &nbsp;<Badge pill variant="dark">Follow</Badge></h6>
          <br /><h6 className="blog-date-time"><Calendar /> {props.BlogPageInfo[blogClicked].date}</h6>
          <p className="socials"> <Facebook /> <Twitter /> <Instagram /> <Bookmark /> <ThreeDotsVertical /></p>
          <img className="blog-image" src={props.BlogPageInfo[blogClicked].image} alt="" />
          <p className="photo-credit">{props.BlogPageInfo[blogClicked].photocredit}</p>
          <p className="blog-quote">{props.BlogPageInfo[blogClicked].quote}</p>
          <hr className="line-break" />
          <p className="blog-intro-text">{props.BlogPageInfo[blogClicked].introtext}</p>
          <hr className="line-break" />
          <p className="blog-text">{props.BlogPageInfo[blogClicked].contentblockone}</p>
          <p className="blog-header">{props.BlogPageInfo[blogClicked].headerblocktwo}</p>
          <p className="blog-text">{props.BlogPageInfo[blogClicked].contentblocktwo}</p>
          <p className="blog-header">{props.BlogPageInfo[blogClicked].headerblockthree}</p>
          <p className="blog-text">{props.BlogPageInfo[blogClicked].contentblockthree}</p>
          <hr className="line-break" />
        </Container>
      </Row>
    </>
  )
}