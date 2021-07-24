import React from 'react';
import {Link} from 'react-router-dom';
import About from './About';
import Home from './Home';


function NavBar() {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    )
}

export default NavBar
