import React, { FC } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import reactSlick, { Settings } from "react-slick";
import styled from '@emotion/styled';
import colors from '../../lib/colors';

const StyledSlider = styled(reactSlick)({
})

const StyledDotsContainer = styled.div({
    width: 'max-content',
    bottom: '0px',
    right: '0px',

    li: {
        display: 'grid',
        placeItems:'center'
    }
})

const Dots = styled.div({
    boxSizing: 'border-box',
    width: "10px",
    height: "10px",
    color: "blue",
    border: `2px ${colors.white} solid`,
    borderRadius: '50%',
    'li.slick-active &': {
        backgroundColor: colors.white
    }
})

type Props = {
    customSettings?: Settings;
}

const Slider: FC<Props> = ({children, customSettings, ...rest}) => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 5000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <StyledDotsContainer
            >
              <ul style={{ display:'flex', margin: "0px", padding: '10px' }}> {dots} </ul>
            </StyledDotsContainer>
        ),
        customPaging: i => (
            <Dots />
          ),
        ...customSettings
      };
    return (
            <StyledSlider {...settings} {...rest}>
                {children}
            </StyledSlider>
    )
}

export default Slider;
