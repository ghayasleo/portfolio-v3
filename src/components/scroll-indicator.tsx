"use client";
import { useEffect, useState } from "react";

function ScrollIndicator() {
  const [thumbTop, setThumbTop] = useState(0);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    const fullHtmlHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    const handleScroll = () => {
      const total = fullHtmlHeight - window.innerHeight;
      console.log({ fullHtmlHeight, innerHeight: window.innerHeight, scrollY: window.scrollY, percentage: window.scrollY * 100 / total })
      setThumbTop((window.scrollY) * 100 / total);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-19.25 w-[1.75] mx-auto bg-[#bcbcbc]/30 rounded overflow-hidden">
      <div
        className="absolute w-full h-4 bg-[#bcbcbc] rounded"
        style={{
          top: `${thumbTop}%`,
          translate: `0 -${thumbTop}%`,
          transition: "all 0.1s linear",
        }}
      />
    </div>
  );
}

export default ScrollIndicator;
