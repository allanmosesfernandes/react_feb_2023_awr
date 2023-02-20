import React from 'react';
import "./Footer.scss";
import Arrow from "../../assets/images/arrow.svg";
import { faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className=''>
        <p className="footer__hello">
            Say Hello <img src={Arrow} alt="Arrow" />
        </p>

        <div className="footer__links">
            <div className="footer__links__email">
                <a href='mailto:ankan.chittalipi@gmail.com'>
                    ankan.chittalipi@gmail.com
                </a>
            </div>
            <div className="footer__links__social">
                <div className="socials">
                    <div className='social_icon_container '>
                        <FontAwesomeIcon icon={faLinkedinIn} size="3x"/>
                    </div>
                    
                </div>
                <div className="socials">
                    <div className='social_icon_container '>
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </div>
                </div>
                <div className="socials">
                    <div className='social_icon_container '>
                        <FontAwesomeIcon icon={faTwitter} size="3x" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer