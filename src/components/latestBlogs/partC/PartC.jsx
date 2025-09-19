"use client";
import React from "react";
import "./PartC.css";
import { formatDate } from "@/utils/FormatDate";
import { baseUrl } from "@/app/config/Config";
import truncateTextByWords from "@/utils/TruncateByWords";
import { useRouter } from "next/navigation";

const PartC = ({ blogs = [] }) => {
  const router = useRouter();

  if (!blogs.length) return null;

  const blog = blogs[0];

  return (
    <div className="featured-wrapper">
      <div className="featured-card">
        <div className="featured-text">
          <h2>{blog.title}</h2>
          <p>{truncateTextByWords(blog.description, 35)}</p>
          <div className="featured-footer">
            <span>{formatDate(blog.createdAt)}</span>
            <span
              onClick={() => {
                router.push(`/blogs/${blog.slug}`);
              }}
            >
              Read more
            </span>
          </div>
        </div>
        <div
          className="featured-image"
          style={{
            backgroundImage: `url(${baseUrl + blog.thumbnail})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <div className="see-more-container">
        <button className="see-more-btn">
          See more
          <span className="arrow-icon">
            <img src="/Vector.png" alt="arrow" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default PartC;
