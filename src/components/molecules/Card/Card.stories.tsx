import React from 'react';
import Card from './Card';
import Button from '../../atoms/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card title',
    children: (
      <p>
        Card content <Button>Action</Button>
      </p>
    ),
  },
};