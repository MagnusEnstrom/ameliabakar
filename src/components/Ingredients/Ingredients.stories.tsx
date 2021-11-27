// Ingredients.stories.ts | Ingredients.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import Ingredients from './Ingredients';

export default {
    component: Ingredients,
    title: 'Components/Ingredients/Ingredients',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <Ingredients {...args} />;

export const Initial = Template.bind({});

Initial.args = {
    content: "<p><strong>Fudgekladdkaka<br />\n</strong>150 g smör<br />\n150 g dumlekolor (ca 20st)<br />\n2 ägg<br />\n2 dl socker<br />\n1 dl farinsocker<br />\n1 dl vetemjöl<br />\n0,5 dl kakao<br />\n1 nypa salt</p>\n<p><strong>Smaksattgrädde x5<br />\n</strong>60 g dumle &#8211; dark<br />\n1 dl vispgrädde<br />\n/<br />\n60 g dumle &#8211; lakrits<br />\n1 dl vispgrädde<br />\n/<br />\n60 g dumle &#8211; original<br />\n1 dl vispgrädde<br />\n/<br />\n60 g dumle &#8211; banan<br />\n1 dl vispgrädde<br />\n/<br />\n1 dl vispgrädde<br />\n1 msk vaniljsocker<br />\n1 msk florsocker</p>\n<p>&nbsp;</p>\n"
};