import styled from '@emotion/styled';
import React from 'react';

const StyledAvatar = styled.img({
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectPosition: '0px -15px',
    objectFit: 'cover',

})

const Avatar = ({...rest}: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
  return <StyledAvatar {...rest} src={'/img/amelia.png'} />;
};

export default Avatar;
