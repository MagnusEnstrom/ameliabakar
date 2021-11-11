import styled from '@emotion/styled';
import React from 'react';
import typography from '../../lib/typography';
import Checkbox from '../checkbox/Checkbox';

const StyledLabel = styled.label({
    ...typography.p,
    display: 'flex',
    gap: '10px',
})

type Props = { 
    ingredient: string
}
const IngredientItem = ({ingredient}: Props) => {
    return (
        <StyledLabel>
                <Checkbox />
                <span dangerouslySetInnerHTML={ {__html: ingredient } } />
        </StyledLabel>
    )
}

export default IngredientItem
