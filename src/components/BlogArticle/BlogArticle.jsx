import React from "react";
import "./blog-article.scss";
import { useParams } from "react-router-dom";
import he from "he";
import useBlogArticle from "../../utils/useBlogArticle";
import { articleDate } from "../../utils/utilis";
import RecommendedArticles from "./RecommenedArticles";
import SocialShare from "./SocialShare";

const BlogArticle = () => {
  const { slug } = useParams();
  const { post, morePosts } = useBlogArticle(slug);

  return (
    <>
      <div className="wrapper blog__article">
        {post ? (
          <div className="blog__article__wrapper">
            <div className="blog__article__intro">
              <h2 className="blog__art" style={{ textAlign: "center" }}>
                {he.decode(post.title.rendered)}
              </h2>
              <div className="blog__preview__date">
                <span>
                  <hr />
                </span>
                {articleDate(post)}
              </div>
            </div>
            <div
              className="blog__article__content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
            <SocialShare slug={post.slug} />
          </div>
        ) : (
          <p className="load">
            <span className="loader"></span>
          </p>
        )}
      </div>
      <RecommendedArticles morePosts={morePosts} />
    </>
  );
};

export default BlogArticle;
