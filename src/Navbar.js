import React from 'react'
import "./styles.css"
import Logo from "./logo.svg"

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar--logo-holder">
      <img src={Logo} alt="logo" className="navbar--logo" />
      <p> CSS  Playground</p>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">Home</li>
      <li className="navbar--link-item">About</li>
      <li className="navbar--link-item">Blog</li>
    </ul>
  </nav>
)

export default NavBar
