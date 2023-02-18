import { React, useState, useEffect } from "react";
import "./writing.scss";
import Star from "../../assets/images/star.png";
import BlogImage from "../../assets/images/blog_preview.webp";
import axios from "axios";

const Writing = () => {
  const [posts, setPosts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    axios
      .get("http://allanmoses.ninja/wp-json/wp/v2/categories?slug=homepage")
      .then((response) => {
        const homepageCategoryId = response.data[0].id;
        return axios.get(
          `http://allanmoses.ninja/wp-json/wp/v2/posts?categories=${homepageCategoryId}`
        );
      })
      .then((response) => {
        setPosts(response.data);
        // retrieve all the featured media URLs
        const mediaPromises = response.data.map((post) =>
          axios.get(
            `http://allanmoses.ninja/wp-json/wp/v2/media/${post.featured_media}`
          )
        );
        Promise.all(mediaPromises)
          .then((responses) => {
            const urls = responses.map(
              (response) =>
                response.data.media_details.sizes["medium"].source_url
            );
            setImageUrls(urls);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="writing__fold">
      <p className="cursive">Writing Blog</p>
      <p className="blog__body__copy">
        I've got <span><img src={Star} alt="Star" className="rotating__star" /> </span>
      </p>
      <p className="blog__body__copy">
        <span className="cursive__inline">exciting insight </span>for you
      </p>

      <div className="blog__preview__container">
        {posts.map((post, index) => {
          const imageUrl = imageUrls[index];
          return (
            <div className="blog__preview__div" key={index}>
              <img src={imageUrl} alt="" />
              <p className="blog__preview__title">{post.title.rendered}</p>
              <div className="blog__preview__bottom">
                <div className="blog__preview__date">- {post.date}</div>
                <div className="blog__preview__category">
                  {post.categories[0]}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Writing;
