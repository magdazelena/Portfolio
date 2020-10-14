import React, { useState } from 'react';

function Header(props) {
  const [open, setOpen] = useState(false)
  const toggleNav = () => {
    setOpen(!open);
    props.setNavStatus(!open);
  }
  return (<header className="header">
    <div className="logo">M/Ż</div>
    <div className={`menuToggler ${open ? 'nav-open' : 'nav-closed'}`} onClick={toggleNav}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav className={open ? 'nav-open' : 'nav-closed'} >
      <ul>
        <li>
          Work
        </li>
        <li>
          About
        </li>
        <li>
          Contact
        </li>
      </ul>
    </nav>
  </header>)
}
export default Header;