import {React, useState, useRef, useEffect} from 'react';
import "./firstfold.scss";
import ankan from "../../assets/images/ankan_bg.jpg";
import thread from "../../assets/images/thread.svg";
import SecondFold from '../SecondFold/secondFold';
import Brands from '../Brands/Brands';
import Writing from '../Writing/writing';
import WeeklyInspiration from '../WeeklyInspiration/WeeklyInspiration';

import Spotify from '../Spotify/Spotify';


const FirstFold = () => {

 useEffect(() => {
  window.scrollTo(0,0);
  }, []);
  return (
    <>
      <div className='wrapper first-fold' id="first_fold">
      <div className="text__left">

       <div className="future-of-fashion">
        <p>the <span style={{color:"#ff5757"}}>common</span><br />thread</p>
      </div>

      <div className="body-copy">
        Hi, I am Ankan - a fashion buyer, culture researcher, foodie, and perpetual student. I strive for optimization in both people and processes. Let's chat over food and explore my world of varied interests. Visit my website for a glimpse into my personal portfolio and blog. 
      </div> 
      </div>
      <div className="image__center">
      <img src={ankan} alt="ankan" className='ankan_img'/> 
        <span>
          <img src={thread} alt="thread" className='thread'/>
        </span>  
      </div> 
      <div className="photo__by">

      </div>

    </div> 
    <SecondFold /> 
    <Brands /> 
    <WeeklyInspiration />
    <Writing />
    <Spotify />
    </>

  )
}

export default FirstFold