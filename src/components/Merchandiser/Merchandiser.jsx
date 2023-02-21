import React from 'react'
import "./merchandiser.scss"
import Star from "../../assets/images/BlackStar.svg";

const Merchandiser = () => {
return (
<div className='wrapper merchandiser__container'>
  <h2>Fashion Merchandiser</h2>
  <div className="merchandiser__content">
  <img src={Star} className="black__star" />
    <div className="merch__text">

      <p>
        <strong>A strategist by heart,</strong> I specialize in buying & merchandising with 5+ years of work experience with premium
        international brands and currently widening my portfolio in the luxury sphere as a buyer.
      </p>
      <p>
        <strong>Driven by empathy: </strong>

        I am a strong believer in building collaborative relationships and working towards a common goal through
        developing creative and disruptive ideas that impact businesses positively.
      </p>
      <p>
        <strong>High-octane go-getter:</strong>

        I thrive in environments that involve high levels of autonomy, innovation, and creativity
      </p>
      <p>
        <strong>Continuously evolving:</strong>

        My sole objective lies in aiming to optimize every process and product and plan to make lives easier and simpler
        as we go along.
      </p>
      <p>
        <strong>Zealous about: </strong> menswear & womenswear RTW, menswear & womenswear athleisure, menswear & womenswear sport, leather
        home & accessories
      </p>
        <p>
          <strong>Recipe for a good soup in my dictionary</strong>- Researching the culturally driven consumer behaviour that’s perpetually
          evolving & assessing its impact on businesses globally & locally through acute analysis of relevant KPIs.
        </p>
    
    </div>

  </div>
</div>
)
}

export default Merchandiser