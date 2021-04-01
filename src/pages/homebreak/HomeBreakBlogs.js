import React, { useState } from "react";
import { Navbar, Nav, Row, Button, Container, Badge } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Calendar, Bookmark, ThreeDotsVertical } from "react-bootstrap-icons";


export default function HomeBreakPage(props) {
  const [blogClicked, setBlogClicked] = useState(3);
  return (
    <>
      <div>
        <Navbar className="blogpage-nav" bg="light" variant="light">
          <Navbar.Brand className="blogpage-nav-title" href="#home">Home Break</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>Affirmations</Nav.Link>
            <Nav.Link href="/workbreak/blogs">Meditation</Nav.Link>
            <Nav.Link href="/workbreak/blogs">Movement</Nav.Link>
          </Nav>
        </Navbar>
      </div>

      <Container className="blog-container">
        <Row>
          <Button className="blog-button-one" src={props.BlogPageInfo[3].title} onClick={() => setBlogClicked(3)} />
          <Button className="blog-button-two" src={props.BlogPageInfo[4].title} onClick={() => setBlogClicked(4)} />
          <Button className="blog-button-three" src={props.BlogPageInfo[5].title} onClick={() => setBlogClicked(5)} />
        </Row>
      </Container>
      <Row>
      <Container className="blog-content">
          <h1 className="blog-title">{props.BlogPageInfo[blogClicked].title}</h1>
          <h3 className="blog-subtitle">{props.BlogPageInfo[blogClicked].subtitle}</h3>
          <br />
          <img className="author-avatar" src={props.BlogPageInfo[blogClicked].authoravatar} alt="" />
          <h6 className="blog-author">Authored By {props.BlogPageInfo[blogClicked].author} &nbsp;<Badge pill variant="dark">Follow</Badge></h6>
          <br /><h6 className="blog-date-time"><Calendar /> {props.BlogPageInfo[blogClicked].date}</h6>
          <p className="socials"> <Facebook /> <Twitter /> <Instagram /> <Bookmark /> <ThreeDotsVertical /></p>
          <img className="blog-image" src={props.BlogPageInfo[blogClicked].image} alt="" />
          <p className="photo-credit">{props.BlogPageInfo[blogClicked].photocredit}</p>
          <p className="blog-quote">{props.BlogPageInfo[blogClicked].quote}</p>
          <hr className="line-break"/>
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