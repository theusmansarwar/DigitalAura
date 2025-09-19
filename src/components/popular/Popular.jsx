"use client";
import React, { useEffect, useState } from "react";
import "./Popular.css";
import { fetchallBloglist } from "@/DAL/Fetch"; // adjust path if needed
import { baseUrl } from "@/app/config/Config";
import truncateTextByWords from "@/utils/TruncateByWords";
import PopularPostsSkeleton from "../SkeletonLoaders/PopularSkeleton";
import PopularSkeleton from "../SkeletonLoaders/PopularSkeleton";
import { useRouter } from "next/navigation";

export default function PopularPostsSidebar() {
  const router = useRouter();
  const [popularPosts, setPopularPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPopularPosts();
  }, []);

  const loadPopularPosts = async () => {
    try {
      setLoading(true);
      // Fetch first page with limit 4 (or any number you want)
      const res = await fetchallBloglist("", 1, 4, "");
      if (res?.blogs) {
        setPopularPosts(res.blogs);
      }
    } catch (error) {
      console.error("Error fetching popular posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sidebar-container">
      <div className="popular-posts-section">
        <h2 className="section-title">POPULAR POSTS</h2>
        <div className="posts-list">
          {loading ? (
            <PopularSkeleton />
          ) : (
            popularPosts.map((post) => (
              <React.Fragment key={post._id}>
                <div
                  className="post-item"
                  onClick={() => {
                    router.push(`/blogs/${post.slug}`);
                  }}
                >
                  <div
                    className="post-image"
                    style={{
                      backgroundImage: `url(${
                        baseUrl + post.thumbnail || "/dummy.png"
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>

                  <div className="post-content">
                    <div className="post-categories">
                      {post.category?.name ? (
                        <span className="category-tag">
                          {post.category.name}
                        </span>
                      ) : (
                        <span className="category-tag">Uncategorized</span>
                      )}
                    </div>

                    <h3 className="post-title">
                      {truncateTextByWords(post.title, 15)}
                    </h3>
                  </div>
                </div>

                <div className="divider-line"></div>
              </React.Fragment>
            ))
          )}
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

        <button
          className="cta-button"
          onClick={() => {
            router.push("/contact-us");
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
