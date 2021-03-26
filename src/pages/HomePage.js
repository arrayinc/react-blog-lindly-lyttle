import React from 'react';
import { CarouselPhotos } from '../components/carousel';
import { CardsForBlogs } from '../components/cards';


function HomePage() {
  return (
    <div>
      <CarouselPhotos />
      
      <CardsForBlogs />
    </div>
  );
}
export default HomePage;

