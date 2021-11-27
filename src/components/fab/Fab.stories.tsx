// seFab.stories.ts | seFab.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import Fab from './Fab';

export default {
    component: Fab,
    title: 'Components/Fab',
    argTypes: {
        variant: {
            options: ['share', 'save', 'print', 'copy', 'filter'],
            control: { type: 'radio' }
        },
    }
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <Fab {...args} />;

export const Initial = Template.bind({});

Initial.share = {
    variant: 'share'
};