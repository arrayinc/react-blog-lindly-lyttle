import React from 'react';
import { CarouselPhotos } from '../components/carousel';
import { HomepageCards } from '../components/homepagecards';
import { PauseFill } from "react-bootstrap-icons";


function HomePage() {
  return (
    <div>
      <h1 className="homepage-title">When Life Could Use a <PauseFill /> Button</h1>
      <h5 className="homepage-subtitle">breaks to enhance well-being where you work, live, and play</h5>
      <HomepageCards />
      <CarouselPhotos />
    </div>
  );
}
export default HomePage;

