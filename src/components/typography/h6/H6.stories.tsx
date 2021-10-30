// h6.stories.ts | h6.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import H6 from './H6';

export default {
  component: H6,
  title: 'Components/Typography/h6',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <H6>{args.text}</H6>;

export const Initial = Template.bind({});

Initial.args = {
  text: "font: 700 24px/150% 'Lusitana', serif; ",
};