import React from "react";
import "./writing.scss";
import Star from "../../assets/images/star.png"

const Writing = () => {
  return (
    <div className=" writing__fold">
        <p className="cursive">Writing Blog</p>
        <p className="blog__body__copy">
          I've got 
          <span><img src={Star} alt="Star" className="rotating__star"/> </span>
        </p>
        <p className="blog__body__copy">
          <span className="cursive__inline">exciting insight </span>for you
        </p>
    </div>
  )
}

export default Writing