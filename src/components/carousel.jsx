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
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={PhotoTwo} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={PhotoThree} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default CarouselPhotos;
