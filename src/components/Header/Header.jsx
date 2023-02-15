import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Header.scss";
const Header = () => {
  return (
    <>
    <nav>
        <div className="left">
            XYZ
        </div>
        <div className="logo">
            ankan c.
        </div>
        <div className="header-right">
          <button className="button-4">BLOG</button>
          <Link>Contact</Link>
        </div>
    </nav>
    
    <Outlet />
    </>
  )
}

export default Header