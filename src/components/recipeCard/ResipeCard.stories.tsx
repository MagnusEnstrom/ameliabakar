// ResipeCard.stories.ts | ResipeCard.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import ResipeCard from './ResipeCard';

export default {
  component: ResipeCard,
  title: 'Components/ResipeCard/ResipeCard',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <ResipeCard {...args} />;

export const Initial = Template.bind({});

Initial.args = {
    // transparent: false,
//   text: "font: 700 20px/150% 'Lusitana', serif",
};