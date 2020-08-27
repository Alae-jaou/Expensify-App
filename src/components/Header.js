import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1> Expensif </h1>
         <NavLink to='./' activeClassName='is-active' exact  > Dashboard </NavLink> 
         <NavLink to='./client' activeClassName='is-active' > go to the client page </NavLink> 
         <NavLink to='./edit' activeClassName='is-active'> go to the edit page </NavLink>
         <NavLink to='./help' activeClassName='is-active'> go to the help page </NavLink> 
    </header>
);

export default Header;