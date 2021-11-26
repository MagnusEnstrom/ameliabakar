import React from 'react'
import styled from '@emotion/styled'
import typography from '../../lib/typography'
import radius from '../../lib/radius'
import colors from '../../lib/colors'
import Newsletter from '../../assets/newsletter-white.svg'
import Share from '../../assets/share-white.svg'
import Copy from '../../assets/copy-white.svg'
import Heartfill from '../../assets/heart-fill-red.svg'


const StyledToast = styled.button({
    ...typography.button,
    display: 'flex',
    alignItems: 'center',
    borderRadius: radius.button,
    padding: '14px 40px',
    color: colors.white,
    backgroundColor: colors.jet,
    border: 'none',
    gap: '12px',
    width: 'max-content'

})
const NewsletterIcon = styled(Newsletter)({
    height: '24px',
})
const ShareIcon = styled(Share)({
    height: '24px',
})
const CopyIcon = styled(Copy)({
    height: '24px',
})
const HeartfillIcon = styled(Heartfill)({
    height: '24px',
})
export type Props = {
    variant: 'recipeSaved' | 'recipeCopied' | 'ingredientsCopied' | 'subscribed'
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
const Toast = ({variant = 'subscribed', ...rest}: Props) => {

    if(variant === 'subscribed') {
        return (
            <StyledToast {...rest}>
                <NewsletterIcon />
                Du har prenumererat
            </StyledToast>
        )
    }
    if(variant === 'ingredientsCopied') {
        return (
            <StyledToast {...rest}>
                <CopyIcon />
                Ingredienser kopierats
            </StyledToast>
        )
    }
    if(variant === 'recipeCopied') {
        return (
            <StyledToast {...rest}>
                <ShareIcon />
                Receptlänk kopieras
            </StyledToast>
        )
    }
    if(variant === 'recipeSaved') {
        return (
            <StyledToast {...rest}>
                <HeartfillIcon />
                Recept sparat
            </StyledToast>
        )
    }
}

export default Toast
