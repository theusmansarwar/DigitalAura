"use client";
import React, { useState } from "react";
import "./VideoSection.css";

const VideoSection = ({ data }) => {

  if (!data) return null; 

  // Convert normal YouTube watch links into embed links
  const getEmbedUrl = (url) => {
    if (!url) return "";
    return url.replace("watch?v=", "embed/");
  };


  return (
    <div className="video-section">
      <h2>Our Video</h2>
        <div
        className="service-description"
        dangerouslySetInnerHTML={{ __html: data?.description || "" }}
      />

        <div className="thumbnail-container">
          <iframe
            src={getEmbedUrl(data.url)}
            allow="autoplay; encrypted-media"
            width="100%"
            height="100%"
            allowFullScreen
            frameBorder={0}
          ></iframe>
        </div>
    
    </div>
  );
};

export default VideoSection;
