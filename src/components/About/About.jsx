import React, { useState } from 'react'
import "./about.scss";

const About = () => {

const [text ,setText] = useState({
    "empathy": "I am a strong believer in building collaborative relationships and working towards a common goal through developing creative and disruptive ideas that impact businesses positively",
    "octane": "I thrive in environments that involve high levels of autonomy, innovation, and creativity. ",
    "evolving": "My sole objective lies in aiming to optimize every process and product and plan to make lives easier and simpler as we go along.",

})
return (
<div className='wrapper about_me'>
    <div className="about__me__second__fold">
        <h2>Hi there, I'm <span>Ankan</span>.</h2>
        <div className="second_fold_block">
            <div>
                <button className='about_me_btn'>Also Chittu, or Meow</button>
            </div>

            <div className="about__me__txt">
                <p>
                    A strategist by heart, I specialize in buying & merchandising with 5+ years of work experience with premium international brands and currently widening my portfolio in the luxury sphere as a buyer.
                </p>
                 <p>
                    Zealous about menswear & womenswear RTW, menswear & womenswear athleisure, menswear & womenswear sport, leather home & accessories
                </p> 
            </div>

        </div>
    </div>
    <div className="about__me__second__fold">
        <h2>Key <span>Principles</span>.</h2>
        <div className="second_fold_block">
            <div>
                <button className='about_me_btn'>I follow and believe in</button>
            </div>

            <div className="about__me__txt">
                <p>
                    Recipe for a good soup in my dictionary- Researching the culturally driven consumer behaviour that’s perpetually evolving & assessing its impact on businesses globally & locally through acute analysis of relevant KPIs.
                </p>

            </div>

        </div>
        <div className="principles__block__container">

            <div className="principle__capsule">
                <div className='principle__emoji'>💖</div>
                <div className="principle__copy">
                    <p>{text.empathy}</p>
                </div>
            </div>
            <div className="principle__capsule">
                <div className='principle__emoji'>💖</div>
                <div className="principle__copy">
                    <p>{text.empathy}</p>
                </div>
            </div>
            <div className="principle__capsule">
                <div className='principle__emoji'>💖</div>
                <div className="principle__copy">
                    <p>{text.empathy}</p>
                </div>
            </div>
            <div className="principle__capsule">
                <div className='principle__emoji'>💖</div>
                <div className="principle__copy">
                    <p>{text.empathy}</p>
                </div>
            </div>

        </div>
    </div>

</div>
)
}

export default About