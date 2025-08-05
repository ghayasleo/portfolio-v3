"use client";

import classNames from "classnames";
import React, { useEffect, useState } from "react";

const boxStyle = {
  mainBox:
    "w-20 h-20 border-1 border-solid border-[#414141] absolute top-15 left-15",
  line: "after:content-[''] after:block after:w-[111px] after:h-[1px] after:bg-[#414141] after:rotate-45 after:absolute after:inset-0 after:origin-top-left after:-translate-y-[0.5px]",
};

function Hero() {
  const [activeTitle, setActiveTitle] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-title]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.getAttribute("data-title");
            if (title) setActiveTitle(title);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -100% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <section
      className="font-jbmono py-15 px-15 bg-[url(/img/black-felt.png)] min-h-[100vh] relative"
      id="home"
      data-title="Home"
    >
      <div className={classNames(boxStyle.mainBox, boxStyle.line)}></div>

      <span className="fixed top-0 bottom-0 left-15 m-auto h-fit uppercase text-sm">
        <span className="block -rotate-90 tracking-widest">{activeTitle}</span>
      </span>

      <header className="flex items-start max-w-360 mx-auto">
        <div className="pl-30">
          <span className="block uppercase mb-10">Ghayas Ud Din</span>

          <span className="block text-xs uppercase text-white/50 mb-3">
            Developer
          </span>
          <span className="block text-xs uppercase text-white/50">
            23&apos;
          </span>
        </div>

        <nav className="flex gap-2 items-center ml-auto">
          <a
            href="#about"
            className="block text-sm uppercase text-white/50 transition-all hover:text-white"
          >
            About
          </a>
          <span className="block text-2xl uppercase text-white/50">/</span>
          <a
            href="#services"
            className="block text-sm uppercase text-white/50 transition-all hover:text-white"
          >
            Services
          </a>
          <span className="block text-2xl uppercase text-white/50">/</span>
          <a
            href="#portfolio"
            className="block text-sm uppercase text-white/50 transition-all hover:text-white"
          >
            Portfolio
          </a>
        </nav>
      </header>
    </section>
  );
}

export default Hero;
