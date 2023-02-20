import React from 'react';
import "./404.scss";

const PageNotFound = () => {
  return (
    <div className='wrapper page_not_found'>
        <h4>Page not found!</h4>
        <p>Sorry Mario!<br />Your princess is in another castle 🏰</p>
        <div className="mario-wall">
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_ndjggbxg.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
        </div>

    </div>
  )
}

export default PageNotFound