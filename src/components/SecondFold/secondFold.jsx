import React from 'react';
import "./second-fold.scss";

const SecondFold = () => {
  return (
    <div className='wrapper second__fold'>
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
                <h4 className="attribute__post"><span className='gothic'>Fashion</span> Merchandiser</h4>
                <button className="button-50">Learn More</button>

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
                <h4 className='attribute__post'><span className='gothic'>Trend </span>Forecaster</h4>
                <button className="button-50">Learn More</button>
                {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" /> */}
            </div>
        </div>
    </div>
  )
}

export default SecondFold