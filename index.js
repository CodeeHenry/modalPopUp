import React from 'react'
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElement';


const Navbar = () => {
    return (
        <>
        <Nav>
        <NavLogo to="/">
                <img  src="../../img/PRECEPTOR_logo.png" alt="Logo" />
            </NavLogo>
            <Bars />
            <NavMenu>
                <NavLink to='/' activeStyle> Home</NavLink>
                <NavLink to='/application' activeStyle> Application</NavLink>
                <NavLink to='/faq' activeStyles> Faq</NavLink>
                </NavMenu>
                
                <NavBtnLink   to="/registration"  > GetStarted</NavBtnLink>
                
                <NavBtn>
                <NavLink to='/login' activeStyle> Login</NavLink>
                </NavBtn>
        </Nav>
        </>
    )
}

export default Navbar
