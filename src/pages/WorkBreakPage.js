import React from 'react';
import { Link } from 'react-router-dom';
import WorkBreakPhoto from "../images/WorkBreakPage/workbreakcover.jpg";
import { Image } from "react-bootstrap";

function WorkBreak() {
  return (
    <>
      <div>
      <Image src={WorkBreakPhoto} fluid />
    <h1>WorkBreakPage</h1>
        <Link to="/">Let's go OM</Link>
      </div>
    </>
  );
}
export default WorkBreak;