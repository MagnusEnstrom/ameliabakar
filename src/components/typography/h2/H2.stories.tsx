// h2.stories.ts | h2.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import H2 from './H2';

export default {
  component: H2,
  title: 'Components/Typography/h2',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <H2>{args.text}</H2>;

export const Initial = Template.bind({});

Initial.args = {
  text: "font: 700 24px/150% 'Lusitana', serif; ",
};