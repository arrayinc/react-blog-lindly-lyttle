import React from 'react';
import { CarouselPhotos } from '../carousel';
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

