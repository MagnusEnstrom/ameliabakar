// Difficulty.stories.ts | Difficulty.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import Difficulty from './Difficulty';

export default {
    component: Difficulty,
    title: 'Components/Difficulty/Difficulty',
    argTypes: {
        diff: {
            options: ['Lätt', 'Medel', 'Svår'],
            control: { type: 'radio' }
        },
  }
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <Difficulty {...args} />;

export const Initial = Template.bind({});

Initial.args = {
    diff: 'Lätt'
};