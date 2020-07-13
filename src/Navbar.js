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
        <li className='navbar--list-item'>Home</li>
        <li className='navbar--list-item'>About</li>
        <li className='navbar--list-item'>Visit</li>
        <li className='dropdown'>
          <a className='navbar--list-item'>Links</a>
          <ul className='dropdown-menu'>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
