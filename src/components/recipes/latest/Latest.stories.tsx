// Latest.stories.ts | Latest.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import Latest from './Latest';

export default {
  component: Latest,
  title: 'Components/Latest/Latest',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <Latest {...args} />;

export const Initial = Template.bind({
    
});

Initial.args = {
    // transparent: false,
//   text: "font: 700 20px/150% 'Lusitana', serif",
};