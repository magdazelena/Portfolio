import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header(props) {
  const [open, setOpen] = useState(false)
  const toggleNav = () => {
    setOpen(!open);
    props.setNavStatus(!open);
  }
  const currentTheme = useSelector(state => state.currentTheme);



  return (<header className={`header ${currentTheme}`}>
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
          <Link onClick={toggleNav} to="/work" >01   work</Link>
        </li>
        <li>
          <Link onClick={toggleNav} to="/about">02   about</Link>
        </li>
        <li>
          <Link onClick={toggleNav} to="/contact">03   contact</Link>
        </li>
      </ul>
    </nav>
  </header>)
}
export default Header;