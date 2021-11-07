// Header.stories.ts | Header.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import Header from './Header';

export default {
  component: Header,
  title: 'Components/Header/Header',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <Header {...args} />;

export const Initial = Template.bind({});

Initial.args = {
    transparent: false,
//   text: "font: 700 20px/150% 'Lusitana', serif",
};