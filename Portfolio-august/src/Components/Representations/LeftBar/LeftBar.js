import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import styled from 'styled-components';
import { ExternalLink } from 'react-external-link';


const LogoContainer = styled.div`
    wrap-up:wrap;
    position: fixed;
    left:5%;
    bottom:0;
    z-index:998;
    font-size: 1.3rem;

    @media screen and (max-width: 820px) {
        display: none;
    }
`

const LogoGithub = styled(FaGithub)`
    color : white;
    display : block;

    &:hover {
        transition : all 0.5s ease-in-out;
        transform: translateY(-10px);
        color : #FF5C39;
    }
`;

const LogoLinkedIn = styled(FaLinkedinIn)`
    color : white;
    padding-top:10px;

    &:hover {
        transition : all 0.5s ease-in-out;
        transform: translateY(-10px);
        color : #FF5C39;
    }

    @media screen and (max-width: 820px) {
            padding-top: 10px;
        }
          @media screen and (max-width: 540px) {
            padding-top: 10px;
        }
          @media screen and (max-width: 360px) {
            padding-top: 10px;
            font-size: 1rem;
        }
          @media screen and (max-width: 290px) {
            padding-top: 10px;
            font-size: 1rem;
        }
`;

const Line = styled.div`
    width: 50%;
    height:125px;
    border-right : 1px solid white;
    margin-top: 10px;

    @media screen and (max-width: 820px) {
        margin-top: 10px;
    }
      @media screen and (max-width: 540px) {
        margin-top: 10px;
    }
      @media screen and (max-width: 360px) {
        margin-top: 10px;
        font-size: 1rem;
    }
      @media screen and (max-width: 290px) {
        margin-top: 10px;
        font-size: 1rem;
    }

// iPhone XR
    @media only screen 
    and (device-width : 414px) 
    and (device-height : 896px) 
    and (-webkit-device-pixel-ratio : 2) {
        height:275px;
     }

//iPhone 12 Pro
    @media only screen 
    and (device-width : 390px) 
    and (device-height : 844px) 
    and (-webkit-device-pixel-ratio : 3) {
        height:200px;
    }

//Pixel5
@media only screen 
    and (device-width : 393px) 
    and (device-height : 851px) {
        height: 225px;
    }
//Galaxy S8
@media only screen 
    and (device-width : 360px) 
    and (device-height : 740px) {
        height: 150px;
    }

`



const LeftBar = () => {
    return (
        <LogoContainer>
            <LogoGithub />
            {/* <LinkRouter to='https://www.linkedin.com/romainbasly'><LogoLinkedIn /> </LinkRouter> */}
            <ExternalLink href='http://www.linkedin.com/in/romainbasly' target="_blank" rel="noreferrer"><LogoLinkedIn /></ExternalLink>
            <Line />
        </LogoContainer>
    )
}

export default LeftBar;