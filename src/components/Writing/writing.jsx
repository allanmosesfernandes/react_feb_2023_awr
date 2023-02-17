import React from "react";
import "./writing.scss";
import Star from "../../assets/images/star.png";
import BlogImage from "../../assets/images/blog_preview.webp";

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

        <div className="blog__preview__container">

          <div className="blog__preview__div">
            <img src={BlogImage} alt="" />
            <p className="blog__preview__title">
              5 Ways to Find Content Ideas For Social Media
            </p>
            <div className="blog__preview__bottom">
              <div className="blog__preview__date">- February 9, 2023</div>
              <div className="blog__preview__category">Marketing</div>
            </div>
          </div>
          <div className="blog__preview__div">
            <img src={BlogImage} alt="" />
            <p className="blog__preview__title">
              5 Ways to Find Content Ideas For Social Media
            </p>
            <div className="blog__preview__bottom">
              <div className="blog__preview__date">--- February 9, 2023</div>
              <div className="blog__preview__category">Marketing</div>
            </div>
          </div>
          <div className="blog__preview__div">
            <img src={BlogImage} alt="" />
            <p className="blog__preview__title">
              5 Ways to Find Content Ideas For Social Media
            </p>
            <div className="blog__preview__bottom">
              <div className="blog__preview__date">--- February 9, 2023</div>
              <div className="blog__preview__category">Marketing</div>
            </div>
          </div>
          <div className="blog__preview__div">
            <img src={BlogImage} alt="" />
            <p className="blog__preview__title">
              5 Ways to Find Content Ideas For Social Media
            </p>
            <div className="blog__preview__bottom">
              <div className="blog__preview__date">--- February 9, 2023</div>
              <div className="blog__preview__category">Marketing</div>
            </div>
          </div>
          <div className="blog__preview__div">
            <img src={BlogImage} alt="" />
            <p className="blog__preview__title">
              5 Ways to Find Content Ideas For Social Media
            </p>
            <div className="blog__preview__bottom">
              <div className="blog__preview__date">--- February 9, 2023</div>
              <div className="blog__preview__category">Marketing</div>
            </div>
          </div>
          <div className="blog__preview__div">
            <img src={BlogImage} alt="" />
            <p className="blog__preview__title">
              5 Ways to Find Content Ideas For Social Media
            </p>
            <div className="blog__preview__bottom">
              <div className="blog__preview__date">--- February 9, 2023</div>
              <div className="blog__preview__category">Marketing</div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Writing