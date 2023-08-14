const BlogListingShimmer = () => {
  return (
    <div className="blog__listing__container">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="blog__listing__div">
          <div className="number">0{index + 1}.</div>
          <div className="listing__image">
            {/* placeholder image  */}
            <img src="https://via.placeholder.com/150" alt="" />
          </div>
          <div className="listing__details">
            <p className="listing__date">01-01-2023</p>
            <h3 className="listing-title">
              Fetching, posts from the server...
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogListingShimmer;
