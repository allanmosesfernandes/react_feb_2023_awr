import React, { useState, useEffect } from 'react';
import "./weeklyinspiration.scss";

const WeeklyInspiration = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://ankanchittalipi.com/wp-json/wp/v2/weekly_inspiration/')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div className='weekly__inspiration '>
    <h2>Visual Musings</h2>
    <p>What's been <span className='sf-italic'>inspiring</span> me lately</p>
      <div className="image__grid__container">
        {images.map((image, index) => {
          let imageURL = image.image_url;
          let group = index % 5; 
          const excerptElement = image.excerpt.rendered;
          const excerptText = document.createElement('div');
          excerptText.innerHTML = excerptElement;
          const plainExcerpt = excerptText.textContent;
          // Set CSS classes for each group
          let highlightImage = group === 0 ? "highlight" : "secondary";
          let smallest = group === 4 ? "smally" : "" 

          return (
            <div key={index} className={`image__grid__images ${highlightImage} ${smallest}`}>
              <img src={imageURL} alt={`imageTitle`} title={plainExcerpt} />
            </div>
          );
        })}
      </div>

</div>
  )
}

export default WeeklyInspiration
