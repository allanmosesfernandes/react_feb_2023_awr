import React from 'react';
import "./bloglisting.scss";
import ankan from "../../assets/images/ankan_bg.jpg";


const BlogListing = () => {
  return (
    <div className='wrapper blog__listing'>
      <h2>Sometimes I write about stuff that just makes sense -</h2>
      <div className="blog__listing__container">
        <div className="blog__listing__div">
          <div className="number">01.</div>
          <div className="listing__image">
            <img src={ankan} alt="" />
          </div>
          <div className="listing__details">
            <p className="listing__date">2022</p>
            <h3 className='listing-title'>Visual Identity for Pure Luxe</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogListing