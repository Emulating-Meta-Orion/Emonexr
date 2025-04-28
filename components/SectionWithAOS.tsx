"use client";
import React from "react";

export default function SectionWithAOS({ children, animation = "fade-up", className = "" }) {
  return (
    <div data-aos={animation} className={className}>
      {children}
    </div>
  );
} 