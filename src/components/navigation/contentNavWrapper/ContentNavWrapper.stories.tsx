// ContentNavWrapper.stories.ts | ContentNavWrapper.stories.tsx

import React, { useState } from 'react'

import { Meta, Story } from '@storybook/react';

import ContentNavWrapper from './ContentNavWrapper';

import { Active, Inactive } from '../contentNavItem/ContentNavItem.stories';

export default {
    component: ContentNavWrapper,
    title: 'Components/Navigation/ContentNavWrapper/ContentNavWrapper',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => {
    const [activeNav, setActiveNav] = useState<'ingredienser' | 'detail'>('ingredienser')

    return (
        <ContentNavWrapper {...args}>
            <Active text={'Ingredienser'} onClick={() => setActiveNav('ingredienser')} active={activeNav === 'ingredienser'} />
            <Inactive text={'Gör såhär'} onClick={() => setActiveNav('detail')} active={activeNav === 'detail'} />
        </ContentNavWrapper>    
    )
}

export const Initial = Template.bind({});

Initial.args = {
};