import "./blog-article.scss";
import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ShareButtons, WhatsappShareButton,FacebookShareButton, LinkedinShareButton } from 'react-share';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faWhatsapp, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const BlogArticle = () => {

  const navigate = useNavigate();

    const [post, setPost] = useState(null);
    const [morePosts, setMorePosts] = useState(null);

   const {slug} = useParams();
     useEffect(() => {
    window.scrollTo(0,0)
    axios.get(`https://blog.ankanchittalipi.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then(response => {
        setPost(response.data[0]);
        axios.get(`https://blog.ankanchittalipi.com/wp-json/wp/v2/posts?exclude=${response.data[0].id}&per_page=3&_embed`)
          .then(response => {
            setMorePosts(response.data);
          })
          .catch(error => {
            console.error(error);
          });
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
    <> 
  {
    post ? (
      
      <Helmet>
        <meta name="title" content={post.title.rendered} />
        <meta name="description" property="og:description" content={post.title.rendered} />
        <meta property='og:url' content={`https://ankanchittalipi.com/blog/${post.slug}`} />
      </Helmet>
    ) : ""
  }



    <div className='wrapper blog__article'>
    {post ? (
        <div className="blog__article__wrapper">
        <div className="blog__article__intro">
            <h2 className="blog__art">{post.title.rendered}</h2>
            <div className="blog__preview__date"><span><hr /></span>{formattedDate}</div>
        </div>
          
          <div className="blog__article__content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          <div className="share-buttons">
          <h3>Share this:</h3>

            <div className="footer__links__social">
                <div className="socials">
                    <div className='social_icon_container '>
                      <FacebookShareButton url={`https://ankanchittalipi.com/blog/${post.slug}`}>
                        <FontAwesomeIcon icon={faFacebookF} size="2x"/>
                      </FacebookShareButton>
                    </div>
                </div>
                <div className="socials">
                    <div className='social_icon_container '>
                    <WhatsappShareButton url={`https://ankanchittalipi.com/blog/${post.slug}`}>
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </WhatsappShareButton>
                    </div>
                </div>
                <div className="socials">
                    <div className='social_icon_container '>
                    <LinkedinShareButton url={`https://ankanchittalipi.com/blog/${post.slug}`}>
                            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </LinkedinShareButton>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
      ) : (
        <p className="load"><span className="loader"></span></p>
      )}

    </div>

    <div className="blog__other__posts wrapper">
      <div className="intro-container">
        <h3>RELATED ARTICLES</h3>
        <p>See more ↘</p>
      </div>

        <div className="other__posts__grid">

        {morePosts ? (
          morePosts.map((post, index) => {
          const imageUrl = post.jetpack_featured_media_url;
          const dateString = post.date.split("T")[0];
          const date = new Date(dateString);
          const options = { month: 'short', day: 'numeric', year: 'numeric' };
          const formattedDate = date.toLocaleString('en-US', options);
          let postCategory = post.categories[0];
          // const categoryNameWithoutAmp = postCategory.replace(/&amp;/g, '&');




          return <div className="blog__preview__div" key={index} onClick={() => navigate(`/blog/${post.slug}`)}>
              <img src={imageUrl} alt="" />
              <p className="blog__preview__title">{post.title.rendered}</p>
              <div className="blog__preview__bottom">
                <div className="blog__preview__date"><span><hr /></span>{formattedDate}</div>
                {/* <div className="blog__preview__category related">
                  {postCategory}
                </div> */}
              </div>
            </div>
          })
        ) : (<p className="load"><span className="loader"></span></p>
)}

        </div>
    </div>
    </>

  )
}

export default BlogArticle