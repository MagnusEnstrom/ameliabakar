// Checkbox.stories.ts | Checkbox.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
    component: Checkbox,
    title: 'Components/Checkbox/Checkbox',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <Checkbox {...args} />;

export const Initial = Template.bind({});

Initial.args = {
};