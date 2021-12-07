import React from 'react'

import { Meta, Story } from '@storybook/react';

import Chip from './Chip';

export default {
  component: Chip,
  title: 'Components/Chips/Chip',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <Chip {...args} />;

export const Initial = Template.bind({});

Initial.args = {
  text: 'Choklad',
  disabled: false,
  selected: false,
};