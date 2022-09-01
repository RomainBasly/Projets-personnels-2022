import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  top: 0;
  left: 0;
  background-color: #0a1128;
  display: flex;
  flex-direction: column;
  z-index: 9;
  padding : 15% 30% 10% 30%;

  @media screen and (max-width: 1000px) {
    padding: 25% 15%;
}
  @media screen and (max-width: 820px) {
    padding: 25% 15%;
}
  @media screen and (max-width: 540px) {
    padding: 40% 13%;
    padding-bottom : 50%;
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
  text-align : center;

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

const GetInTouch = styled.h4`
  margin: 0;
  color: #ced4da;
  font-weight: 700;
  margin-block-start : 0;
  margin-block-end : 0;
  font-size: 4rem;
  font-family : 'Cairo';
  text-align : center;

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

const Paragraph = styled.p`
  color: #d9d9d9;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: 'Mukta';
  line-height: 1.3;
  text-align: center;
  margin-block-start : 0;
  margin-block-end: 0;

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

const ContactMe = styled.button`
    color : #FF5C39;
    border: 1px solid #FF5C39;
    background-color : #0a1128;
    width : 250px;
    padding: 10px 15px;
    margin-top: 30px;
    font-family: 'Mukta';
    font-size: 1.3rem;
    border-radius:3px;
    color : #FF5C39;

    &:hover {
        transition : all 0.8s ease-in-out;
        color : #0a1128;
        background-color:#FF5C39;
        border : 1px solid #FF5C39;
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

const ContactMeContainer = styled.a`
    justify-content : center;
    margin : auto auto;
`


const Contact = () => {
  return (
    <Container id="contact">
      <Greetings><span style={{ color: "#FF5C39", fontWeight: "400" }}>3. </span> What's next?</Greetings>
      <GetInTouch>Get In Touch</GetInTouch>
      <Paragraph>If you have a comment, there's an opportunity in your network, or you just want to share with me good tips : please do not hesitate to contact me!</Paragraph>
      <ContactMeContainer href="mailto:romain.basly@protonmail.com" style={{ textDecoration: 'none' }}> <ContactMe>Contact me</ContactMe> </ContactMeContainer>
    </Container>
  )
}

export default Contact;