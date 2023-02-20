import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Header.scss";
const Header = () => {
  return (
    <>
    <nav id='#nav'>
        <div className="left">
            <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="logo">
          <Link to="/"></Link>
            ankan c.
        </div>
        <div className="header-right">
          <button className="button-4">BLOG</button>
          <Link className='hide_on_mobile'>Contact</Link>
        </div>
    </nav>
    
    <Outlet />
    </>
  )
}

export default Header