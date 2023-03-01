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
    <div className='weekly__inspiration wrapper'>
    <div>WeeklyInspiration</div>
    <div className="image__grid__container">
        {
            images.map((image,index) => {
                let imageURL = image.image_url;
                return <div key={index} className="image__grid__images">
                    <img src={imageURL} alt="index" id={index}/>
                </div>
            })
        }
    </div>
</div>
  )
}

export default WeeklyInspiration
