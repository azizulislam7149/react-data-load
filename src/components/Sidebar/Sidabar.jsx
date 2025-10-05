import React from 'react';
import { NavLink } from 'react-router';

const Sidabar = () => {
    return (
        <aside>
            <nav>
                <NavLink to ="/visit">Visit</NavLink>
               
                <p>Contact Us</p>
                <p>About</p>
                <p>Portfolio</p>
                <p>Gallery</p>
                <p>History</p>
                 <NavLink to ="/blogs" className='nav-link'>Blogs</NavLink>
                <p>Information</p>
                <p>Idea</p>
                <p>Goal</p>
                <p>Topics</p>
                <p>Index</p>
                <p>Apendix</p>
            </nav>
        </aside>
    );
};

export default Sidabar;