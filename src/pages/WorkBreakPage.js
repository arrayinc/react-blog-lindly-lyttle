import React from 'react';
import { Card, Badge, Alert } from "react-bootstrap";
import BackgroundPhoto from "../images/WorkBreakPage/workbreakblog2.jpg";
import { Facebook, Twitter, Instagram, FilePersonFill, Calendar } from "react-bootstrap-icons";

function WorkBreak() {
  return (
    <>
      <Alert className="blog-page-alert" variant='secondary'>
        Work BREAK&nbsp; |&nbsp;&nbsp;Morning Ritual&nbsp;&nbsp;&nbsp;&nbsp;Meditation&nbsp;&nbsp;&nbsp;&nbsp;Affirmations&nbsp;&nbsp;&nbsp;&nbsp;Journaling&nbsp;&nbsp;&nbsp;&nbsp;Healthy recipes&nbsp;&nbsp;&nbsp;&nbsp;Well-being at work
  </Alert>
      <h1>Work Break Blog Title</h1>
      <br />
      <h5 className="blog-author">Authored By  <Badge pill variant="primary">Billy Bob</Badge>  <FilePersonFill /></h5>
      <br /><h6><Calendar /> Sun Mar 28, 2021</h6><h6> 3 min read | <Facebook /> <Twitter /> <Instagram /></h6>
      <img className="work-break-photo" src={BackgroundPhoto} alt="First slide" />
      <div>
        <div class="card-columns">
          <div class="card bg-primary">
            <div class="card-body text-center">
              <p class="card-text">Some text inside the first card</p>
            </div>
          </div>
          <div class="card bg-warning">
            <div class="card-body text-center">
              <p class="card-text">Some text inside the second card</p>
            </div>
          </div>
          <div class="card bg-success">
            <div class="card-body text-center">
              <p class="card-text">Some text inside the third card</p>
            </div>
          </div>
          <div class="card bg-danger">
            <div class="card-body text-center">
              <p class="card-text">Some text inside the fourth card</p>
            </div>
          </div>
          <div class="card bg-light">
            <div class="card-body text-center">
              <p class="card-text">Some text inside the fifth card</p>
            </div>
          </div>
          <div class="card bg-info">
            <div class="card-body text-center">
              <p class="card-text">Some text inside the sixth card</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WorkBreak;