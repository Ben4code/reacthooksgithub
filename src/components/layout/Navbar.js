import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = (props) => {
    
    return (
        <nav className="navbar red accent-3">
            <div className="container">  
                <NavLink to="/" className="brand-logo"><i className={props.icon}></i> {props.title} </NavLink>
                <ul className="right nav_links">
                    <li><NavLink exact to="/" className="">Home</NavLink></li>
                    <li><NavLink to="/about" className="">About</NavLink></li>
                    <li><NavLink to="/contact" className="">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

//Default props
Navbar.defaultProps = {
    title: "Hello",
    icon: "fa fa-users"
}

//Props type checking
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
