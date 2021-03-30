import React from 'react';
import { Link } from 'react-router-dom';
import HomeBreakPhoto from "../images/HomeBreakPage/homebreakcover.jpg";
// import { Image } from "react-bootstrap";


function HomeBreak(props) {
  return (
    <>
      <div>
        <h1>{props.BlogPageInfo[3].title}</h1>
        <h1>{props.BlogPageInfo[4].title}</h1>
        <h1>{props.BlogPageInfo[5].title}</h1>
        {/* <Image src={HomeBreakPhoto} fluid /> */}
        
        <Link to="/">Let's go OM</Link>
      </div>
    </>
  );
}
export default HomeBreak;