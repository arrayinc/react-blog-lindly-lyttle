import React from 'react';
import { CarouselPhotos } from '../components/carousel';
import { HomepageCards } from '../components/homepagecards';
import { PauseFill } from "react-bootstrap-icons";


function HomePage() {
  return (
    <>
    <h1 className="rainbow rainbow_text_animated">What Do You Need Today? <PauseFill /></h1>
    <div>
      <h1 className="homepage-title">When Life Could Use a <PauseFill /> Button</h1>
      <h1 className="homepage-subtitle" id="shimmer">breaks to enhance your well-being where you live, work, and play&nbsp;
      </h1>
      <CarouselPhotos />
      <HomepageCards />
    </div>
    </>
  );
}
export default HomePage;
