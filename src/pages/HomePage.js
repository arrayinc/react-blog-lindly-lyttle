import React from 'react';
import { CarouselPhotos } from '../components/carousel';
import { CardsForBlogs } from '../components/cards';
import  AboutPhotos  from './AboutPage';

function HomePage() {
  return (
    <div>
      <CarouselPhotos />
      <AboutPhotos />
      <CardsForBlogs />
    </div>
  );
}
export default HomePage;

