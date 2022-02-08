import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import colors from '../../lib/colors';
import typography from '../../lib/typography';

const StyledCounter = styled.div({
    ...typography.badge,
    color: colors.white,
    position: 'absolute',
    minHeight: '18px',
    minWidth: '18px',
    borderRadius: '50%',
    textAlign: 'center',
    zIndex: '10',
    backgroundColor: colors.red,
    lineHeight: '18px',
    verticalAlign: 'middle',
});

const SavedCounter = ({...rest}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    const [ amount, setAmount ] = useState(0);
    useEffect(() => {
        const storageString = localStorage.getItem('savedRecipes');
        if(!storageString) return;
        const savedRecipes = JSON.parse(storageString) as string[];
        setAmount(savedRecipes.length);
    }, [])
    return amount ? (
        <StyledCounter {...rest}>
            {88}
        </StyledCounter>) 
        : null;
};

export default SavedCounter;
