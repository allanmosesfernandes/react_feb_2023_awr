import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function useBlogArticle(props) {
    const slug  = props;
    useEffect(() => {
    axios
      .get(
        `https://blog.ankanchittalipi.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
      )
      .then((response) => {
        setPost(response.data[0]);
        axios
          .get(
            `https://blog.ankanchittalipi.com/wp-json/wp/v2/posts?exclude=${response.data[0].id}&per_page=3&_embed`
          )
          .then((response) => {
            setMorePosts(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
    }, [slug]);

   const [post, setPost] = useState(null);
   const [morePosts, setMorePosts] = useState(null);
   return { post, morePosts };
}


export default useBlogArticle;