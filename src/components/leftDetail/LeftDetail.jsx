"use client"
import React, { useEffect, useState } from 'react';
import './LeftDetail.css';
import axios from "axios";

const LeftDetail = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://plutosec.ca/backend/api/blog/view/cybersecurity-compliance-for-canadian-businesses`
        );
        console.log("API RESPONSE:", res.data);
        setUserData(res.data.blog);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="full-detail">
        {loading ? (
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <>
            <div
              dangerouslySetInnerHTML={{ __html: userData?.detail }}
              className="custom-html-styles px-4 sm:px-8 mt-6 text-white"
            ></div>

            <button className="load-more-btn">
              <img
                src="/down.png"
                alt="Arrow down"
                className="arrow-icon"
              />
              Load more
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default LeftDetail;
