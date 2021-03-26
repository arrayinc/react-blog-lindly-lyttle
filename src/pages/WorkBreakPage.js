import React from 'react';
import { Link } from 'react-router-dom';
import WorkBreakPhoto from "../images/WorkBreakPage/workbreakcover.jpg";
import { Image } from "react-bootstrap";

function WorkBreak() {
  return (
    <>
      <div>
        <h1>Work Break Blog Title</h1>
        <Image src={WorkBreakPhoto} fluid />
        <Link to="/">Let's go OM</Link>
      </div>
    </>
  );
}
export default WorkBreak;