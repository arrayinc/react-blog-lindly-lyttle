import React from 'react';
import { Link } from 'react-router-dom';
import PlayBreakPhoto from "../images/PlayBreakPage/playbreakcover.jpg";
import { Image } from "react-bootstrap";

function PlayBreak() {
  return (
    <>
      <div>
        <h1>Play Break Blog Title</h1>
        <Image src={PlayBreakPhoto} fluid />
        <h1>Play Break Page</h1>
        <Link to="/">Let's go OM</Link>
      </div>
    </>
  );
}
export default PlayBreak;