import React, { useState } from "react";
import { StyledScroll } from "../styles";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <StyledScroll>
      <div
        className="scroll-container"
        style={{ opacity: visible ? "100%" : "0" }}
      >
        <button className="scroll-to-top" onClick={scrollToTop}>
          <svg
            width="22"
            height="26"
            viewBox="0 0 22 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.801228 12.3654C-0.0449079 11.5193 -0.0449081 10.1474 0.801228 9.30127L9.4679 0.634603C10.314 -0.211534 11.6859 -0.211534 12.532 0.634603L21.1987 9.30127C22.0448 10.1474 22.0448 11.5193 21.1987 12.3654C20.3526 13.2115 18.9807 13.2115 18.1346 12.3654L13.1666 7.39746L13.1666 23.8333C13.1666 25.0299 12.1966 26 11 26C9.80334 26 8.83329 25.0299 8.83329 23.8333L8.83329 7.39746L3.86536 12.3654C3.01922 13.2115 1.64736 13.2115 0.801228 12.3654Z"
              fill="#111827"
            />
          </svg>
        </button>
      </div>
    </StyledScroll>
  );
};

export default ScrollToTop;
