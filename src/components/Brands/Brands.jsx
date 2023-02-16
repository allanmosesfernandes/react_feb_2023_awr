import React from 'react';
import "./brands.scss";
import Marquee from "react-fast-marquee";
import Calvin from "../../assets/images/brands/ck.png"
const Brands = () => {
  return (
    <div className='brands__container'>
        <h4>Brand's I've worked with </h4>
        <Marquee gradient="false" speed="50" gradientWidth="0">
            <div className="brand__box calvin_klien">
               <img src={Calvin} alt="Calvin Klien" />
            </div>
            <div className="brand__box">
                 <img src={Calvin} alt="Calvin Klien" />
            </div>
            <div className="brand__box">
                  <img src={Calvin} alt="Calvin Klien" />
            </div>
            <div className="brand__box">
                <img src={Calvin} alt="Calvin Klien" />
            </div>
            <div className="brand__box">
                <img src={Calvin} alt="Calvin Klien" />
            </div>
        </Marquee>
    </div>
  )
}

export default Brands