import {React, useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Header.scss";
import { useInView } from "react-intersection-observer";



const Header = () => {

  // Use object destructuring, so you don't need to remember the exact order

  const { ref: navigationRef, inView: isElementVisible , entry} = useInView();
    const [isInView, setIsInView] = useState(false);
  // const { ref: rocketRef, inView: isElementVisible , entry} = useInView();

  const isIntersecting = entry ? entry.isIntersecting : false;
  if (isInView !== isIntersecting) {
    setIsInView(isIntersecting);
  }

 
  return (
    <>
    <nav id='#nav' ref={navigationRef} className={isInView ? "" : "scrolled"}>
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