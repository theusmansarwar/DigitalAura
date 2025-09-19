"use client";
import React, { useEffect, useState } from "react";
import Button2 from "../Buttons/Button2";
import PartA from "./partA/PartA";
import PartB from "./partB/PartB";
import PartC from "./partC/PartC";
import { fetchallBloglist } from "@/DAL/Fetch";
import LatestBlogsLoader from "../SkeletonLoaders/LatestBlogsLoader";

const LatestBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        // Fetch all blogs (page 1, limit 5)
        const res = await fetchallBloglist("", 1, 5, "");
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

  const firstBlog = blogs[0] ? [blogs[0]] : [];
  const middleBlogs = blogs.slice(1, 4);
  const lastBlog = blogs[4] ? [blogs[4]] : [];

  return (
    <div className="latest-blogs-section">
      <Button2 label="Latest Blogs" />

      {loading ? (
        <LatestBlogsLoader/>
      ) : blogs.length > 0 ? (
        <>
          <PartA blogs={firstBlog} />
          <PartB blogs={middleBlogs} />
          <PartC blogs={lastBlog} />
        </>
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
};

export default LatestBlog;
