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
    <div>WeeklyInspiration</div>
  )
}

export default WeeklyInspiration
