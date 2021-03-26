import React from 'react';
import { Link } from 'react-router-dom';
import HomeBreakPhoto from "../images/HomeBreakPage/homebreakcover.jpg";
import { Image } from "react-bootstrap";

function HomeBreak() {
  return (
    <>
      <div>
        <h1>Home Break Blog Title</h1>
        <Image src={HomeBreakPhoto} fluid />
        <h1>Home Break Page</h1>
        <Link to="/">Let's go OM</Link>
      </div>
    </>
  );
}
export default HomeBreak;