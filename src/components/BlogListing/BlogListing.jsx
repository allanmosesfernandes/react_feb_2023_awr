import { React, useState, useEffect } from "react";
import "./bloglisting.scss";
import he from "he";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import { formatDate } from "../../utils/utilis";
import BlogListingShimmer from "./BlogShimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const BlogListing = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get("https://blog.ankanchittalipi.com/wp-json/wp/v2/posts")
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setPosts(response.data);
          setFilteredPosts(response.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="wrapper blog__listing">
      <h2>
        Sometimes I write about stuff that just makes <span>sense-</span>{" "}
      </h2>
      <form role="search" className="search__form">
        <div className="search__wrapper">
          <input
            type="search"
            placeholder="Search Posts"
            className="search__input"
            value={searchText}
            id="search-posts"
            onChange={(e) => {
              const userInput = e.target.value.toLowerCase();
              setSearchText(userInput);
              const filteredList = posts.filter((post) => {
                return post.title.rendered.toLowerCase().includes(userInput);
              });
              setFilteredPosts(filteredList);
            }}
          />
          <FontAwesomeIcon className="magnify" icon={faMagnifyingGlass} size="1x"/>
        </div>

      </form>

      {isLoading ? (
        <BlogListingShimmer />
      ) : (
        <div className="blog__listing__container">
          {filteredPosts.map((post, index) => {
            const imageUrl = post?.jetpack_featured_media_url;
            const formattedDate = formatDate(post.date);
            const blogTitle = post.title.rendered;
            const title = he.decode(blogTitle);
            const postID = post.id;

            return (
              <Fade bottom key={postID}>
                <div
                  role="button"
                  className="blog__listing__div"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  <div className="number">
                    {index < 10 ? `0${index + 1}` : index + 1}.
                  </div>
                  <div className="listing__image">
                    <img src={imageUrl} alt={title} />
                  </div>
                  <div className="listing__details">
                    <p className="listing__date">{formattedDate}</p>
                    <h3 className="listing-title">{title}</h3>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BlogListing;
