import React from "react";
import "./Popular.css";

export default function PopularPostsSidebar() {
  const popularPosts = [
    {
      id: 1,
      image: "/dummy.jpg",
      category: "PRODUCT",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image: "/dummy.jpg",
      categories: ["PRODUCT", "ENTERPRISE"],
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      image: "/dummy.jpg",
      category: "PRODUCTIVITY",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      image: "/dummy.jpg",
      category: "PRODUCTIVITY",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="sidebar-container">
      <div className="popular-posts-section">
        <h2 className="section-title">POPULAR POSTS</h2>

        <div className="posts-list">
          {popularPosts.map((post, index) => (
            <React.Fragment key={post.id}>
              <div className="post-item">
                <div
                  className="post-image"
                  style={{
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>

                <div className="post-content">
                  <div className="post-categories">
                    {post.categories ? (
                      <div className="categories-wrapper">
                        {post.categories.map((cat, idx) => (
                          <span key={idx} className="category-tag">
                            {cat}
                            {idx < post.categories.length - 1 && " | "}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="category-tag">{post.category}</span>
                    )}
                  </div>

                  <h3 className="post-title">{post.title}</h3>
                </div>
              </div>

              <div className="divider-line"></div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <h3 className="cta-title">
          Get More Done
          <br />
          Together With Us
        </h3>

        <p className="cta-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
}
