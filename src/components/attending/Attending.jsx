import React from "react";
import { motion } from "framer-motion";
import logo2 from "../../assets/logo2.png";

function Attending() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="pb-[85px] flex flex-col justify-center items-center"
    >
      <div className="m-2 h-16 w-40 flex flex-row justify-around items-center text-center">
        <img src={logo2} alt="logo2" className="h-11 w-44" />
      </div>
      <div className="text-[40px] mt-[20px] mb-[20px]">ARE YOU ATTENDING?</div>
      <div className="text-[15px] mb-[25px] text-[#6A6A6A]">
        Please reserve before June 19th, 2015. Lorem ipsum dolor sit amet,
        consectetur adipiscing
      </div>
      <button className="border mt-[20px] pt-[10px] pr-[50px] pb-[10px] pl-[50px]">
        RSVP
      </button>
    </motion.div>
  );
}

export default Attending;
