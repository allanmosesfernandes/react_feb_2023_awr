import {React, useState, useEffect} from 'react';
import "./bloglisting.scss";
import ankan from "../../assets/images/ankan_bg.jpg";
import { useNavigate, Link, Navigate } from "react-router-dom";
import axios from "axios";


const BlogListing = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  
 useEffect(() => {
  window.scrollTo(0,0);
        axios.get("https://ankanchittalipi.com/wp-json/wp/v2/posts")
      .then((response) => {
        const fetchedPosts = response.data;
        setPosts(fetchedPosts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='wrapper blog__listing'>
      <h2>Sometimes I write about stuff that just makes sense -</h2>
      <div className="blog__listing__container">
          {posts ? (
            posts.map((post, index) => {
              const imageUrl = post.jetpack_featured_media_url;
              const year = post.date.split("-")[0]

              return (
                <div className="blog__listing__div" key={index}  onClick={() => navigate(`/blog/${post.slug}`)}>

                  <div className="number">{index < 10 ? `0${index + 1}`: index + 1}.</div>
                  <div className="listing__image">
                    <img src={imageUrl} alt="" />
                  </div>
                  <div className="listing__details">
                    <p className="listing__date">{year}</p>
                    <h3 className="listing-title">{post.title.rendered}</h3>
                  </div>
     
              </div>
              );
            })
          ) : (
            <p className="load">
              <span className="loader"></span>
            </p>
          )}

      </div>
    </div>
  )
}

export default BlogListing