import React from 'react';
import { NewsCard } from './NewsCard';

export default {
  title: 'Organisms/NewsCard',
  component: NewsCard,
};

// Provide default props for NewsCard
export const Default = () => <NewsCard title="News Title" description="News Description" category="Category" time="10 mins ago" image="news.jpg" />;