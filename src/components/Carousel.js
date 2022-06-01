import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import images from "./images.js";

import "./carousel.css";

function Carousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="carousel"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {images.map((image, index) => {
          return (
            <motion.div className="item" key={index}>
              <img src={image} alt="carousel-img" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Carousel;
