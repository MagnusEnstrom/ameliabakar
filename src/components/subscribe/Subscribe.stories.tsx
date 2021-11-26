// Subscribe.stories.ts | Subscribe.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import Subscribe from './Subscribe';

export default {
    component: Subscribe,
    title: 'Components/Subscribe/Subscribe',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => (
    <div style={{maxWidth: '300px'}}>
        <Subscribe {...args} />
    </div>

);

export const Initial = Template.bind({});

Initial.args = {
  
};