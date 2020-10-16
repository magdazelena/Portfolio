import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Header(props) {
  const [open, setOpen] = useState(false)
  const toggleNav = () => {
    setOpen(!open);
    props.setNavStatus(!open);
  }
  return (<header className="header">
    <div className="logo">
      <Link to="/">M/Ż</Link>
    </div>
    <div className={`menuToggler ${open ? 'nav-open' : 'nav-closed'}`} onClick={toggleNav}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav className={open ? 'nav-open' : 'nav-closed'} >
      <ul>
        <li>
          <Link onClick={toggleNav} to="/work" >work</Link>
        </li>
        <li>
          <Link onClick={toggleNav} to="/about">about</Link>
        </li>
        <li>
          <Link onClick={toggleNav} to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  </header>)
}
export default Header;