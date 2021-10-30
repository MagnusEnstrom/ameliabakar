// h5.stories.ts | h5.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import H5 from './H5';

export default {
  component: H5,
  title: 'Components/Typography/h5',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <H5>{args.text}</H5>;

export const Initial = Template.bind({});

Initial.args = {
  text: "font: 700 24px/150% 'Lusitana', serif; ",
};