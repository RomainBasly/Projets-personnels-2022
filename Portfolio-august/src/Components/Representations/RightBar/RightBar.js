import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: block;
    wrap-up:wrap;
    position: fixed;
    right:5%;
    bottom:0;
    z-index:998;
    font-size: 1rem;
    cursor:pointer;

    @media screen and (max-width: 820px) {
        display: none;
    }
`
const Email = styled.p`
    writing-mode: vertical-rl;
    text-orientation: mixed;
    color : white;
    font-family: 'Cairo';
    font-size: 0.8rem;

    &:hover {
        transition : all 0.5s ease-in-out;
        transform: translateY(-10px);
        color : #FF5C39;
    }
`

const Line = styled.div`
    width: 45%;
    height:25px;
    border-right : 1px solid white;
    margin-top: 10px;
`



const RightBar = () => {
    return (
        <Container>
            {/* <LinkRouter to='https://www.linkedin.com/romainbasly'><LogoLinkedIn /> </LinkRouter> */}
            <a href="mailto:romain.basly@protonmail.com" style={{ textDecoration: 'none' }}> <Email>romain.basly@protonmail.com</Email></a>
            <Line />
        </Container>

    )
}

export default RightBar;