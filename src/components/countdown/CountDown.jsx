import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

function CountDown() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute z-10 flex flex-col justify-around items-center h-96"
      >
        <div>
          <hr className="pb-0.5" />
          <hr />
          <div className="p-2 text-[#ffffff]">
            *** AT FOXEGAN HOTEL & RESTAURANT, LOS ANGELES ***
          </div>
          <hr className="pb-0.5" />
          <hr />
        </div>
        <div className="-rotate-12 text-[55px] w-64 text-[#ffffff] leading-none">
          Counting Down
        </div>
        <div className="m-4 h-16 w-40 flex flex-row justify-around items-center text-center">
          <img src={logo} alt="logo" className="h-10 w-44" />
        </div>
        <div className="text-[#ffffff] text-[20px]">
          0W{"  "}0D{"  "}0h{"  "}0m{"  "}0s
        </div>
      </motion.div>
      <div className="relative">
        <img
          src="https://demo.dethemes.com/forever/versions/top-bottom-bar/images/parallax-image-1a.jpg"
          alt="nature"
          className="w-screen h-[36rem] brightness-[0.75]"
        />
      </div>
    </div>
  );
}

export default CountDown;
