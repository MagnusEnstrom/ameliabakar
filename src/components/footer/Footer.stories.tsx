// Footer.stories.ts | Footer.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import Footer from './Footer';

export default {
    component: Footer,
    title: 'Components/Footer/Footer',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <Footer {...args} />;

export const Initial = Template.bind({});

Initial.args = {
  
};