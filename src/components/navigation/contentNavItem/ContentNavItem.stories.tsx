// ContentNavItem.stories.ts | ContentNavItem.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import ContentNavItem from './ContentNavItem';

export default {
    component: ContentNavItem,
    title: 'Components/Navigation/ContentNavItem/ContentNavItem',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <ContentNavItem {...args} />;

export const Active = Template.bind({});

Active.args = {
    text: 'Ingredienser',
    active: true,
};
export const Inactive = Template.bind({});

Inactive.args = {
    text: 'Ingredienser',
    active: false,
};