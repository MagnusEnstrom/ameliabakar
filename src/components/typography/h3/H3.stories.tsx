// h3.stories.ts | h3.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import H3 from './H3';

export default {
  component: H3,
  title: 'Components/Typography/h3',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <H3>{args.text}</H3>;

export const Initial = Template.bind({});

Initial.args = {
  text: "font: 700 24px/150% 'Lusitana', serif; ",
};