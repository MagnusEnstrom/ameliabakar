import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react'

const InvisibleLink = styled(Link)({
    width: 'max-content',
    padding: '0px',
    margin: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    backgroundColor: 'inherit',
    textDecoration: 'none',
});

export default InvisibleLink
