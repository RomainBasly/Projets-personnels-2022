import React from 'react';
import { ExternalLink } from 'react-external-link';
import styled from "styled-components";
import Image from '../../Images/1661357593069.jpeg';



const Container = styled.div`
    background-color: #0a1128;
    padding : 14% 20%;

  @media screen and (max-width: 820px) {
    padding: 30% 15%;
}
  @media screen and (max-width: 540px) {
    padding: 40% 15%;
}
  @media screen and (max-width: 360px) {
    padding: 40% 15%;
}
  @media screen and (max-width: 290px) {
    padding: 40% 15%;
}

@media only screen 
    and (device-width : 820px) 
    and (device-height : 1180px) {
      padding: 7% 20% 20% 10%;

    }

`

const Section = styled.section`
    background-color: #0a1128;
    color : white;
    display : flex;
    position : relative;

    @media screen and (max-width : 760px) {
        display : inline-block;
    }
`

const Title = styled.h2`
    font-family : 'Cairo';
    color : white;
    margin-block-start : 0;
    margin-block-end : 0;
    color: #d9d9d9;
    padding : 10px 0 20px;
`

const ImageContainer = styled.div`
    width : 30%;
    // height: 60%;
    margin-right : auto;
    margin-top: auto;
    z-index: 20;

    position: relative;

    @media screen and (max-width : 760px) {
        position : absolute;
        left : 35%;
    }
`

const PresentationText = styled.div`
    width : 100%;
    height: 100%;
    font-family : 'Cairo';
    line-height : 1.3;
    font-size : 1.2rem;
    color: #d9d9d9;
    font-family : 'Mukta';

    @media screen and (max-width : 760px) {
        padding: 2px 0 2px O;
        margin : 0 0;
    }

`
const Paragraph = styled.p`
    margin-right : 5%;

    @media screen and (max-width : 1200px) {
        font-size : 1rem;
    }
`

const Photo = styled.img`
    max-width : 100%;
    max-height : 100%;
    z-index: 20;
`

const Cadre = styled.div`
    width : 100%;
    height : 100%;
    border : 1px solid #FF5C39;
    position : absolute;
    top: 10px;
    left : 10px;
    z-index: -1;
`

const SkillsList = styled.ul`
    font-size : 1rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    padding: 0px;
    margin-left : 5%;
    overflow: hidden;
    list-style: none;
`;

const Skills = styled.li`
    // margin : 2px 2px 2px 2px;
    position : relative;
    margin-bottom: 10px;
    padding-left: 20px;

    &:before {
        content: "▹";
        position: absolute;
        left: 0px;
        color : #FF5C39;
    }  
`

const About = () => {
    return (
        <Container id="about">
            <Title><span style={{ color: "#FF5C39", fontWeight: "400" }}>1. </span> About me</Title>
            <Section>
                <PresentationText>
                    <Paragraph>After 6 years working in a role similar to Product Manager, I have decided to retrain to become web-developer.</Paragraph>
                    <Paragraph>To give me the best possible odds, I have chosen the program of
                        <ExternalLink href="https://adatechschool.fr/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#FF5C39", cursor: "pointer" }}> Ada Tech School </ExternalLink>
                        with 9 months to learn the fundamentals of computer science and with 1 year as apprentice <span style={{ color: "#FF5C39" }}>starting end-october 2022</span> (4 days at work, 1 day at school).</Paragraph>
                    <Paragraph>Here are the stacks I have been recently working with : </Paragraph>
                    <SkillsList>
                        <Skills>HTML & CSS</Skills>
                        <Skills>Javascript</Skills>
                        <Skills>React.JS</Skills>
                        <Skills>Node.JS</Skills>
                        <Skills>(Typescript - beginning of September)</Skills>
                        <Skills>(React Native - beginning of September)</Skills>
                        <Skills>(Solidity - September)</Skills>
                    </SkillsList>
                    <Paragraph>I am fundamentally a <span style={{ color: "#FF5C39" }}>team player</span>, a <span style={{ color: "#FF5C39" }}>curious </span> person and a <span style={{ color: "#FF5C39" }}>hard worker</span>.</Paragraph>
                    <Paragraph>I have one belief deeply anchored: each individual is a <span style={{ color: "#FF5C39" }}>unlimited potential </span> and with the proper mindset, nothing is impossible to achieve.</Paragraph>
                    <Paragraph>I am thus looking for the right environment to grow : a team with a family spirit, helpful and with a caring attitude.</Paragraph>
                    <Paragraph>If your company is recruiting apprenticeships or you think my profile would fit into your company's culture, please do not hesitate to contact me!</Paragraph>
                </PresentationText>
                <ImageContainer>
                    <Cadre />
                    <Photo src={Image} />
                </ImageContainer>
            </Section>
        </Container>
    )
}

export default About;