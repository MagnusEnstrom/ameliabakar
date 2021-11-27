// seRegular.stories.ts | seRegular.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import Regular from './Regular';

export default {
  component: Regular,
  title: 'Components/Chips/Regular',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <Regular {...args}>{}</Regular>;

export const Initial = Template.bind({});

Initial.args = {
  text: 'Regular',
  disabled: false,
};