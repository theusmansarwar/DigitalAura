"use client";
import React from "react";
import Button2 from "./Buttons/Button2";
import { useRouter } from "next/navigation";

const ComingSoon = () => {
  const router = useRouter();

  return (
    <div
      className="coming-soon"
      style={{ width: "100%", padding: "40px var(--left-space)" }}
    >
      <img
        src="/coming-soon.svg"
        alt="Coming Soon"
        style={{ display: "flex", justifySelf: "center", width: "40%" }}
      />
      <Button2 label="Go TO Home" onClick={() => router.push("/")} />
    </div>
  );
};

export default ComingSoon;
