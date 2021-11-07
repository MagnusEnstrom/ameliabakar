// HeaderTransparent.stories.ts | HeaderTransparent.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import HeaderTransparent from './HeaderTransparent';

export default {
  component: HeaderTransparent,
  title: 'Components/Header/HeaderTransparent',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <HeaderTransparent {...args} />;

export const Initial = Template.bind({});

Initial.args = {
//   text: "font: 700 20px/150% 'Lusitana', serif",
};