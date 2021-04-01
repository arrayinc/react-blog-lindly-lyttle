import React, { useState } from "react";
import { Navbar, Nav, Row, Button, Container, Badge, Image } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Bookmark, ThreeDotsVertical, Calendar } from "react-bootstrap-icons";

export default function WorkBreakPage(props) {
  const [blogClicked, setBlogClicked] = useState(0);
  return (
    <>
      <div>
        <Navbar className="blogpage-nav" bg="light" variant="light">
          <Navbar.Brand className="blogpage-nav-title" href="#home">Work Break</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={() => setBlogClicked(0)}>Morning Ritual</Nav.Link>
            <Nav.Link onClick={() => setBlogClicked(1)}>Meditation</Nav.Link>
            <Nav.Link onClick={() => setBlogClicked(2)}>Movement</Nav.Link>
          </Nav>
        </Navbar>
      </div>

      <Container className="blog-container">
        <Row>
          <Button className="blog-button-one" onClick={() => setBlogClicked(0)} />
          <Button className="blog-button-two" onClick={() => setBlogClicked(1)} />
          <Button className="blog-button-three" onClick={() => setBlogClicked(2)} />
        </Row>
      </Container>
      <Row>
        <Container className="blog-content">
          <h1 className="blog-title">{props.BlogPageInfo[blogClicked].title}</h1>
          <Container className="subtitle-container">
            <h3 className="blog-subtitle">{props.BlogPageInfo[blogClicked].subtitle}</h3>
          </Container>
          <br />
          <Image className="author-avatar" src={props.BlogPageInfo[blogClicked].authoravatar} alt="" />
          <h6 className="blog-author">Authored By {props.BlogPageInfo[blogClicked].author} &nbsp;<Badge pill variant="dark">Follow</Badge></h6>
          <br /><h6 className="blog-date-time"><Calendar /> {props.BlogPageInfo[blogClicked].date}</h6>
          <p className="socials"> <Facebook /> <Twitter /> <Instagram /> <Bookmark /> <ThreeDotsVertical /></p>
          <img className="blog-image" src={props.BlogPageInfo[blogClicked].image} alt="" />
          <p className="photo-credit">{props.BlogPageInfo[blogClicked].photocredit}</p>
          <p className="blog-quote">{props.BlogPageInfo[blogClicked].quote}</p>
          <hr className="line-break" />
          <libr />
          <p className="blog-intro-text">{props.BlogPageInfo[blogClicked].introtext}</p>
          <p className="blog-text">{props.BlogPageInfo[blogClicked].contentblockone}</p>
          <p className="blog-header">{props.BlogPageInfo[blogClicked].headerblocktwo}</p>
          <p className="blog-text">{props.BlogPageInfo[blogClicked].contentblocktwo}</p>
          <p className="blog-header">{props.BlogPageInfo[blogClicked].headerblockthree}</p>
          <p className="blog-text">{props.BlogPageInfo[blogClicked].contentblockthree}</p>
        </Container>
      </Row>
    </>
  )
}