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
        <p>The <span style={{color:"#ff5757"}}>Common</span><br />Thread</p> 
      </div>

      <div className="body-copy">
        I'm Ankan - a fashion buyer, culture connoisseur, food fanatic, and a lifelong learner. There has always been a <em><strong>common thread</strong></em> of inquisitiveness which has led me on a mission to optimize people and processes, and I believe anything inquisitive makes the journey exciting. Being a person of varied interests, I have two facets that you can have a peek at, now that you’re here!   
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