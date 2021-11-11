// IngredientItem.stories.ts | IngredientItem.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import IngredientItem from './IngredientItem';

export default {
    component: IngredientItem,
    title: 'Components/IngredientItem/IngredientItem',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <IngredientItem {...args} />;

export const Initial = Template.bind({});

Initial.args = {
    ingredient: '2.5 dl strösocker'
};