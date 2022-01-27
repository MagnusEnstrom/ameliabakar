// Input.stories.ts | Input.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import SearchInput from './SearchInput';

export default {
    component: SearchInput,
    title: 'Components/Form/SearchInput',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => <SearchInput {...args} />;

export const Initial = Template.bind({});

Initial.args = {
    placeholder: 'Sök recept'
} as React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>