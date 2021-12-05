// seBreadcrumbs.stories.ts | seBreadcrumbs.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import Breadcrumbs, { Props } from './Breadcrumbs';

export default {
  component: Breadcrumbs,
  title: 'Components/Breadcrumbs/Breadcrumbs',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args: Props) => <Breadcrumbs {...args} />;

export const Initial = Template.bind({});

Initial.args = {
  crumbs: [
      { name: 'Hem', to:'/' },
      { name: 'Recept', to:'/recept' },
      { name: 'Kladdkaka', to:'/recept/kladdkaka' },
  ]
} as Props;