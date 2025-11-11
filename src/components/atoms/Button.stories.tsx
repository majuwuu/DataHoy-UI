import React from 'react';
import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { children: 'Primary Button', variant: 'primary' } };
export const Secondary: Story = { args: { children: 'Secondary Button', variant: 'secondary' } };