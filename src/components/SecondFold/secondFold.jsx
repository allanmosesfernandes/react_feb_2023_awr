import { React, useState } from "react";
import "./second-fold.scss";
import Arrow from "../../assets/images/arrow.svg";
import ArrowBlack from "../../assets/images/arrowBlack.svg";
import ArrowPink from "../../assets/images/arrowPink.svg";

import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";

const SecondFold = () => {
  return (
    <div className="wrapper second__fold" id="second__container">
      <h4>What I do</h4>
      <div className="attribute__card__container">
        <FadeIn>
          <div className="attribute__card__black">
            <div className="attribute__card__details">
              <div className="details__left">
                {/* <strong>Lorem ipsum dolor  </strong>
                            <p>Lorem Ipsum</p> */}
              </div>
              <div className="details__right">
                <div className="status__div"></div>
              </div>
            </div>
            <h4 className="attribute__post">Fashion Merchandiser</h4>
            <img src={Arrow} alt="Arrow" className="what_arrow" />

            <Link to="about">
              <button className="button-50">Learn More</button>
            </Link>
          </div>
        </FadeIn>
        <div className="attribute__card__white">
          <div className="attribute__card__details">
            <div className="details__left">
              {/* <strong>Lorem ipsum dolor  </strong>
                        <p>Lorem Ipsum</p> */}
            </div>
            <div className="details__right">
              <div className="status__div"></div>
            </div>
          </div>
          <h4 className="attribute__post">
            Trend <br />
            Forecaster
          </h4>
          <img src={ArrowBlack} alt="Arrow" className="what_arrow" />

          <Link to="blog">
            <button className="button-50">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondFold;
