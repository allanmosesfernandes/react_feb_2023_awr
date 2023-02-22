import {React, useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Header.scss";



const Header = () => {

  const [navbarChange, setNavbarChange] = useState(false);

  const changeColor = () => {
    if(window.scrollY >= 100) {
      setNavbarChange(true);
    }
    else {
      setNavbarChange(false)
    }
  }

window.addEventListener("scroll", changeColor);
 
  return (
    <>
    <nav id='#nav'  className={navbarChange ? "header-bg" : ""}>
        <div className="left">
            <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="logo">
          <Link to="/">ankan c.</Link>
            
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