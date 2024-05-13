import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

function ThankYou() {
  return (
    <div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute z-10 flex flex-col justify-center items-center text-center w-full h-[38rem]"
      >
        <div className="-rotate-12 text-[55px] w-64 text-[#ffffff] leading-none">
          Thank You
        </div>
        <div className="m-4 h-16 w-40 flex flex-row justify-around items-center text-center">
          <img src={logo} alt="logo" className="h-10 w-44" />
        </div>
        <div className="text-[#ffffff] text-[20px] mt-[10px]">
          GERRARD & DIANNE
        </div>
      </motion.div>
      <div className="relative">
        <img
          src="https://demo.dethemes.com/forever/versions/top-bottom-bar/images/slide-image-1920-h.jpg"
          alt="thankyou"
          className="w-full h-[38rem] brightness-[0.75]"
        />
      </div>
    </div>
  );
}

export default ThankYou;
