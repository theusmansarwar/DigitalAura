"use client";
import React, { useEffect, useState } from "react";
import "./LatestBlogs2.css";
import { baseUrl } from "@/app/config/Config";
import { formatDate } from "@/utils/FormatDate";
import { fetchallBloglist, fetchBlogCategories } from "@/DAL/Fetch";
import Button2 from "../Buttons/Button2";

const LatestBlogs2 = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        // 1. Get categories
        const categoryRes = await fetchBlogCategories();
        const categories = categoryRes?.categories || [];

        // 2. Find "Latest" category
        const latestCategory = categories.find(
          (cat) => cat.name?.toLowerCase() === "latest"
        );

        if (!latestCategory) {
          console.warn("No 'Latest' category found");
          setBlogs([]);
          return;
        }

        // 3. Fetch blogs from that category
        const res = await fetchallBloglist(latestCategory._id, 1, 5, "");
        if (res?.blogs?.length) {
          setBlogs(res.blogs.slice(0, 5)); // take only first 5
        } else {
          setBlogs([]);
        }
      } catch (err) {
        console.error("Error fetching latest blogs:", err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestBlogs();
  }, []);

  return (
    <><Button2 label="Latest Blogs" />
    <div className="latest-blogs2">
      
      {loading ? (
        <p>Loading...</p>
      ) : blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog._id} className="card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${baseUrl + blog.thumbnail})` }}
            ></div>
            <div className="card-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <div className="card-footer">
                <span>{formatDate(blog.createdAt)}</span>
                <a href={`/blogs/${blog.slug}`}>Read more</a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No latest blogs found.</p>
      )}
    </div>
    </>
  );
};

export default LatestBlogs2;
