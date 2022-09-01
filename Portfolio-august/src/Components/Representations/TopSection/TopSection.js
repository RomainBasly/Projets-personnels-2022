import React from 'react';
import styled from "styled-components";
import { Link as LinkScroll } from 'react-scroll';



const Container = styled.div`
  top: 0;
  left: 0;
  background-color: #0a1128;
  display: flex;
  flex-direction: column;
  z-index: 9;
  padding : 13% 10% 10% 12%;

  @media screen and (max-width: 1000px) {
    padding: 25% 15%;
}
  @media screen and (max-width: 820px) {
    padding: 25% 15%;
}
  @media screen and (max-width: 540px) {
    padding: 35% 13%;
}
  @media screen and (max-width: 360px) {
    padding: 35% 13%;
}
  @media screen and (max-width: 290px) {
    padding: 35% 13%;
}

// iPhone XR
@media only screen 
    and (device-width : 414px) 
    and (device-height : 896px) {
      padding: 35% 20% 35% 15%;
    }

// Samsung Galaxy S20
@media only screen 
    and (device-width : 412px) 
    and (device-height : 915px) {
      padding: 35% 20% 40% 15%;
    }

// iPad
@media only screen 
    and (device-width : 820px) 
    and (device-height : 1180px) {
      padding: 25% 20% 20% 10%;
    }
`;

const Greetings = styled.p`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 500;
  font-family : 'EB Garamond';
  line-height : 1;
  color : #FF5C39;

  @media screen and (max-width: 1000px) {
    font-size: 1.3rem;
    max-width : 100%;
}
  @media screen and (max-width: 820px) {
    font-size: 1.3rem;
    max-width : 100%;
}
  @media screen and (max-width: 540px) {
    font-size: 1rem;
    max-width : 100%;
}
`;

const Name = styled.h4`
  margin: 0;
  color: #ced4da;
  font-weight: 700;
  font-size: 4rem;
  font-family : 'Cairo';

  @media screen and (max-width: 820px) {
    font-size: 3rem;
    max-width : 100%;
}
  @media screen and (max-width: 540px) {
    font-size: 2.2rem;
    max-width : 100%;
}
  @media screen and (max-width: 360px) {
    font-size: 1.7rem;
    max-width : 100%;
}
  @media screen and (max-width: 290px) {
    font-size: 1.5rem;
    max-width : 100%;
}
`;

const Description = styled.p`
  margin: 0;
  color: #8892B0;
  font-size: 2rem;
  font-weight: 800;
  margin-right : 20%;
  padding-top: 5px;
  line-height: 1.3;
  font-family : 'Cairo';

  @media screen and (max-width: 1600px) {
    font-size: 2rem;
    margin-right : 0%;

  @media screen and (max-width: 1200px) {
    font-size: 1.9rem;
    margin-right : 0%;

  @media screen and (max-width: 820px) {
    font-size: 1.9rem;
    margin-right : 0%;
}
  @media screen and (max-width: 540px) {
    font-size: 1.5rem;
    margin-right : 0%;
}
  @media screen and (max-width: 360px) {
    font-size: 1.2rem;
    margin-right : 0%;
}
  @media screen and (max-width: 290px) {
    font-size: 1rem;
    margin-right : 0%;
}
`;

const Goal = styled.p`
  color: #8892B0;
  font-size: 1.2rem;
  font-weight: 400;
  margin-right : 15%;
  font-family: 'Mukta';
  line-height: 1.3;
  padding-top:9px;

  @media screen and (max-width: 1200px) {
    font-size: 1.2rem;
    margin-right : 0%;

  @media screen and (max-width: 820px) {
    font-size: 1.2rem;
    margin-right : 0%;
}
  @media screen and (max-width: 540px) {
    font-size: 1rem;
    margin-right : 0%;
}
  @media screen and (max-width: 360px) {
    font-size: 1rem;
    margin-right : 0%;
}
  @media screen and (max-width: 290px) {
    font-size: 0.8rem;
    margin-right : 0%;
}
`;

const ShowMe = styled.button`
    color : #FF5C39;
    border: 1px solid #FF5C39;
    background-color : #0a1128;
    width : 250px;
    padding: 10px 15px;
    margin-top: 10px;
    font-family: 'EB Garamond';
    font-size: 1.3rem;
    border-radius:3px;

    &:hover {
        transition : all 0.8s ease-in-out;
        color : #0a1128;
        background-color:#FF5C39;
    }

    @media screen and (max-width: 820px) {
        font-size:1.2rem;
        width: 250px;
    }
      @media screen and (max-width: 540px) {
        width: 250px;
    }
      @media screen and (max-width: 360px) {
        width: 200px;
        padding: 10px 13px;
        font-size:1rem;
    }
      @media screen and (max-width: 290px) {
        width: 180px;
        font-size: 1rem;
    }
`

const Resumé = styled.button`
    color : #FF5C39;
    border: 1px solid #0a1128;
    background-color : #FF5C39;
    width : 250px;
    padding: 10px 15px;
    margin-top: 30px;
    font-family: 'EB Garamond';
    font-size: 1.3rem;
    border-radius:3px;
    color : #0a1128;

    &:hover {
        transition : all 0.8s ease-in-out;
        color : #FF5C39;
        background-color:#0a1128;
        border : 1px solid #FF5C39;
    }

    @media screen and (min-width : 820px) {
        display : none;
    }

    @media screen and (max-width: 820px) {
        font-size:1.2rem;
        width: 250px;
    }
      @media screen and (max-width: 540px) {
        width: 250px;
    }
      @media screen and (max-width: 360px) {
        width: 200px;
        padding: 10px 13px;
        font-size:1rem;
    }
      @media screen and (max-width: 290px) {
        width: 180px;
        font-size: 1rem;
    }
`

export function TopSection() {
  return (
    <Container>
      <Greetings>Hi there! My name is</Greetings>
      <Name>Romain BASLY.</Name>
      <Description>I'm learning at Ada Tech School to become a fullstack developer.</Description>
      <Goal>I'm looking for an apprenticeship starting end of October 2022 (4 days at work, 1 day at school).</Goal>
      <LinkScroll to="projects" spy={true} smooth={true} offset={50} duration={1500}><ShowMe>Show me some projects</ShowMe></LinkScroll>
      <a href="/CV/CV_Romain_Basly_Août_2022.pdf" download><Resumé>Download my resumé</Resumé> </a>
    </Container>
  )
}

export default TopSection;