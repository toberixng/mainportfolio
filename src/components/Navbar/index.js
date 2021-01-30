import React from 'react';
import { MobileIcon, Nav, NavbarContainer, NavItem, NavLogo, NavMenu } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Tobyfatumo</NavLogo>
                    <MobileIcon>
                        {/* <FaBars /> */}
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            {/* <NavLinks to="about"></NavLinks> */}
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar