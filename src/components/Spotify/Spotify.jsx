import React from 'react'
import "./spotify.scss";
import PlayList from "../../assets/images/playlist.svg";

const Spotify = () => {
  return (
    <div className='spotify__wrapper wrapper'>
        <div className="playlist__takeover">
        <img src={PlayList} alt="PLaylist takeover" />
        <div className="playlist__content">
            <p>
              Not saying I’m a music connoisseur, but I have been involved with music since the <span>age of four</span> making it a big part of my journey. I believe it’s expressive and creative, and the right song can set the tone for any moment. So take a peek behind the curtain and see what's on my <span>playlist</span>.
            </p>
        </div>
        </div>
<div className="spotify__playlist">
      <iframe className="spotiy" src="https://open.spotify.com/embed/playlist/0fs2HLCdVuWej8mo9Egwhp?utm_source=generator"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>

    </div>
  )
}

export default Spotify