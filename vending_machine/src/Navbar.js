import React, { Component } from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

class Navbar extends Component {
    render(){
        return (
        <nav className = "Navbar">
            <NavLink exact to = "/" className="NavLink" activeClassName = "activeStyle" > Vending </NavLink>
            <NavLink exact to = "/coke" className="NavLink" activeClassName = "activeStyle" > Coke </NavLink>
            <NavLink exact to = "/prout" className="NavLink" activeClassName = "activeStyle" > Prout </NavLink>
        </nav>
        )
    }
}

export default Navbar