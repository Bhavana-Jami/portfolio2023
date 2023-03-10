import '../styles/Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX,faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showHamMenu, setShowHamMenu] = useState(false);
  return (
    <div >
      <div className='navbar_container' id={showLinks ? 'hidden' : ''}>
   
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/skills" >Skills</Link>
        <Link to="/resume" >Resume</Link>
      </div>
      <div className='icons'>
        <FontAwesomeIcon icon={faBars } id={showLinks ? 'hidden_menu' : ''} onClick={() => setShowLinks(!showLinks)}/>
        <FontAwesomeIcon icon={faX } id={showLinks ? '' : 'hidden_menu'}  onClick={() => setShowLinks(!showLinks)}/>
      </div>

    </div>

  )
}
