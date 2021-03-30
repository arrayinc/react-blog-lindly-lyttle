import React from 'react';
import { Badge, Alert } from "react-bootstrap";
import BackgroundPhoto from "../images/WorkBreakPage/workbreakblog2.jpg";
import { PauseFill, Sun } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function WorkBreak() {
  return (
    <>
      <Alert className="blog-page-alert" variant='secondary'>
        Work BREAK&nbsp; |&nbsp;&nbsp;<Link to="/WorkBreakMorningRitual">Morning Ritual</Link>&nbsp;&nbsp;&nbsp;&nbsp;Meditation&nbsp;&nbsp;&nbsp;&nbsp;Affirmations&nbsp;&nbsp;&nbsp;&nbsp;Journaling&nbsp;&nbsp;&nbsp;&nbsp;Healthy recipes&nbsp;&nbsp;&nbsp;&nbsp;Well-being at work
  </Alert>
      <h1>Choose Your Work Break <PauseFill /></h1>
      <div>
        <div class="card-columns">
          <div class="card bg-primary">
            <div class="card-body text-center">
              <Link to="/workbreakmorningritual"><p class="card-text">Morning Ritual</p></Link><Sun className="card-icons" />
            </div>
          </div>
          <div class="card bg-warning">
            <div class="card-body text-center">
              <p class="card-text">Meditation</p>
            </div>
          </div>
          <div class="card bg-success">
            <div class="card-body text-center">
              <p class="card-text">Affirmations</p>
            </div>
          </div>
          <div class="card bg-danger">
            <div class="card-body text-center">
              <p class="card-text">Journaling</p>
            </div>
          </div>
          <div class="card bg-light">
            <div class="card-body text-center">
              <p class="card-text">Healthy Recipes</p>
            </div>
          </div>
          <div class="card bg-info">
            <div class="card-body text-center">
              <p class="card-text">Well-being at Work</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WorkBreak;