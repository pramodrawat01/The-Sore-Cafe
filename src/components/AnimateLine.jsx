import { useEffect, useState, useRef } from "react";

const AnimateLine = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (lineRef.current) {
        const rect = lineRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={lineRef}
      className={`absolute top-[600px] left-[50%] translate-x-[-50%] h-[5px] bg-white transition-all duration-1000 ease-in-out ${
        isVisible ? "w-[750px]" : "w-0"
      }`}
    ></div>
  );
};

export default AnimateLine;
