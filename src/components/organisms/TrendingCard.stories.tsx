import React from 'react';
import { TrendingCard } from './TrendingCard';

export default {
  title: 'Organisms/TrendingCard',
  component: TrendingCard,
};

// Provide default props for TrendingCard
export const Default = () => <TrendingCard rank={1} title="Trending Title" time="5 mins ago" category="Category" />;