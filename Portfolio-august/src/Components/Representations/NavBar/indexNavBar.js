import React from 'react';
import logo from '../../Images/Logo-blanc.png';
import './indexNavBar.css';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { ExternalLink } from 'react-external-link';

const Navbar = ({ toggle }) => {
    return (
        <div className="Nav">
            <div className="NavbarContainer">
                <div className="NavLogo" to="/" onClick={() => scroll.scrollToTop()}> <LinkRouter to="/"><img src={logo} alt="logo" /> </LinkRouter></div>
                <div className="mobileIcon">
                    <FaBars className="burger" onClick={function () {
                        toggle();
                        scroll.scrollToTop()
                        toggle();
                    }
                    } />
                </div>
                <div className="NavMenu">
                    <div className="NavItems">
                        <LinkScroll to="about" className="NavLinks" spy={true} smooth={true} offset={50} duration={1500}><span className="Number">1. </span> About</LinkScroll>
                        <LinkScroll to="projects" className="NavLinks" spy={true} smooth={true} offset={50} duration={1500}><span className="Number" spy={true} smooth={true} offset={50} duration={1500}>2.</span> Projects</LinkScroll>
                        {/* <LinkScroll to="making-of" className="NavLinks"><span className="Number">4.</span> Credits</LinkScroll> */}
                        <LinkScroll to="contact" className="NavLinks" spy={true} smooth={true} offset={50} duration={1500}><span className="Number" spy={true} smooth={true} offset={50} duration={1500}>3.</span> Contact</LinkScroll>
                        <ExternalLink href="https://adatechschool.fr/entreprise/" className="NavLinks" target="_blank" rel="noopener noreferrer"><span className="Number">4.</span> Ada Tech School</ExternalLink>

                    </div>
                </div>
                <div className="ResumeContainer">
                    <a href="/CV/CV_Romain_Basly_Août_2022.pdf" download><button className="DownloadResume">Resumé</button></a>
                </div>
            </div>
        </div>

    );
};

export default Navbar;