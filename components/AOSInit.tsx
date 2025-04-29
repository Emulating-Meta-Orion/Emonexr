"use client";
import { useEffect } from "react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({ once: true, duration: 100, offset: 50 });
  }, []);
  return null;
} 