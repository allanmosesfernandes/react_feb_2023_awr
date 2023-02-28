import React from 'react'
import "./about.scss";

const About = () => {
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
                 An LA-based award-winning design director and UI/UX design expert with 10 years of experience in design and management.
                </p>
                <p>
                I am a mom to a beautiful 2 y.o. daughter who already loves attending business meetings with me. Also, a big part of my life is Netrix - a design agency which I run together with my husband.
                </p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default About