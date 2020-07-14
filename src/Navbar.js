import React from 'react'
import "./navbar.css"
import Logo from "./logo.svg"

function NavBar() {
  return (
    <div className="navbar">
      <div className='navbar--header'>
        <img src={Logo} alt="logo" className='Logo'/>
        <p> CSS Playground </p>
      </div>
      <ul className='navbar--list'>
        <li>Home</li>
        <li>About</li>
        <li>Visit</li>
        <li className='dropdown'>Links
          <ul>
            <li>Links</li>
            <li>Links</li>
            <li>Links</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
