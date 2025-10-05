import React from 'react';
import { NavLink } from 'react-router';
import "./header.css"
const Header = () => {
    return (
       <header className='header'>
              <h2 className='logo'>This is header</h2>
            <nav className='nav'>
                <NavLink  to="/" className='nav-link' >Home</NavLink>
                <NavLink to="/mobiles" className='nav-link'>Mobiles</NavLink>
                <NavLink to="/laptops" className='nav-link'>laptops</NavLink>
                <NavLink to="/watch"  className='nav-link'>Watch</NavLink>
                <NavLink to="/sunglass"  className='nav-link'>Sunglass</NavLink>
                <NavLink to="/users"  className='nav-link'>Users</NavLink>
                <NavLink to="/users2"  className='nav-link'>Users2</NavLink>
                 
            </nav>

       </header>
    );
};

export default Header;