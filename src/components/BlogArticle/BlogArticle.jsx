import "./blog-article.scss";
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from "axios";


const BlogArticle = () => {
    const [post, setPost] = useState(null);
   const {slug} = useParams();
     useEffect(() => {
    axios.get(`http://allanmoses.ninja/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then(response => {
        setPost(response.data[0]);
      })
      .catch(error => {
        console.error(error);
      });
  }, [slug]);

    let formattedDate = null;
    if (post) {
        const dateString = post.date.split("T")[0];
        const date = new Date(dateString);
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        formattedDate = date.toLocaleString('en-US', options);
    }


  return (
    <div className='wrapper blog__article'>
    {post ? (
        <div className="blog__article__wrapper">
        <div className="blog__article__intro">
            <h2 className="blog__art">{post.title.rendered}</h2>
            <div className="blog__preview__date"><span><hr /></span>{formattedDate}</div>
        </div>
          
          <div className="blog__article__content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

        </div>

        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default BlogArticle