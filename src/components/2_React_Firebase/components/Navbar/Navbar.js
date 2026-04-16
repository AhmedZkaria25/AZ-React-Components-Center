import React from 'react'
import { Link } from 'react-router'
import styles from './navbar.module.css'


function Navbar() {
    return (
        <nav className={styles['navbar']+ ' navbar'}>
            <h2>React Firebase</h2>
            <Link to="/">Budget Tracker</Link>            
            <Link to="/phGallery">Photo Grid</Link>    
            <Link to="/account">Account</Link>
        </nav>

    )
}

export default Navbar