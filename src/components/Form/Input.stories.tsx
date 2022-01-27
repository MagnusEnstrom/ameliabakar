// Input.stories.ts | Input.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import Input from './Input';

export default {
    component: Input,
    title: 'Components/Form/Input',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => <Input {...args} />;

export const Initial = Template.bind({});

Initial.args = {
    placeholder: 'E-mail adress'
} as React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>