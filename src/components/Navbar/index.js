import React from 'react';
import { Nav, NavbarContainer, NavLogo } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Tobyfatumo</NavLogo>
                    <h1></h1>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar