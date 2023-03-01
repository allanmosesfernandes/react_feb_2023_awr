import React, { useState } from 'react'
import "./about.scss";

const About = () => {

const [text ,setText] = useState({

    empathy: {
        short: "Driven by empathy",
        long: "I am a strong believer in building collaborative relationships and working towards a common goal through developing creative and disruptive ideas that impact businesses positively.",
        showLongText: false
    },
    octane: {
        short: "High-octane go-getter",
        long: "I thrive in environments that involve high levels of autonomy, innovation, and creativity.",
        showLongText: false

    },

    evolve: {
        short: "Continuously evolving",
        long: "My sole objective lies in aiming to optimize every process and product and plan to make lives easier and simpler as we go along.",
        showLongText: false
    },

})

const mouseHover = (e) => {
    let atts = e.target.getAttribute('data-custom');
    setText({
        ...text,
        [atts]: {
            ...text[atts],
            showLongText: true
        }

    })
}

const mouseHoverOver = (e) => {
    let atts = e.target.getAttribute('data-custom');
    setText({
        ...text,
        [atts]: {
            ...text[atts],
            showLongText: false
        }

    })
}
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

                <div
                    className="principle__capsule"
                    data-custom="empathy"
                    onMouseEnter={mouseHover}
                    onMouseLeave={mouseHoverOver}>
                    <div className='principle__emoji' data-custom="empathy">❤️</div>
                    <div data-custom="empathy" className='principle__copy'>

                    <p 
                    data-custom="empathy" 
                    className={`${text.empathy.showLongText ? 'not_shorty' : 'shorty'}`}>
                        {text.empathy.short}
                    </p>
                    <p 
                    data-custom="empathy" 
                    className={`principle__copy ${text.empathy.showLongText ? 'show-long-text' : 'hover__effect'}`}>{text.empathy.long}
                    </p>
                </div>
                </div>
                <div
                    className="principle__capsule"
                    data-custom="octane"
                    onMouseEnter={mouseHover}
                    onMouseLeave={mouseHoverOver}>
                    <div className='principle__emoji' data-custom="octane">⚡</div>
                    <div data-custom="octane">

                    <p 
                    data-custom="octane" 
                    className={`${text.octane.showLongText ? 'not_shorty' : 'shorty'}`}>
                        {text.octane.short}
                    </p>
                    <p 
                    data-custom="octane" 
                    className={`principle__copy ${text.octane.showLongText ? 'show-long-text' : 'hover__effect'}`}>{text.octane.long}
                    </p>
                </div>
                </div>
                <div
                    className="principle__capsule"
                    data-custom="evolve"
                    onMouseEnter={mouseHover}
                    onMouseLeave={mouseHoverOver}>
                    <div className='principle__emoji' data-custom="evolve">🌱</div>
                    <div data-custom="evolve">

                    <p 
                    data-custom="evolve" 
                    className={`${text.evolve.showLongText ? 'not_shorty' : 'shorty'}`}>
                        {text.evolve.short}
                    </p>
                    <p 
                    data-custom="evolve" 
                    className={`principle__copy ${text.evolve.showLongText ? 'show-long-text' : 'hover__effect'}`}>{text.evolve.long}
                    </p>
                </div>
                </div>
                <div
                    className="principle__capsule"
                    data-custom="evolve"
                    onMouseEnter={mouseHover}
                    onMouseLeave={mouseHoverOver}>
                    <div className='principle__emoji' data-custom="evolve">🌱</div>
                    <div data-custom="evolve">

                    <p 
                    data-custom="evolve" 
                    className={`${text.evolve.showLongText ? 'not_shorty' : 'shorty'}`}>
                        {text.evolve.short}
                    </p>
                    <p 
                    data-custom="evolve" 
                    className={`principle__copy ${text.evolve.showLongText ? 'show-long-text' : 'hover__effect'}`}>{text.evolve.long}
                    </p>
                </div>
                </div>



        </div>
    </div>

</div>
)
}

export default About