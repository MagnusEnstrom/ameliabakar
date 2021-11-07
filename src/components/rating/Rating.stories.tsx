// Rating.stories.ts | Rating.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import Rating from './Rating';

export default {
    component: Rating,
    title: 'Components/Rating/Rating',
    argTypes: {      
        rating: {
            control: { type: 'range', min: 0, max: 5, step: 0.1 }
        },
  }
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <Rating {...args} />;

export const Initial = Template.bind({});

Initial.args = {
    rating: 4.6,
};