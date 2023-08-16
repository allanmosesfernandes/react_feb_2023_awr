import React from "react";
import { useNavigate } from "react-router-dom";
import { articleDate } from "../../utils/utilis";
import he from "he";

const RecommendedArticles = ({ morePosts }) => {

  const recommendedPosts = morePosts;
  const navigate = useNavigate();
  return (
    <div className="blog__other__posts wrapper">
      <div className="intro-container">
        <h3>RELATED ARTICLES</h3>
        <p>See more ↘</p>
      </div>
      
        <div className="other__posts__grid">
          {
            recommendedPosts ? (
            recommendedPosts.map((post, index) => {
              const imageUrl = post.jetpack_featured_media_url;
            //   const formattedDate = (post);
              let postCategory = post.categories[0];
              // const categoryNameWithoutAmp = postCategory.replace(/&amp;/g, '&');

              return (
                <div
                  className="blog__preview__div"
                  key={index}
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  <img src={imageUrl} alt="" />
                  <p className="blog__preview__title">
                    {" "}
                    {he.decode(post.title.rendered)}
                  </p>
                  <div className="blog__preview__bottom">
                    <div className="blog__preview__date">
                      <span>
                        <hr />
                      </span>
                      {articleDate(post)}
                    </div>
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
  );
};

export default RecommendedArticles;
