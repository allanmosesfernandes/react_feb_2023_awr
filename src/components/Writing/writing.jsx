import { React, useState, useEffect } from "react";
import "./writing.scss";
import Star from "../../assets/images/star.png";
import BlogImage from "../../assets/images/blog_preview.webp";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import he from "he";

const Writing = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://blog.ankanchittalipi.com/wp-json/wp/v2/posts")
      .then((response) => {
        const fetchedPosts = response.data;
        setPosts(fetchedPosts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://blog.ankanchittalipi.com/wp-json/wp/v2/categories")
      .then((response) => {
        const fetchedCategories = response.data.reduce((acc, category) => {
          acc[category.id] = category.name;
          return acc;
        }, {});
        setCategories(fetchedCategories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="writing__fold">
      <p className="blog__body__copy">
        I've got{" "}
        <span>
          <img src={Star} alt="Star" className="rotating__star" />{" "}
        </span>
      </p>
      <p className="blog__body__copy">
        <span className="cursive__inline">
          exciting <span style={{ color: "#ff5757" }}>insight</span>{" "}
        </span>
        for you
      </p>

      <div className="blog__preview__container">
        {posts.map((post, index) => {
          if (index > 2) return null;
          const imageUrl = post.jetpack_featured_media_url;
          const dateString = post.date.split("T")[0];
          const date = new Date(dateString);
          const options = { month: "short", day: "numeric", year: "numeric" };
          const formattedDate = date.toLocaleString("en-US", options);
          const categoryId = post.categories[0];
          const categoryName = categories[categoryId].replace(/&amp;/g, '&');
          const blogTitle = post.title.rendered;
          const title = he.decode(blogTitle);

          return (
            <div
              className="blog__preview__div"
              key={index}
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <img src={imageUrl} alt="" />
              <p className="blog__preview__title">{title}</p>
              <div className="blog__preview__bottom">
                <div className="blog__preview__date">
                  <span>
                    <hr />
                  </span>
                  {formattedDate}
                </div>
                <div className="blog__preview__category">{categoryName}</div>
              </div>
            </div>
          );
        })}
      </div>

      <Link to="blog">
        <button className="writings button-50">Read More</button>
      </Link>
    </div>
  );
};

export default Writing;
