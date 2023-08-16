import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faWhatsapp,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

import {
  WhatsappShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from "react-share";

const SocialShare = ({ slug } ) => {
  return (
    <div className="share-buttons">
      <h3>Share this:</h3>

      <div className="footer__links__social">
        <div className="socials">
          <div className="social_icon_container ">
            <FacebookShareButton
              url={`https://ankanchittalipi.com/blog/${slug}`}
            >
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </FacebookShareButton>
          </div>
        </div>
        <div className="socials">
          <div className="social_icon_container ">
            <WhatsappShareButton
              url={`https://ankanchittalipi.com/blog/${slug}`}
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </WhatsappShareButton>
          </div>
        </div>
        <div className="socials">
          <div className="social_icon_container ">
            <LinkedinShareButton
              url={`https://ankanchittalipi.com/blog/${slug}`}
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SocialShare;
