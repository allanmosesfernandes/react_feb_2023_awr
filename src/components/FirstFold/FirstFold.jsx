import {React, useState, useRef, useEffect} from 'react';
import "./firstfold.scss";
import ankan from "../../assets/images/ankan_bg.jpg";
import thread from "../../assets/images/thread.svg";
import SecondFold from '../SecondFold/secondFold';
import Brands from '../Brands/Brands';
import Writing from '../Writing/writing';
import WeeklyInspiration from '../WeeklyInspiration/WeeklyInspiration';


const FirstFold = () => {


  return (
    <>
      <div className='wrapper first-fold' id="first_fold">
      <div className="text__left">

       <div className="future-of-fashion">
        <p>the future of <br />fashion</p>
      </div>

      <div className="body-copy">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sunt distinctio error repellat. Libero dolor tenetur aliquid mollitia animi, dolore quidem repellendus quisquam asperiores maxime. Nemo officiis nulla corporis dolores.
      </div> 
      </div>
      {/* <div className="image__center">
      <img src={ankan} alt="ankan" className='ankan_img'/>
        <span>
          <img src={thread} alt="thread" className='thread'/>
        </span>  
      </div> */}
      <div className="photo__by">
        {/* <strong>PHOTO BY:</strong>
        <span>PK Photography</span> */}
      </div>

    </div> 
    <SecondFold /> 
    <Brands /> 
    <WeeklyInspiration />
    <Writing />
    </>

  )
}

export default FirstFold