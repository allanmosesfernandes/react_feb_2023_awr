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
        I'm Ankan, a fashion buyer, culture researcher, food enthusiast, and perpetual student. My diverse educational background has allowed me to reimagine myself and approach my work with a sense of curiosity and a desire for optimization. I strive to do better and be better in all aspects of my life, driven by my pursuit of optimization in people and processes. As someone with varied interests, feel free to explore the two sides of me - and let's chat, especially over food!
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