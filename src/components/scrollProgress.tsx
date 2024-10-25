import React, { useEffect, useState } from "react";

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-0 top-0 h-full w-[0.15rem] bg-primary z-[9999] hidden md:flex">
      <div
        className="relative bg-secondary w-full rounded transition-all duration-300 ease-out"
        style={{ height: `${scrollProgress}%` }}
      >
        {/* Lighting Effect */}
        <span className="absolute left-0 bottom-0 w-full h-6 bg-gradient-to-t from-white via-white/90 to-transparent animate-glow"></span>
        {/* <span className="absolute left-0 bottom-0 w-full h-4 bg-gradient-to-t from-white via-secondary to-transparent animate-glow"></span> */}
      </div>
    </div>
  );
};

export default ScrollProgress;

