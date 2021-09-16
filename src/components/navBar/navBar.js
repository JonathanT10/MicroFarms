import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <Bars />
            <NavMenu>
                <NavLink to='/' activeStyle>
                    Home
                </NavLink>
                <NavLink to='/about' activeStyle>
                    About
                </NavLink>
                <NavLink to='/products' activeStyle>
                    Products
                </NavLink>
                <NavLink  to='/store' activeStyle>
                    Store
                </NavLink>
                <NavLink to='/contact' activeStyle>
                    Contact
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    );
}

export default Navbar;