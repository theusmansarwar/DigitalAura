"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./Button.css"; 

export default function Button({ variant = "filled", children }) {
  return (
    <button className={`${variant}-btn`}>
      {children}
      <span>
        <FaArrowRight />
      </span>
    </button>
  );
}
