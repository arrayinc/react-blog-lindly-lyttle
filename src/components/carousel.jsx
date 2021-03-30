import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import PhotoOne from "../images/carousel/Pink.jpeg";
import PhotoTwo from "../images/carousel/Blue.jpeg";
import PhotoThree from "../images/carousel/Orange.jpeg";

export class CarouselPhotos extends Component {
  render() {
    return (
      <div>
        <Carousel className="carousel">
          <Carousel.Item>
            <img className="d-block w-100" src={PhotoOne} alt="First slide" />
            <Carousel.Caption className="carousel-caption">
              <h6>I can accomplish hard things.</h6>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={PhotoTwo} alt="Second slide" />

            <Carousel.Caption>
              <h6>Every day is a new chance to get it right.</h6>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={PhotoThree} alt="Third slide" />

            <Carousel.Caption>
              <h6>I am grounded in the here and now.</h6>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default CarouselPhotos;
