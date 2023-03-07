import {React, useState, useEffect} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Header.scss";



const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [navbarChange, setNavbarChange] = useState(false);

  const changeColor = () => {
    if(window.scrollY >= 90) {
      setNavbarChange(true);
    }
    else {
      setNavbarChange(false)
    }
  }
  
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

window.addEventListener("scroll", changeColor);
 
  return (
    <>
    <nav id='#nav'  className={navbarChange ? "header-bg" : ""}>

        <div className="logo" onClick={scrollToTop}>
          <Link to="/">Ankan Chittalipi</Link>
        </div>
        <div className="header-right">
          <Link className='' to="about">About</Link>
           <Link className='' to="blog">
            <button className="button-4">BLOG</button></Link> 
        </div>
    </nav>
    
    <Outlet />
    </>
  )
}

export default Header