import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';

export const SidebarContainer = styled.aside`
    position: absolute;
    z-index:999;
    width: 100%;
    background-color: #0a1128;
    display : grid;
    align-items : center;
    top : 0;
    left: 0;
    opacity : ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    flex-direction : flex-start;
    transition: 1s ease-in-out;

    @media screen and (max-width : 820px) {
        padding-top: 10%;
    }

    @media screen and (max-width : 580px) {
        padding-top: 15%;
    }

    @media screen and (max-width : 480px) {
        padding-top: 10%;
    }
`

export const CloseIcon = styled(FaTimes)`
    color : #FF5C39;
    position: absolute;
    right : 10%;
    top: 10%;
`

export const Icon = styled.div`
    position : relative;
    background: transparent;
    font-size : 2rem;
    cursor : pointer;
    outline : none; 
`;

export const SidebarWrapper = styled.div`
    color : #d9d9d9;
`;

export const SidebarMenu = styled.ul`
    display : grid;
    grid-template-columns : 1fr;
    grid-template-rows : repeat(5, 100px);
    justify-content : center;
    padding-inline-start : unset;
    padding-top: 15px;

    @media screen and (max-width : 480px) {
        margin-top: 10%;
        grid-template-rows : repeat(6, 90px);
    }
    @media screen and (max-width : 580px) {
        grid-template-rows : repeat(6, 90px);
    }
`

export const SidebarLink = styled(LinkScroll)`
    display : flex;
    align-items:center;
    justify-content : center;
    font-size: 1.2rem;
    list-style: none;
    text-decoration: none;
    color : #fff;
    font-family:'Cairo';

    &:hover {
        transition : all 0.8s ease-in-out;
        color : #FF5C39;
        cursor: pointer;
    }
`;
export const External = styled(ExternalLink)`
    display : flex;
    align-items:center;
    justify-content : center;
    font-size: 1.2rem;
    list-style: none;
    text-decoration: none;
    color : #fff;
    font-family:'Cairo';

    &:hover {
        transition : all 0.8s ease-in-out;
        color : #FF5C39;
        cursor: pointer;
    }
`;

export const SideBtnWrap = styled.div`
    display : flex;
    justify-content : center;
`;

export const SidebarRoute = styled(LinkRouter)`
    border-radius : 50px;
    background: #01bf71;
    white-space : nowrap;
    padding : 16px 64px;
    color : #010606;
    font-size : 16px;
    outline : none;
    cursor : pointer;
    border : none;
    transition : all 0.2s ease-in-out;
    text-decoration : none;
    font-family : 'Cairo';

    &:hover {
        transition : all 0.5s ease-in-out;
        color : #FF5C39;
    }
`



