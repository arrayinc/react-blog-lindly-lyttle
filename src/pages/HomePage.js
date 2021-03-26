import React from 'react';
import { CarouselPhotos } from '../carousel';
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

