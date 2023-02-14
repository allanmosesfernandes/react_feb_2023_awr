import React from 'react';
import { Outlet } from 'react-router-dom';
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
    </nav>
    
    <Outlet />
    </>
  )
}

export default Header