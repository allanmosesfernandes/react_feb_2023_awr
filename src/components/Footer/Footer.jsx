import React from 'react';
import "./Footer.scss";
import Arrow from "../../assets/images/arrow.svg";
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className=''>
        <p className="footer__hello">
            Say Hello <img src={Arrow} alt="Arrow" />
        </p>

        <div className="footer__links">
            <div className="footer__links__hyperlinks">
                <Link className='hyperlink'>Home</Link>
                <Link className='hyperlink'>About</Link>
                <Link className='hyperlink'>Blog</Link>
            </div>
            <div className="footer__links__social">
                <div className="socials">
                    <div className='social_icon_container '>
                        <Link to="https://www.linkedin.com/in/ankanchittalipi/">
                            <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
                        </Link>
                       
                    </div>
                    
                </div>
                <div className="socials">
                    <div className='social_icon_container '>
                        <Link to="https://www.instagram.com/thecommonthread2702/?hl=en">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </Link>
                    </div>
                </div>
                <div className="socials">
                    <div className='social_icon_container '>
                        <Link to="mailto:ankan.chittalipi@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer