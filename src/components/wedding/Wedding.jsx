import React from "react";
import data from "../../data/Data.json";
import Card from "../cards/Card";
import { motion } from "framer-motion";
import logo2 from "../../assets/logo2.png";

function Wedding() {
  return (
    <div className="w-full pt-[140px] pb-[80px] flex flex-col justify-center items-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-[40px] mt-[20px] mb-[20px]"
      >
        The Wedding
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-[15px] mt-[20px] mb-[25px] text-[#6a6a6a]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit
        amet, consectetur adipiscing
      </motion.div>
      <div className="mt-[16px] mb-[20px] h-16 w-40 flex flex-row justify-around items-center text-center">
        <img src={logo2} alt="logo2" className="h-11 w-44" />
      </div>
      <motion.div className="grid grid-cols-3 grid-flow-row gap-4 w-2/3 max-[1000px]:grid-cols-1">
        {data.map((item) => {
          const { id, title, url, description } = item;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <Card {...{ id, title, url, description }} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Wedding;
