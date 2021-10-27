// h1.stories.ts | h1.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import H1 from './H1';

export default {
  component: H1,
  title: 'Components/Typography/h1',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <H1>{args.text}</H1>;

export const Initial = Template.bind({});

Initial.args = {
  text: "font: 700 24px/150% 'Lusitana', serif; ",
};