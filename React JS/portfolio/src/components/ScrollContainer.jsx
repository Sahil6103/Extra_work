import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export const ScrollContainer = ({ children }) => {
  const scrollRef = useRef(null);
  let locomotiveScroll = useRef(null);

  useEffect(() => {
    locomotiveScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (locomotiveScroll.current) locomotiveScroll.current.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};
