// Toast.stories.ts | Toast.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import Toast from './Toast';
import Subscribe from '../subscribe/Subscribe';

export default {
  component: Toast,
  title: 'Components/Toast/Toast',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <Toast {...args} />;

export const recipeSaved = Template.bind({});
recipeSaved.args = {
    variant: 'recipeSaved'
};

export const recipeCopied = Template.bind({});
recipeCopied.args = {
    variant: 'recipeCopied'
};

export const ingredientsCopied = Template.bind({});
ingredientsCopied.args = {
    variant: 'ingredientsCopied'
};

export const subscribed = Template.bind({});
subscribed.args = {
    variant: 'subscribed'
};