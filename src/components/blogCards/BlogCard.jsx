"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./BlogCard.css";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import truncateTextByWords from "@/utils/TruncateByWords";
import { PaginationItem } from "@mui/material";
import Button2 from "../Buttons/Button2";

const links = [
  "All",
  "Modern",
  "Industrial",
  "Art Moderne",
  "Technology",
  "Designs",
  "Minimalist",
  "Minimalist",
  "Minimalist",
  "Minimalist",
];

const BlogCard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialPage = parseInt(searchParams.get("page")) || 1;

  const [page, setPage] = useState(initialPage);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  const ulRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeLink, setActiveLink] = useState(0);

  const itemsPerPage = 9;

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://plutosec.ca/backend/api/blog/list?limit=${itemsPerPage}&page=${page}`,
        { cache: "no-store" }
      );
      const data = await res.json();

      if (data?.blogs) {
        setBlogs(data.blogs);
        setTotalPages(data.totalPages || 1);
      } else {
        setBlogs([]);
        setTotalPages(1);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event, value) => {
    setPage(value);
    router.push(`?page=${value}`);
  };

  const handleClick = (slug) => {
    router.push(`/blogs/${slug}`);
  };

  const scrollLeft = () => {
    if (ulRef.current) {
      ulRef.current.scrollBy({ left: -200, behavior: "smooth" });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (ulRef.current) {
      ulRef.current.scrollBy({ left: 200, behavior: "smooth" });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const checkScrollButtons = () => {
    if (!ulRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = ulRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  return (
    <div className="blog-cards-container">
      <Button2 label="Blogs" />
      <div className="header">
        <div className="left">
          <CiCircleChevLeft
            onClick={scrollLeft}
            className={`scroll-btn ${!canScrollLeft ? "disabled" : ""}`}
          />
          <ul ref={ulRef} onScroll={checkScrollButtons}>
            {" "}
            {links.map((tab, index) => (
              <li
                key={index}
                className={activeLink === index ? "active" : ""}
                onClick={() => {
                  setActiveLink(index);
                  setPage(1);
                }}
              >
                {" "}
                {tab}{" "}
              </li>
            ))}{" "}
          </ul>
          <CiCircleChevRight
            onClick={scrollRight}
            className={`scroll-btn ${!canScrollRight ? "disabled" : ""}`}
          />
        </div>

        <div className="right">
          <label>Sort by:</label>
          <select>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      <div className="blog-grid">
        {loading ? (
          <p>Loading...</p>
        ) : blogs.length > 0 ? (
          blogs.map((post) => (
            <div
              key={post._id}
              className="blog-post-card"
              onClick={() => handleClick(post.slug)}
            >
              <div
                className="post-image"
                style={{
                  backgroundImage: `url(https://plutosec.ca/backend/api${post.thumbnail})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                }}
              />
              <div className="post-content">
                <span className="date">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
                <h3 className="post-title">
                  {truncateTextByWords(post.title, 10)}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>

      <Stack spacing={2} sx={{ alignItems: "center", mb: "30px" }}>
        <Pagination
          siblingCount={1}
          boundaryCount={2}
          count={totalPages}
          page={page}
          onChange={handleChange}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              components={{
                previous: () => <span>Previous</span>,
                next: () => <span>Next</span>,
              }}
              sx={{
                ...(item.type === "page" && {
                  color: "var(--text-color4)",
                  border: "none",
                  fontWeight: 500,
                  minWidth: "40px",
                  height: "40px",
                  margin: "0 4px",
                  borderRadius: "50%",
                  "&.Mui-selected": {
                    backgroundColor: "var(--text-color4)",
                    color: "var(--main-color)",
                    border: "none",
                    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)",
                    "&:hover": { backgroundColor: "var(--text-color4)" },
                  },
                }),
                ...(item.type === "previous" && {
                  backgroundColor: "var(--text-color4)",
                  color: "var(--main-color)",
                  borderRadius: "25px",
                  padding: "0 15px",
                  minWidth: "80px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                  letterSpacing: "0.05em",
                  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)",
                  "&:hover": {
                    backgroundColor: "#f6efefff",
                    color: "var(--main-color)",
                  },
                }),
                ...(item.type === "next" && {
                  backgroundColor: "var(--main-color)",
                  color: "var(--text-color4)",
                  borderRadius: "25px",
                  padding: "0 15px",
                  minWidth: "80px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                  letterSpacing: "0.05em",
                  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)",
                  "&:hover": {
                    backgroundColor: "#222",
                    color: "var(--text-color4)",
                  },
                }),
              }}
            />
          )}
          sx={{
            backgroundColor: "var(--primary-color)",
            padding: "5px",
            borderRadius: "30px",
          }}
        />
      </Stack>
    </div>
  );
};

export default BlogCard;
