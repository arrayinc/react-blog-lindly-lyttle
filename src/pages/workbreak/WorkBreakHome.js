import React, { useState, useEffect } from "react";
import { Row, Col, Button, Container, Badge, Alert } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, FilePersonFill, Calendar, PauseFill, Sun } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function WorkBreakHome(props) {
  const [blogClicked, setBlogClicked] = useState(0);

  // useEffect(() =>{
  //   document.querySelectorAll('.blog-button')[0].style.height = '';
  //   document.querySelectorAll('.blog-button')[1].style.height = '';
  //   document.querySelectorAll('.blog-button')[2].style.height = '';
  //   // document.querySelectorAll('.blog-button')[blogClicked].style.height ='300px' ;
  // });

  return (
    <>
      <div>
        <Alert className="blog-page-alert" variant='secondary'>
          <Link to="/workbreakhome">Work BREAK&nbsp;</Link> |&nbsp;&nbsp;Morning Ritual&nbsp;&nbsp;&nbsp;&nbsp;Meditation&nbsp;&nbsp;&nbsp;&nbsp;Affirmations&nbsp;&nbsp;&nbsp;&nbsp;Journaling&nbsp;&nbsp;&nbsp;&nbsp;Healthy recipes&nbsp;&nbsp;&nbsp;&nbsp;Well-being at work
        </Alert>
      </div>
      <h1 className="rainbow rainbow_text_animated">Choose a Work Break <PauseFill /></h1>

      <div>
        <div class="card-columns">
        <div class="card bg-primary">
            <div class="card-body text-center">
              <Link to="/workbreak/morningritual"><p class="card-text">Morning Ritual</p></Link><Sun className="card-icons" />
            </div>
          </div>
          <div class="card bg-warning">
            <div class="card-body text-center">
            <Link to="/workbreak/meditation"><p class="card-text">Meditation</p></Link><Sun className="card-icons" />
            </div>
          </div>
          <div class="card bg-success">
            <div class="card-body text-center">
              <p class="card-text">Affirmations</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



