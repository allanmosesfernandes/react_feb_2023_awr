import React from 'react';
import "./brands.scss";
import Marquee from "react-fast-marquee";
import Calvin from "../../assets/images/brands/ck.png"
import Gas from "../../assets/images/brands/gas.png";
import Kenneth from "../../assets/images/brands/kc.png";
import Diesel from "../../assets/images/brands/diesel.png";
import Tommy from "../../assets/images/brands/tommy.png";
import Chivas from "../../assets/images/brands/chivas.png";
import Smythson from "../../assets/images/brands/logo.png";
import Circle from "../../assets/images/brands/circle.svg";


const Brands = () => {
  return (
    <div className='brands__container'>
        <h4>Brand's I've    <span className='doodle'><img src={Circle} alt="circle" />worked with </span></h4>
        <Marquee gradient="false" speed="30" gradientWidth="0">

            <div className="brand__box calvin_klien">
               <img src={Calvin} alt="Calvin Klien" title='Calvin Klien Jeans'/>
            </div>

            <div className="brand__box">
                 <img src={Gas} alt="Gas Jeans" title='Gas Jeans'/>
            </div>

            <div className="brand__box">
                <img src={Kenneth} alt="Kenneth Cole"  title='Kenneth Cole New York'/>
            </div>

            <div className="brand__box">
                <img src={Diesel} alt="Diesel" title='Diesel'/>
            </div>

            <div className="brand__box">
                <img src={Tommy} alt="Tommy Jeans" title='Tommy Jeans' />
            </div>
            <div className="brand__box">
                <img src={Chivas} alt="Chivas Regal" title='Chivas Regal' />
            </div>
            <div className="brand__box">
                <img src={Smythson} alt="Smythson of Bond Street" title='Smythson of Bond Street'/>
            </div>
            <div className="brand__box calvin_klien">
               <img src={Calvin} alt="Calvin Klien" title='Calvin Klien Jeans'/>
            </div>

            <div className="brand__box">
                 <img src={Gas} alt="Gas Jeans"  title='Gas Jeans' />
            </div>

            <div className="brand__box">
                <img src={Kenneth} alt="Kenneth Cole" title='Kenneth Cole New York' />
            </div>

            <div className="brand__box">
                <img src={Diesel} alt="Diesel" title='Diesel'/>
            </div>

            <div className="brand__box">
                <img src={Tommy} alt="Tommy Jeans" title='Tommy Jeans' />
            </div>
            <div className="brand__box">
                <img src={Chivas}  alt="Chivas Regal" title='Chivas Regal' />
            </div>
            <div className="brand__box">
                <img src={Smythson} alt="Smythson of Bond Street" title='Smythson of Bond Street'/>
            </div>
        </Marquee>
    </div>
  )
}

export default Brands