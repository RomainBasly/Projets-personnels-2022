import React, { useState } from 'react'
import Navbar from './NavBar/indexNavBar'
import Sidebar from './SideBar/Sidebar'

const NavBarContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </div>
    )
}

export default NavBarContainer;