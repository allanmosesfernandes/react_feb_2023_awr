import {React, useState} from 'react';
import "./second-fold.scss";
import Arrow from "../../assets/images/arrow.svg";
import { Link } from 'react-router-dom';


const SecondFold = () => {

  return (
    <div className='wrapper second__fold' id='second__container'>
        <h4>What I do</h4>
        <div className="attribute__card__container">
            <div className="attribute__card__black">
                <div className="attribute__card__details">
                    <div className="details__left">
                        {/* <strong>Lorem ipsum dolor  </strong>
                        <p>Lorem Ipsum</p> */}
                    </div>
                    <div className="details__right">
                        <div className="status__div">

                        </div>
                    </div>
                </div>
                <h4 className="attribute__post">Fashion Merchandiser</h4>
                <img src={Arrow} alt="Arrow" className='what_arrow'/>
                
                <Link to="about"><button className="button-50">Learn More</button></Link>
                

            </div>
            <div className="attribute__card__white">
                <div className="attribute__card__details">
                    <div className="details__left">
                        {/* <strong>Lorem ipsum dolor  </strong>
                        <p>Lorem Ipsum</p> */}
                    </div>
                    <div className="details__right">
                        <div className="status__div">

                        </div>
                    </div>
                </div>
                <h4 className='attribute__post'>Trend Forecaster</h4>
                <img src={Arrow} alt="Arrow" className='what_arrow'/>

                <button className="button-50">Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default SecondFold