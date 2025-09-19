"use client";
import React, { useEffect, useState } from "react";
import "./LatestBlogs2.css";
import { baseUrl } from "@/app/config/Config";
import { formatDate } from "@/utils/FormatDate";
import { fetchallBloglist } from "@/DAL/Fetch";
import Button2 from "../Buttons/Button2";
import { useRouter } from "next/navigation";
import BCard from "../SkeletonLoaders/BCard";
import BCard2 from "../SkeletonLoaders/BCard2";
import truncateTextByWords from "@/utils/TruncateByWords";

const LatestBlogs2 = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const res = await fetchallBloglist("", 1, 3, "");
        if (res?.blogs?.length) {
          setBlogs(res.blogs);
        } else {
          setBlogs([]);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestBlogs();
  }, []);

  return (
    <>
      <Button2 label="Latest Blogs" />
      <div className="latest-blogs2">
        {loading ? (
          <BCard2 />
        ) : blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="latestblogs2-card"
              onClick={() => {
                router.push(`/blogs/${blog.slug}`);
              }}
            >
              <div
                className="latestblogs2-card-image"
                style={{
                  backgroundImage: `url(${baseUrl + blog.thumbnail})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="latestblogs2-card-content">
                <h3> {truncateTextByWords(blog.title, 10)}</h3>
                <p> {truncateTextByWords(blog.description, 20)}</p>
                <div className="latestblogs2-card-footer">
                  <span>{formatDate(blog.createdAt)}</span>
                  <span>Read more</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </>
  );
};

export default LatestBlogs2;
