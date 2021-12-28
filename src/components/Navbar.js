import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar () {
    return (
        <header>
            <nav className="navStyle">
                <ul>
                    <li><NavLink to="/" className={ (navData) =>  navData.isActive ? "active" : ''}> Home </NavLink></li>
                    <li><NavLink to="/portfolio" className={ (navData) =>  navData.isActive ? "active" : ''}> Portfolio </NavLink></li>
                    <li><NavLink to="/about" className={ (navData) =>  navData.isActive ? "active" : ''}> About </NavLink></li>
                </ul>
            </nav>       
        </header>
    )
}
