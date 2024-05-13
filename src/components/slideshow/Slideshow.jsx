import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Navbar from "../navbar/Navbar";
import SlideshowText from "../slideshowtext/SlideshowText";
import { motion } from "framer-motion";

const slideImages = [
  {
    url: "https://demo.dethemes.com/forever/versions/top-bottom-bar/images/slide-image-1920-c.jpg",
    caption: "Slide 1",
  },
  {
    url: "https://demo.dethemes.com/forever/versions/top-bottom-bar/images/slide-image-1920-d.jpg",
    caption: "Slide 2",
  },
  {
    url: "https://demo.dethemes.com/forever/versions/top-bottom-bar/images/slide-image-1920-f.jpg",
    caption: "Slide 3",
  },
  {
    url: "https://demo.dethemes.com/forever/versions/top-bottom-bar/images/slide-image-1920-h.jpg",
    caption: "Slide 4",
  },
];

const Slideshow = () => {
  return (
    <>
      <div className="relative z-0">
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute z-20 w-full"
        >
          <Navbar />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute z-10 w-full h-full items-center"
        >
          <SlideshowText />
        </motion.div>
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                className="flex items-center justify-center bg-cover h-screen brightness-[0.75]"
                style={{ backgroundImage: `url(${slideImage.url})` }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

export default Slideshow;
