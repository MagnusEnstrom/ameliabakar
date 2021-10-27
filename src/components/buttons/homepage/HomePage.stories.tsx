// homePage.stories.ts | homePage.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import Button from './HomePage';

export default {
  component: Button,
  title: 'Components/Buttons/homePage',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button disabled={args.disabled}>{args.label}</Button>;

export const Initial = Template.bind({});

Initial.args = {
  disabled: false,
  label: 'Button',
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  label: 'Button',
};