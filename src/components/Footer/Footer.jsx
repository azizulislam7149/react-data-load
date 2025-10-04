import React from 'react';
import './footer.css'
import { NavLink } from 'react-router';
const Footer = () => {
    return (
        <div>
            <p>
                <small>Thank you for visiting my website</small>
                <NavLink to="/terms">Terms</NavLink> 
                <NavLink to="/privacy">Privacy</NavLink> 
                <NavLink to="/condition">Condition</NavLink> 
                <NavLink to="/fb">Facebook</NavLink> 
                <NavLink to="/yt">Youtube</NavLink> 
                
                
              
             
            </p>
        </div>
    );
};

export default Footer;