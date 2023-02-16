import React from 'react';
import "./brands.scss";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className='brands__container'>
        <h4>Brand's I've worked with </h4>
        <Marquee>
            <div className="brand__box">
                Nike
            </div>
            <div className="brand__box">
                Nike
            </div>
            <div className="brand__box">
                Nike
            </div>
            <div className="brand__box">
                Nike
            </div>
            <div className="brand__box">
                Nike
            </div>
        </Marquee>
    </div>
  )
}

export default Brands