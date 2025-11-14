import React from 'react';
import { HeroSlider } from './HeroSlider';

export default {
  title: 'Organisms/HeroSlider',
  component: HeroSlider,
};

// Provide default props for HeroSlider
export const Default = () => <HeroSlider slides={[{ id: 1, title: 'Slide 1', image: 'slide1.jpg', description: 'This is the first slide', category: 'Category 1', time: '10:00 AM' }]} />;