import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import colors from '../../lib/colors'
import typography from '../../lib/typography'
import { useGetCountOfSavedRecipes } from '../../hooks/savedRecipeQueries'

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
})

const SavedCounter = ({
    ...rest
}: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>) => {
    const amount = useGetCountOfSavedRecipes()
    return amount ? <StyledCounter {...rest}>{amount}</StyledCounter> : null
}

export default SavedCounter
