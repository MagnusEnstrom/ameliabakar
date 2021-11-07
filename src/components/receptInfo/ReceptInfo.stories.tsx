// ReceptInfo.stories.ts | ReceptInfo.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import ReceptInfo from './ReceptInfo';

export default {
    component: ReceptInfo,
    title: 'Components/ReceptInfo/ReceptInfo',
    argTypes: {
        svarighetsgrad: {
            options: ['Lätt', 'Medel', 'Svår'],
            control: { type: 'radio' }
        },
        tidFormat: {
            options: ['min', 'h'],
            control: { type: 'radio' }
        },
  }
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <ReceptInfo {...args} />;

export const Initial = Template.bind({});

Initial.args = {
    tid: 20,
    tidFormat: 'min',
    svarighetsgrad: 'Lätt',
};