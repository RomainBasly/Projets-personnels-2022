import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { TbArrowUpRightCircle } from "react-icons/tb";
import { ExternalLink } from 'react-external-link';
import styled from 'styled-components';

const PlayLink = styled(TbArrowUpRightCircle)`
    text-decoration :none;
    color : white;
    font-size : 1.5rem;

    &:hover {
        transition : all 0.5s ease-in-out;
        color : #0a1128;
    }
`

const GithubLink = styled(FaGithub)`
    text-decoration :none;
    color : white;
    // align-items: center;
    font-size : 1.5rem;

    &:hover {
        transition : all 0.5s ease-in-out;
        color : #0a1128;
    }
`

const CardProject = styled.div`
    height : 450px;
    border : 1px solid #FF5C39;
    text-align : center;
    border-radius : 10px;
    font-family : 'Dosis';
    font-weight : 200;
    margin : 10px 10px 10px 10px;
    background-color : #0a1128;

    // opacity : 0.7;

    &:hover {
        transition : all 0.5s ease-in-out;
        background-color : #FF5C39;
        opacity : 0.8;
    }

    @media screen and (max-width : 550px) {
        height : 375px;
    }
`

const ProjectTitle = styled.h3`
    color : white;
`

const Img = styled.img`
    width : 70%;
    z-index: 19;
    max-height : 37%;

    @media screen and (min-width : 1800px) {
        width : 330px;
    }
`

const ProjectDescription = styled.div`
    display : grid;
    grid-template-columns : 1fr 4fr 1fr;
    align-items : center;
`

const External = styled(ExternalLink)`
    align-items : center;
`

const List = styled.ul`
    display : block;
    gap: 0px 10px;
    padding: 0px;
    margin-left : 5%;
    overflow: hidden;
    list-style: none;
`

const ProjectDetails = styled.li`
    position : relative;
    margin-bottom: 10px;
    padding-left: 20px;

    &:before {
        content: "◌";
        position: absolute;
        left: 0px;
        // top : 3px;
        color : #FF5C39;
        font-size : 1rem;

        @media screen and (max-width : 550px) {
            font-size : 0.8rem;
        }
    }  

    @media screen and (max-width : 550px) {
        font-size : 0.8rem;
    }
`

const Card = ({ data }) => {
    return (
        data.projects.map(item =>
            <CardProject key={item.id}>
                <ProjectTitle>{item.title}</ProjectTitle>
                <Img src={item.urlGif}
                    alt={item.alt}></Img>
                <ProjectDescription>
                    <External href={item.urlGithub}> {item.urlGithub !== '' && <GithubLink />} </External>
                    <List>
                        <ProjectDetails>Starting Date: {item.StartingDate}</ProjectDetails>
                        <ProjectDetails>Duration: {item.Duration}</ProjectDetails>
                        <ProjectDetails>Number of people: {item.NumberOfPeople}</ProjectDetails>
                        <ProjectDetails>Stack: {item.Stacks}</ProjectDetails>
                        <ProjectDetails>Description: {item.Description}</ProjectDetails>
                    </List>
                    {item.AdditionalLink !== '' && <External href={item.AdditionalLink}> <PlayLink /> </External>}
                </ProjectDescription>
            </CardProject>
        )
    )
}

export default Card;