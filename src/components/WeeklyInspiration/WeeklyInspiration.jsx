import React, { useState, useEffect } from 'react';
import "./weeklyinspiration.scss";

const WeeklyInspiration = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://ankanchittalipi.com/wp-json/wp/v2/weekly_inspiration/')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div className='weekly__inspiration'>
    <div>WeeklyInspiration</div>
<div className="image__grid__container">
  {images.map((image, index) => {
    let imageURL = image.image_url;
    let group = index % 5; 

    // Set CSS classes for each group
    let highlightImage = group === 0 ? "highlight" : "secondary";
    // let columnClasses =
    //   group === 0
    //     ? "image__grid__images--full"
    //     : "image__grid__images--half";
    // let rowClasses =
    //   group === 0 ? "image__grid__row--full" : "image__grid__row--half";

    return (
      <div key={index} className={`image__grid__images ${highlightImage}`}>
        <img src={imageURL} alt={`index-${index}`} />
      </div>
    );
  })}
</div>

</div>
  )
}

export default WeeklyInspiration
