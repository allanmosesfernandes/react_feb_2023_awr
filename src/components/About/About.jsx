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
                    An LA-based award-winning design director and UI/UX design expert with 10 years of experience in
                    design and management.
                </p>
                <p>
                    I am a mom to a beautiful 2 y.o. daughter who already loves attending business meetings with me.
                    Also, a big part of my life is Netrix - a design agency which I run together with my husband.
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
                    For me, design is about problem solving, communicating an objective, and helping people.

                </p>
                <p>

                    I believe that everything you can imagine is possible when you have clearly defined goals, strong
                    design, strategy and assemble a talented team.
                </p>
            </div>

        </div>
        <div className="principles__block__container">
            <div className="principle__capsule"></div>
            <div className="principle__capsule"></div>
            <div className="principle__capsule"></div>
            <div className="principle__capsule"></div>
        </div>
    </div>

</div>
)
}

export default About