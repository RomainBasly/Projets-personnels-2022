import React from 'react';
import styled from 'styled-components';
import Card from './Card.js'

const Container = styled.div`
    display : block;
    color : white;
    background-color: #0a1128;
    padding : 15% 10% 10% 10%;

  @media screen and (max-width: 820px) {
    padding: 30% 15%;
}
  @media screen and (max-width: 540px) {
    padding: 40% 13%;
}
  @media screen and (max-width: 360px) {
    padding: 40% 13%;
}
  @media screen and (max-width: 290px) {
    padding: 40% 13%;
}

@media only screen 
    and (device-width : 820px) 
    and (device-height : 1180px) {
      padding: 7% 20% 20% 10%;
    } 
`

const Section = styled.section`
    display : flex;
    flex-wrap: wrap;

    @media screen and (max-width : 870px) {
        justify-content : center;
    }
`

const CardsContainer = styled.div`
    color : white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content : space-between;

    @media screen and (max-width : 1300px) {
        grid-template-columns: 1fr 1fr;
        justify-content : center;
    }
    @media screen and (max-width : 870px) {
        grid-template-columns: 1fr;
        justify-content : center;
    }

`

const Title = styled.h2`
    font-family: 'Cairo';
    color: white;
    margin-block-start: 0;
    margin-block-end: 0;
    color: #8892B0;
    padding: 10px 0 20px;
`

const CardsList = ({ data }) => {
    return (
        <Container id="projects">
            <Title><span style={{ color: "#FF5C39", fontWeight: "400" }}>2. </span>Projects</Title>
            <Section>
                <CardsContainer>
                    <Card data={data} />
                </CardsContainer>
            </Section>
        </Container >)

}

export default CardsList;