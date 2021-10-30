// h4.stories.ts | h4.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import H4 from './H4';

export default {
  component: H4,
  title: 'Components/Typography/h4',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <H4>{args.text}</H4>;

export const Initial = Template.bind({});

Initial.args = {
  text: "font: 700 24px/150% 'Lusitana', serif; ",
};