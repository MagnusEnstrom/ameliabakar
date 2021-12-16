// TertiaryButton.stories.ts | TertiaryButton.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import TertiaryButton from './TertiaryButton';

export default {
  component: TertiaryButton,
  title: 'Components/TertiaryButton/TertiaryButton',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <TertiaryButton {...args} />;

export const Initial = Template.bind({});

Initial.args = {
    to: '/',
    name: 'Kontakt'
};