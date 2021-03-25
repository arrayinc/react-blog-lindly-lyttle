import React, { Component } from 'react';
import  Carousel from 'react-bootstrap/Carousel';
import  PhotoOne  from './images/carousel/Calm1.jpg';
import PhotoTwo from './images/carousel/Calm2.jpg';
import PhotoThree from './images/carousel/Calm3.jpg';


export class CarouselPhotos extends Component {
  render() {
    return (
      <div>

      <Carousel>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src= {PhotoOne}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Mindfulness</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PhotoTwo}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Meditation</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PhotoThree}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Grounding</h3>
            <p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      </div>
    );
  }
}
