import React from 'react'
import { Link } from 'react-router'
import './navbar.module.css'


function Navbar() {
    return (
        <nav className={'navbar'} id="nav">
            <h2>React Firebase</h2>
            <Link to="/">Budget Tracker</Link>            
            <Link to="/phGallery">Photo Grid</Link>    
            <Link to="/account">Account</Link>
        </nav>

    )
}

export default Navbar