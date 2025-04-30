"use client";
import React from "react";

export default function SectionWithAOS({ children, animation = "fade-up", className = "" }: { children: React.ReactNode, animation?: string, className?: string }) {
  return (
    <div data-aos={animation} className={className}>
      {children}
    </div>
  );
} 