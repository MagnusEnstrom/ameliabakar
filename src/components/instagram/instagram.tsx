import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import Secondary from '../buttons/secondary/Secondary';
import WheatSmallLeft from '../../assets/wheat-decor-small-left.svg' 
import WheatSmallRight from '../../assets/wheat-decor-small-right.svg'
import WheatBigLeft from '../../assets/wheat-decor-big-left.svg' 
import WheatBigRight from '../../assets/wheat-decor-big-right.svg' 
import InvisibleLink from '../Links/InvisibleLink';

type InstagramData = {
    allInstagramContent: {
        nodes:{
            id: string;
            permalink: string;
            localFile: {
                childImageSharp: {
                    fixed: {
                        src: string;
                    }
                }
            }
        }[]
    }
};

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
    maxHeight: '300px'
})

const Wrapper = styled.div({
    display: 'grid',
    maxWidth: '1360px',

    margin: '0 auto',
    padding: '0px 10px',
    ['@media only screen and (min-width: 70ch)']: {
        padding: '0px 20px',
    },
})

const LoadMoreWrapper = styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr max-content 1fr',
    alignItems: 'center',
    marginTop: '30px',
    marginBottom: '50px',
    
    ['@media only screen and (min-width: 90ch)']: {
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
    }
})
const BigRight = styled(WheatBigRight)({
    display: 'none',
    justifySelf: 'end',
    alignSelf: 'center',
    ['@media only screen and (min-width: 70ch)']: {
        display: 'block',
    }
})
const SmallLeft = styled(WheatSmallLeft)({
    justifySelf: 'start',
    alignSelf: 'center',
    ['@media only screen and (min-width: 70ch)']: {
        display: 'none',
    }
})
const SmallRight = styled(WheatSmallRight)({
    justifySelf: 'end',
    alignSelf: 'center',
    ['@media only screen and (min-width: 70ch)']: {
        display: 'none',
    }
})

const StyledInvisibleLink = styled(InvisibleLink)({
    width: '100%',
})

const Instagram = () => {
    const data = useStaticQuery<InstagramData>(graphql`{
        allInstagramContent(sort: { fields: [timestamp] order: DESC} limit: 100) {
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
        }`)

    const [amount, setAmount] = useState(9);

    const onClick = () => {
        setAmount(prev => prev + 3);
    }
    const allInstagram = data.allInstagramContent.nodes
    const instagramData = allInstagram.slice(0, amount);
    return (
        <Wrapper>

            <InstagramGrid>
                {instagramData.map(node => {
                    return <StyledInvisibleLink key={node.id} to={node.permalink}>
                        <InstagramImage src={node.localFile.childImageSharp.fixed.src} />
                    </StyledInvisibleLink> 
                    
                })}
            </InstagramGrid>

            
            {amount < allInstagram.length && (
            <LoadMoreWrapper>
                <BigLeft />
                <SmallLeft />
                <Secondary style={{ placeSelf: 'center' }} onClick={onClick}>Ladda fler</Secondary>
                <SmallRight />
                <BigRight />
            </LoadMoreWrapper>
            )}

        </Wrapper>
    );
};

export default Instagram;
