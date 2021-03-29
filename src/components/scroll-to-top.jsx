import React, { useEffect, useState } from "react";
import { ChevronDoubleUp } from "react-bootstrap-icons";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className="scroll-to-top arrow"
      style={{ position: "relative", zIndex: "2" }}
    >
      {isVisible && (
        <div onClick={scrollToTop}>
          <ChevronDoubleUp alt="Go to top" />
          <b>Back To Top</b>
        </div>
      )}
    </div>
  );
}