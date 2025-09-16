"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "./BlogCard.css";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import truncateTextByWords from "@/utils/TruncateByWords";
import {
  Stack,
  Pagination,
  Select,
  MenuItem,
  Typography,
  PaginationItem,
} from "@mui/material";

import Button2 from "../Buttons/Button2";
import { FaChevronDown } from "react-icons/fa";
import axios from "axios";
import { fetchallBloglist, fetchBlogCategories } from "@/DAL/Fetch";
import { baseUrl } from "@/app/config/Config";

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
  const [totalItems, setTotalItems] = useState(0);

  const ulRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeLink, setActiveLink] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(9);
  const [categories, setCategories] = useState([{ _id: "all", name: "All" }]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetchBlogCategories();
        const data = res.categories || [];

        // Prepend All to fetched categories
        setCategories([{ _id: "all", name: "All" }, ...data]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchData();
  }, [page, rowsPerPage, activeCategory]);

  const fetchData = async () => {
  setLoading(true);
  try {
    // If activeCategory is "all", pass empty string (no filter)
    const categoryId = activeCategory === "all" ? "" : activeCategory;

    const res = await fetchallBloglist(categoryId, page, rowsPerPage, "");

    if (res?.blogs) {
      setBlogs(res.blogs);
      setTotalPages(res.totalPages || 1);
      setTotalItems(res.totalBlogs || res.blogs.length);
    } else {
      setBlogs([]);
      setTotalPages(1);
      setTotalItems(0);
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
    setBlogs([]);
    setTotalPages(1);
    setTotalItems(0);
  } finally {
    setLoading(false);
  }
};

  const handleChangePage = (event, value) => {
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

  // Range calculation
  const start = totalItems > 0 ? (page - 1) * rowsPerPage + 1 : 0;
  const end = Math.min(page * rowsPerPage, totalItems);
  const desc = [
    "The DigitalAura blog brings you fresh insights into the digital world. You explore proven tips on digital marketing, YouTube automation, SEO strategies, and creative design. Each post is written to guide you with simple steps that create measurable results. We cover trends that help you stay ahead and case studies that show real success. Our goal is to give you practical knowledge that makes digital growth easy, smart, and effective.",
  ];
  return (
    <div className="blog-cards-container">
      <Button2 label="Blogs" data={desc} />
      <div className="header">
        <div className="left">
          <CiCircleChevLeft
            onClick={scrollLeft}
            className={`scroll-btn ${!canScrollLeft ? "disabled" : ""}`}
          />
          <ul ref={ulRef} onScroll={checkScrollButtons}>
            {categories.map((cat, index) => (
              <li
                key={cat._id || "all"}
                className={activeCategory === cat._id ? "active" : ""}
                onClick={() => {
                  setActiveCategory(cat._id);
                  setActiveLink(index);
                  setPage(1);
                }}
              >
                {cat.name}
              </li>
            ))}
          </ul>

          <CiCircleChevRight
            onClick={scrollRight}
            className={`scroll-btn ${!canScrollRight ? "disabled" : ""}`}
          />
        </div>

        <div className="right">
          <label>Sort by:</label>
          <div className="select-wrapper">
            <select className="sort-select">
              <option>Newest</option>
              <option>Oldest</option>
            </select>
            <FaChevronDown className="select-icon" />
          </div>
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
                  backgroundImage: `url(${baseUrl + post.thumbnail})`,
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

      {/* Pagination Section */}
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 3 }}
      >
        {/* Left: Showing range */}
        <Typography>
          {start}-{end} of {totalItems} items
        </Typography>

        {/* Middle: Pagination */}
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          siblingCount={1}
          boundaryCount={0}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              slots={{
                first: BiFirstPage,
                previous: MdChevronLeft,
                next: MdChevronRight,
                last: BiLastPage,
              }}
              {...item}
            />
          )}
          sx={{
            "& .MuiPaginationItem-root": {
              borderRadius: "6px",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#f4511e",
              color: "#fff",
            },
            "& .MuiPaginationItem-root.MuiPaginationItem-previousNext, & .MuiPaginationItem-root.MuiPaginationItem-firstLast":
              {
                backgroundColor: "#f4511e",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#d84315",
                },
              },
          }}
        />

        {/* Right: Items per page */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <Select
            size="small"
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(e.target.value);
              setPage(1);
            }}
            sx={{ minWidth: 60 }}
          >
            {[5, 9, 10, 20].map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </Select>
          <Typography>Items per page</Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default BlogCard;
