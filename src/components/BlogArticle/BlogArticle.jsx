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


  return (
    <div className='wrapper blog__article'>
    {post ? (
        <>
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default BlogArticle