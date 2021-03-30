import React from 'react';
import { Badge, Alert } from "react-bootstrap";
import BackgroundPhoto from "../images/WorkBreakPage/workbreakblog2.jpg";
import { Facebook, Twitter, Instagram, FilePersonFill, Calendar } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function WBMorningRitual() {
  return (
    <>
      <div>
        <Alert className="blog-page-alert" variant='secondary'>
          <Link to="/workbreak">Work BREAK&nbsp;</Link> |&nbsp;&nbsp;Morning Ritual&nbsp;&nbsp;&nbsp;&nbsp;Meditation&nbsp;&nbsp;&nbsp;&nbsp;Affirmations&nbsp;&nbsp;&nbsp;&nbsp;Journaling&nbsp;&nbsp;&nbsp;&nbsp;Healthy recipes&nbsp;&nbsp;&nbsp;&nbsp;Well-being at work
  </Alert>
        <h1 className="blog-title">A Work Morning Ritual</h1>
        <br />
        <h6 className="blog-author">Authored By  <Badge pill variant="primary">Billy Bob</Badge>  <FilePersonFill /></h6>
        <br /><h6 className="blog-date-time-socials"><Calendar /> Sun Mar 28, 2021 | 3 min read | <Facebook /> <Twitter /> <Instagram /></h6>
        <img className="workbreak-morning-ritual-photo" src={BackgroundPhoto} alt="First slide" />
      </div>
      <div className="blog-text">It is really important to have a morning ritual</div>
    </>
  );
}
export default WBMorningRitual;