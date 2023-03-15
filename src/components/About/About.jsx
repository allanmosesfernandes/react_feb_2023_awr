import React, { useState, useEffect } from 'react'
import "./about.scss";
import WorkTimeLine from '../Work/WorkTimeLine';
import Quote from "../../assets/images/quotesvg.svg";
import SkillsComponent from '../Skills/SkillsComponent';
import DogFace from "../../assets/images/dog-face.png";
import Peachy from "../../assets/images/peachy.png";
import Empathy from "../../assets/images/principles/collaborative.svg";
import Getter from "../../assets/images/principles/go-getter.svg";
import Evolving from "../../assets/images/principles/evolving.svg";
import PurplePlus from "../../assets/images/principles/purpleplus.svg";

const About = () => {
const [ isActive, setActive ] = useState(false);

const ToggleClass = (e) => {
  const cardElement = e.target.offsetParent;
  cardElement.classList.toggle("active");
};

useEffect(() => {
  window.scrollTo(0, 0);
}, []);


return (
<div className='wrapper about_me' id="hi">
    <div className="about__me__second__fold">
        <h2>Hi there, I'm <span style={{color:"#ff5757"}}>Ankan.</span></h2>
        <div className="second_fold_block">
            <div>
                <button className='about_me_btn'><img src={DogFace} title="Dog"/> Lover & Beach <img src={Peachy} title="Bum"/></button>
            </div>

            <div className="about__me__txt">
                <p>
                    A strategist by heart, I specialize in <span style={{color:"#ff5757"}}>buying & merchandising</span> with <strong>5+ years</strong>  of work experience with premium international brands and currently widening my portfolio in the luxury sphere as a buyer.
                </p>
                 <p>
                    Zealous about menswear & womenswear RTW, menswear & womenswear athleisure, menswear & womenswear sport, leather home & accessories.
                </p> 
            </div>

        </div>
    </div>


    {/*==== Principles ====*/}    
        <div className="quotation">
            <p><span className="marks"><img src={Quote} alt="quote" className='quote-icon'/></span>At the center of the <span>macrocosm</span> is a <span className='human_underline'>human truth.</span> </p>
        </div>
                    <div className="about__me__txt">
                <p>
                    Adept at researching the culturally driven consumer behaviour that’s perpetually evolving & assessing its impact on businesses globally & locally through acute analysis of relevant KPIs.
                </p>

            </div>
    <div className="about__me__second__fold">
        <h2>Key <span>Principles</span>.</h2>

        <div className="second_fold_block">
            <div>
                <button className='about_me_btn'>I follow and believe in</button>
            </div>


        </div>
        
        <div className="values-container">

            <div className={isActive ? "values-card active": "values-card"}>
                <div className="values-inital">
                    <img src={Empathy} alt="Empathy icon" />
                    <h2>Driven by empathy</h2>
                </div>
                <span className="values-text-slide">
                I am a strong believer in building collaborative relationships and working towards a common goal through developing creative and disruptive ideas that impact businesses positively.
                </span>
                <img src={PurplePlus} alt="" className='mobile-expand-button' onClick={ToggleClass}/>
            </div>
            <div className={isActive ? "values-card active ": "values-card"}>
                <div className="values-inital">
                    <img src={Getter} alt="Empathy icon" />
                    <h2>High-octane go-getter</h2>
                </div>
                <span className="values-text-slide">
                I thrive in environments that involve high levels of autonomy, innovation, and creativity.
                </span>
                <img src={PurplePlus} alt="" className='mobile-expand-button' onClick={ToggleClass}/>

            </div>
            <div className="values-card">
                <div className="values-inital">
                    <img src={Evolving} alt="Empathy icon" />
                    <h2>Continuously evolving</h2>
                </div>
                <span className="values-text-slide">
                My sole objective lies in aiming to optimize every process and product and plan to make lives easier and simpler as we go along.
                </span>
                                <img src={PurplePlus} alt="" className='mobile-expand-button' onClick={ToggleClass}/>

            </div>
        </div>
    </div>

    <SkillsComponent />
    {/*==== Skills Component ====*/} 



    {/*==== Work Timeline Component ====*/}    
    <WorkTimeLine />
</div>

)
}

export default About