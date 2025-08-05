"use client";

import { SpiralAnimation } from "@/components/ui/spiral-animation";
import classNames from "classnames";
import { useState, useEffect } from "react";

const Loader = () => {
  const [hide, setHide] = useState(false);
  const [startVisible, setStartVisible] = useState(false);
  const [hideStarts, setHideStarts] = useState(false);

  const navigateToPersonalSite = () => {
    setHide(true);
  };

  useEffect(() => {
    const timerAlpha = setTimeout(() => {
      setStartVisible(true);
    }, 10000);

    const timerBeta = setTimeout(() => {
      setHideStarts(true);
    }, 13000);

    return () => {
      clearTimeout(timerAlpha);
      clearTimeout(timerBeta);
    };
  }, []);

  const mainWrapperClass = classNames(
    "fixed inset-0 z-10 w-full h-full overflow-hidden bg-black transition-all duration-1000 ease-out",
    hide ? "opacity-0 pointer-events-none" : ""
  );

  const starWrapperClass = classNames(
    `absolute inset-0 transition-all duration-1500 ease-out`,
    hideStarts ? "opacity-0" : "opacity-100"
  );

  const buttonWrapperClass = classNames(
    `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-1500 ease-out`,
    startVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 pointer-events-none translate-y-4"
  );

  const buttonClass =
    "text-white text-2xl tracking-[0.2em] uppercase font-extralight transition-all duration-700 cursor-pointer hover:tracking-[0.3em] animate-pulse";

  return (
    <div className={mainWrapperClass}>
      <div className={starWrapperClass}>
        <SpiralAnimation />
      </div>
      <div className={buttonWrapperClass}>
        <button onClick={navigateToPersonalSite} className={buttonClass}>
          Enter
        </button>
      </div>
    </div>
  );
};

export default Loader;
