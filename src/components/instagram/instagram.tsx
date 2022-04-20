import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import Secondary from '../buttons/secondary/Secondary'
import WheatSmallLeft from '../../assets/wheat-decor-small-left.svg'
import WheatSmallRight from '../../assets/wheat-decor-small-right.svg'
import WheatBigLeft from '../../assets/wheat-decor-big-left.svg'
import WheatBigRight from '../../assets/wheat-decor-big-right.svg'
import InstagramIcon from '../../assets/instagram.svg'

import InvisibleLink from '../Links/InvisibleLink'
import typography from '../../lib/typography'
import colors from '../../lib/colors'

type InstagramData = {
    allInstagramContent: {
        nodes: {
            id: string
            permalink: string
            localFile: {
                childImageSharp: {
                    fixed: {
                        src: string
                    }
                }
            }
        }[]
    }
}

const InstagramGrid = styled.section({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    maxWidth: '1000px',
    margin: '0px auto',

    ['@media only screen and (min-width: 90ch)']: {
        gap: '20px',
    },
    ['@media only screen and (min-width: 170ch)']: {
        gap: '30px',
    },
})

const InstagramImage = styled.img({
    width: '100%',
    maxWidth: '300px',
    maxHeight: '300px',
})

const Wrapper = styled.div({
    display: 'grid',
    maxWidth: '1360px',

    margin: '0 auto',
    ['@media only screen and (min-width: 90ch)']: {
        padding: '0px 20px',
    },
    '@media print': {
        display: 'none',
    },
})

const LoadMoreWrapper = styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr max-content 1fr',
    alignItems: 'center',
    marginTop: '30px',
    marginBottom: '50px',
    padding: '0px 10px',

    ['@media only screen and (min-width: 90ch)']: {
        padding: '0px 20px',
        marginTop: '40px',
        marginBottom: '70px',
    },
    ['@media only screen and (min-width: 170ch)']: {
        marginTop: '60px',
        marginBottom: '100px',
    },
})

const BigLeft = styled(WheatBigLeft)({
    justifySelf: 'start',
    display: 'none',
    alignSelf: 'center',
    ['@media only screen and (min-width: 70ch)']: {
        display: 'block',
    },
})
const BigRight = styled(WheatBigRight)({
    display: 'none',
    justifySelf: 'end',
    alignSelf: 'center',
    ['@media only screen and (min-width: 70ch)']: {
        display: 'block',
    },
})
const SmallLeft = styled(WheatSmallLeft)({
    justifySelf: 'start',
    alignSelf: 'center',
    ['@media only screen and (min-width: 70ch)']: {
        display: 'none',
    },
})
const SmallRight = styled(WheatSmallRight)({
    justifySelf: 'end',
    alignSelf: 'center',
    ['@media only screen and (min-width: 70ch)']: {
        display: 'none',
    },
})

const StyledInvisibleLink = styled.a({
    width: '100%',
    padding: '0px',
    margin: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    backgroundColor: 'inherit',
    textDecoration: 'none',
})

const FollowArea = styled.div({
    marginBottom: '30px',
    display: 'grid',
    gridTemplateColumns: '30px 1fr 30px',
    padding: '0px 10px',
    maxWidth: '1000px',
    justifySelf: 'center',
    width: '100%',

    ['@media only screen and (min-width: 90ch)']: {
        padding: '0px 20px',
    },
})
const FollowMeOnInsta = styled.a({
    ...typography.badge,
    fontWeight: 700,
    fontSize: '20px',
    textAlign: 'center',
    lineHeight: '150%',
    textDecoration: 'none',
    color: colors.jet,

    ['@media (hover: hover)']: {
        '&:hover': {
            opacity: 0.5,
        },
    },

    ['@media only screen and (min-width: 90ch)']: {
        fontSize: '28px',
    },
})

const InstagramIco = styled(InstagramIcon)({
    border: 'none',
    height: '24px',
    width: '24px',
    placeSelf: 'center',
    ['@media only screen and (min-width: 90ch)']: {
        height: '32px',
        width: '32px',
    },
})

const Instagram = () => {
    const data = useStaticQuery<InstagramData>(graphql`
        {
            allInstagramContent(
                sort: { fields: [timestamp], order: DESC }
                limit: 100
            ) {
                nodes {
                    id
                    permalink
                    localFile {
                        childImageSharp {
                            fixed(width: 300, height: 300) {
                                src
                            }
                        }
                    }
                }
            }
        }
    `)

    const [amount, setAmount] = useState(9)

    const onClick = () => {
        setAmount(prev => prev + 9)
    }
    const allInstagram = data.allInstagramContent.nodes
    const instagramData = allInstagram.slice(0, amount)
    return (
        <Wrapper>
            <FollowArea>
                <InstagramIco />
                <FollowMeOnInsta
                    href="https://www.instagram.com/ameliabakar.se/"
                    target={'_blank'}
                >
                    Följ mig på instagram @ameliabakar.se
                </FollowMeOnInsta>
            </FollowArea>
            <InstagramGrid>
                {instagramData.map(node => {
                    return (
                        <StyledInvisibleLink
                            key={node.id}
                            href={node.permalink}
                        >
                            <InstagramImage
                                src={node.localFile.childImageSharp.fixed.src}
                            />
                        </StyledInvisibleLink>
                    )
                })}
            </InstagramGrid>

            {amount < allInstagram.length && (
                <LoadMoreWrapper>
                    <BigLeft />
                    <SmallLeft />
                    <Secondary
                        style={{ placeSelf: 'center' }}
                        onClick={onClick}
                    >
                        Ladda fler
                    </Secondary>
                    <SmallRight />
                    <BigRight />
                </LoadMoreWrapper>
            )}
        </Wrapper>
    )
}

export default Instagram
