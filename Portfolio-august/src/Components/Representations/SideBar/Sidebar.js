import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarMenu, External } from './SidebarElement';


function Sidebar({ isOpen, toggle }) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" spy={true} smooth={true} offset={50} duration={1500}>About</SidebarLink>
                    <SidebarLink to="projects" spy={true} smooth={true} offset={50} duration={1500}>Projects</SidebarLink>
                    <SidebarLink to="contact" spy={true} smooth={true} offset={50} duration={1500}>Contact</SidebarLink>
                    <External href="https://adatechschool.fr/entreprise/" target="_blank" rel="noopener noreferrer">Ada Tech School</External>
                    {/* <SidebarLink to="/">Making of</SidebarLink> */}
                </SidebarMenu>
                <SideBtnWrap>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;