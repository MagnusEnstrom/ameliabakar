import styled from '@emotion/styled'
import React from 'react'
import typography from '../../lib/typography'
import Primary from '../buttons/primary/Primary'
import InvisibleLink from '../Links/InvisibleLink'
import WheatSmallLeft from '../../assets/wheat-decor-small-left.svg'
import WheatSmallRight from '../../assets/wheat-decor-small-right.svg'
import WheatBigLeft from '../../assets/wheat-decor-big-left.svg'
import WheatBigRight from '../../assets/wheat-decor-big-right.svg'
import ArrowRight from '../../assets/big-arrow-right.svg'
import ArrowLeft from '../../assets/big-arrow-left.svg'
import P from '../typography/p/P'
import colors from '../../lib/colors'
import useGetOrders from '../../hooks/useGetOrders'
import Slider, { Settings } from 'react-slick'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const StyledRightArrow = styled(ArrowRight)({
    width: '20px',
    height: '31px',
})

const StyledInvisibleLink = styled(InvisibleLink)({
    placeSelf: 'center',
    marginBottom: '50px',
    scrollBehavior: 'smooth',
})

const StyledH1 = styled.h1({
    ...typography.h2Mobile,
    margin: '0px',
    ['@media only screen and (min-width: 70ch)']: {
        ...typography.h2,
        margin: '0px',
    },
})
const StyledH2 = styled.h2({
    ...typography.h3,
    textAlign: 'center',
    margin: '0px',
    marginBottom: '20px',
    ['@media only screen and (min-width: 70ch)']: {
        ...typography.h3,
        margin: '0px',
        marginBottom: '50px',
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

const TitleWrapper = styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr max-content 1fr',
    alignItems: 'center',
    marginBottom: '20px',

    ['@media only screen and (min-width: 70ch)']: {
        marginBottom: '40px',
    },
})

const StyledP = styled(P)({
    textAlign: 'center',
    marginBottom: '24px',
    maxWidth: '650px',
    justifySelf: 'center',
    ['@media only screen and (min-width: 90ch)']: {
        marginBottom: '30px',
    },
})

const Section = styled.section({
    display: 'grid',
    // padding: '0px 10px 0px 10px',
})

const PriceListContainer = styled.div({
    maxWidth: '630px',
    justifySelf: 'center',
    width: '100%',
})

const StyledPriceListItem = styled.li({
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: '1fr  max-content',
    rowGap: '5px',
    paddingBottom: '10px',
    borderBottom: `1px solid ${colors.grey}`,
    marginBottom: '20px',
})

const StyledH3 = styled.h3({
    ...typography.h4,
    margin: '0px',
})

const Price = styled.span({
    ...typography.h4,
    margin: '0px',
})

const ListItemDescription = styled.span({
    ...typography.p,
    margin: '0px',
    color: colors.silver,
})

const PriceList = styled.ul({
    marginBottom: '20px',
    ['@media only screen and (min-width: 90ch)']: {
        marginBottom: '40px',
    },
})

const ImagesContainer = styled.div({
    width: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    paddingBottom: '30px',

    position: 'relative',

    ['@media only screen and (min-width: 90ch)']: {
        paddingBottom: '40px',
    },

    '.gatsby-img': {
        minHeight: '220px',
        maxWidth: '100%',
        aspectRatio: '2/3',
    },
})

const ImgWrapper = styled.div({
    padding: '0px 5px',
    ['@media only screen and (min-width: 90ch)']: {
        padding: '0px 10px',
    },
    ['@media only screen and (min-width: 170ch)']: {
        padding: '0px 15px',
    },
})

const LeftArrowWrapper = styled.div({
    left: '20px',
})
const RightArrowWrapper = styled.div({
    right: '20px',
})

function NextArrow(props) {
    const { style, onClick } = props
    return (
        <RightArrowWrapper
            style={{
                display: 'block',
                position: 'absolute',

                top: '50%',
                zIndex: '1',
            }}
            onClick={onClick}
        >
            <StyledRightArrow />
        </RightArrowWrapper>
    )
}

function PrevArrow(props) {
    const { style, onClick } = props
    return (
        <LeftArrowWrapper
            style={{
                display: 'block',
                position: 'absolute',
                top: '50%',
                zIndex: '1',
            }}
            onClick={onClick}
        >
            <ArrowLeft />
        </LeftArrowWrapper>
    )
}

type Props = ReturnType<typeof useGetOrders>[0]

const Order = ({ orderAFC }: Props) => {
    const images = orderAFC.images.map(image =>
        getImage(image.localFile.childImageSharp.gatsbyImageData)
    )
    const PriceListItem = orderAFC.pricelist.map(pricelistItem => (
        <StyledPriceListItem key={pricelistItem.name}>
            <StyledH3>{pricelistItem.name}</StyledH3>
            <Price>{pricelistItem.price}kr/st</Price>
            <ListItemDescription>
                {pricelistItem.description}
            </ListItemDescription>
        </StyledPriceListItem>
    ))

    const settings: Settings = {
        dots: false,
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    }

    return (
        <Section>
            <TitleWrapper>
                <BigLeft />
                <SmallLeft />
                <StyledH1>{orderAFC.title}</StyledH1>
                <SmallRight />
                <BigRight />
            </TitleWrapper>
            <StyledP>{orderAFC.description}</StyledP>

            <ImagesContainer>
                <Slider {...settings}>
                    {images.map(image => (
                        <ImgWrapper key={image.placeholder.fallback}>
                            <GatsbyImage
                                image={image}
                                alt={' '}
                                className="gatsby-img"
                                objectFit="cover"
                            />
                        </ImgWrapper>
                    ))}
                </Slider>
            </ImagesContainer>
            {/* slick  */}
            <PriceListContainer>
                <StyledH2>{orderAFC.title} prislista</StyledH2>
                <PriceList>{PriceListItem}</PriceList>
            </PriceListContainer>
            <StyledInvisibleLink
                style={{ placeSelf: 'center', marginBottom: '50px' }}
                to={'#kontakt'}
            >
                <Primary>Kontakta mig</Primary>
            </StyledInvisibleLink>
        </Section>
    )
}

export default Order
