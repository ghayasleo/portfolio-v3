"use client";

import { SpiralAnimation } from "@/components/ui/spiral-animation";
import classNames from "classnames";
import { useState, useEffect } from "react";

const Loader = () => {
  const [hide, setHide] = useState(false);
  const [startVisible, setStartVisible] = useState(false);

  const navigateToPersonalSite = () => {
    setHide(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={classNames("fixed inset-0 z-10 w-full h-full overflow-hidden bg-black transition-all duration-3000 ease-out", hide ? "opacity-0 pointer-events-none" : "")}>
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>
      <div
        className={`
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
          transition-all duration-1500 ease-out
          ${
            startVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }
        `}
      >
        <button
          onClick={navigateToPersonalSite}
          className="
            text-white text-2xl tracking-[0.2em] uppercase font-extralight
            transition-all duration-700
            hover:tracking-[0.3em] animate-pulse
          "
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default Loader;
