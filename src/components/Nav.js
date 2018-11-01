import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background: grey;
    width: 100vw;
`

const LinkWrap = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center; 
`


const Nav = props => {
    return (
        <NavBar>
            <h1>Logo</h1>
            <LinkWrap>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/add'>Add</NavLink>
            </LinkWrap>
        </NavBar>
    )
}

export default Nav;