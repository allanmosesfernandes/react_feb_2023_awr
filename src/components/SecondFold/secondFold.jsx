import React from 'react';
import "./second-fold.scss";

const SecondFold = () => {
  return (
    <div className='wrapper second__fold'>
        <div className="attribute__card__container">
            <div className="attribute__card__black">
                <div className="attribute__card__details">
                    <div className="details__left">
                        <strong>Lorem ipsum dolor  </strong>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className="details__right">
                        <div className="status__div">

                        </div>
                    </div>
                </div>
                <h4 className="attribute__post">Fashion Merchandiser</h4>
                <button className="button-74">LEARN MORE </button>
            </div>
            <div className="attribute__card__white">
                                <div className="attribute__card__details">
                    <div className="details__left">
                        <strong>Lorem ipsum dolor  </strong>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className="details__right">
                        <div className="status__div">

                        </div>
                    </div>
                </div>
                <h4 className='attribute__post'>Trend Forecaster</h4>
                <button className="button-74">LEARN MORE </button>
                {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" /> */}
            </div>
        </div>
    </div>
  )
}

export default SecondFold