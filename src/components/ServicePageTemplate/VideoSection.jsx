"use client";
import React, { useState } from "react";
import "./VideoSection.css";
import { IoPlayCircleOutline } from "react-icons/io5";

const VideoSection = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!data) return null; 

  // Convert normal YouTube watch links into embed links
  const getEmbedUrl = (url) => {
    if (!url) return "";
    return url.replace("watch?v=", "embed/");
  };

  // const handlePlayClick = () => {
  //   setIsPlaying(true);
  // };

  return (
    <div className="video-section">
      <h2>Our Video</h2>
      {data.description && <p>{data.description}</p>}

      {/* {!isPlaying ? (
        <div
          className="thumbnail-container"
          style={{
            backgroundImage: `url(/buildings.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <IoPlayCircleOutline
            className="play-icon"
            onClick={handlePlayClick}
          />
        </div>
      ) : ( */}
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
      {/* )} */}
    </div>
  );
};

export default VideoSection;
