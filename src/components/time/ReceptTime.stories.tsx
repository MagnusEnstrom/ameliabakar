// ReceptTime.stories.ts | ReceptTime.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import ReceptTime from './ReceptTime';

export default {
  component: ReceptTime,
  title: 'Components/time/ReceptTime',
  argTypes: {
      timeFormat: {
          options: ['min', 'h'],
          control: { type: 'radio' }
      },
  }
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <ReceptTime {...args} />;

export const Initial = Template.bind({});

Initial.args = {
    time: 20, 
    timeFormat: 'min'
//   text: "font: 700 20px/150% 'Lusitana', serif",
};