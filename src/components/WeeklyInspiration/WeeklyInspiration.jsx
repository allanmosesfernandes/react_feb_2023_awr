import React, { useState, useEffect } from "react";
import { TEMP_IMAGES_WEEKLY_INSPIRATION } from "../.././constants/constant";
import "./weeklyinspiration.scss";

const WeeklyInspiration = () => {
  const [images, setImages] = useState(TEMP_IMAGES_WEEKLY_INSPIRATION);
  useEffect(() => {
    fetch("https://blog.ankanchittalipi.com/wp-json/wp/v2/weekly_inspiration/")
      .then((response) => response.json())
      .then((data) => {
           if (data && data.length > 0) {
             setImages(data);
           }
      })
      .catch((error) => console.error(error));
  }, []);
  
  return (
    <div className="weekly__inspiration">
      <h2>Visual <span className="highlightColor">Musings</span></h2>
      <p>What's been inspiring me lately</p>
      <div className="image__grid__container">
        { 
          images.slice(0,5).map((image, index) => {
              let imageURL = image?.yoast_head_json?.og_image[0]?.url;
              let id = image.id;
              let group = index % 5;
              // Set CSS classes for each group
              let highlightImage = group === 0 ? "highlight" : "secondary";
              let smallest = group === 4 ? "smally" : "";

                return (
                  <div
                    key={id}
                    className={`image__grid__images ${highlightImage} ${smallest}`}>
                    <img src={imageURL} alt={`Weekly Inspiration ${index}`} />
                  </div>
                );
          })
        }
      </div>
    </div>
  );
};

export default WeeklyInspiration;
