"use client";
import Button2 from "@/components/Buttons/Button2";
import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "var(--secondary-color)",
      }}
    >
      <h1
        className="not-found-heading"
        style={{
          fontSize: "120px",
          fontWeight: "900",
          margin: 0,
          display: "flex",
          gap: "10px",
        }}
      >
        <span
          style={{
            color: "#b4b4b4",
            textShadow: "-6px 0 0 #878787, -9px 0 0 #878787, -12px 0 0 #878787",
            transform: "scaleY(1.8)",
          }}
        >
          4
        </span>

        <span
          style={{
            color: "var(--primary-color)",
            textShadow: "-6px 0 0 #bb3700, -9px 0 0 #bb3700, -12px 0 0 #bb3700",
            transform: "scaleY(2)",
          }}
        >
          0
        </span>

        <span
          style={{
            color: "#b4b4b4",
            textShadow: "-6px 0 0 #878787, -9px 0 0 #878787, -12px 0 0 #878787",
            transform: "scaleY(1.8)",
          }}
        >
          4
        </span>
      </h1>

      <p style={{ fontSize: "18px", color: "#333", margin: "40px 0" }}>
        Oops! Page Not Found.
      </p>
      <img
        src="/not-found.svg"
        style={{ display: "flex", alignSelf: "flex-start", width: "90%" }}
      />
      <Button2 label="Go TO Home" />
    </div>
  );
};

export default NotFound;
