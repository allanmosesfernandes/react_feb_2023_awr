import { React, useEffect } from "react";
import "./Footer.scss";
import Arrow from "../../assets/images/arrow.svg";
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link, useLocation } from "react-router-dom";
import AF from "../../assets/images/sale.png";
import Circle from "../../assets/images/3.svg";
import Top from "../../assets/images/top.svg";

const Footer = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const goToTopHandler = () => {
    window.scrollTo(0, 0);
  };

  let currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="go-top-container" onClick={goToTopHandler}>
        <div className="arrow_div">
          <img src={Top} alt="Top Arrow" />
        </div>
      </div>

      <p className="footer__hello">
        Say Hello <img src={Arrow} alt="Arrow" />
      </p>

      <div className="footer__links">
        <div className="footer__links__hyperlinks">
          <Link to="/" className="hyperlink">
            Home
          </Link>
          <Link to="about" className="hyperlink">
            About
          </Link>
          <Link to="blog" className="hyperlink">
            Blog
          </Link>
        </div>
        <div className="footer__links__social">
          <div className="socials">
            <div className="social_icon_container ">
              <Link to="https://www.linkedin.com/in/ankanchittalipi/">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </Link>
            </div>
          </div>
          <div className="socials">
            <div className="social_icon_container ">
              <Link to="https://www.instagram.com/thecommonthread2702/?hl=en">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Link>
            </div>
          </div>
          <div className="socials">
            <div className="social_icon_container ">
              <Link to="mailto:ankan.chittalipi@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="terms__conditions">
        <div className="created_by">
          <Link to="https://allanfernandes.dev/">
            In collaboration with <img src={AF} alt="" className="initials" />
          </Link>
        </div>
        <p className="terms">© {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
