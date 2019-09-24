import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = (props) => {
    
    return (
        <nav className="navbar red accent-3">
            <div className="container">  
                <Link to="/" className="brand-logo"><i className={props.icon}></i> {props.title} </Link>
                <ul className="right">
                    <li><Link to="/" className="">Home</Link></li>
                    <li><Link to="/about" className="">About</Link></li>
                    <li><Link to="/contact" className="">Contact</Link></li>
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
