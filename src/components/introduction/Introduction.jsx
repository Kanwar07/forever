import React from "react";
import { motion } from "framer-motion";
import logo2 from "../../assets/logo2.png";

const Introduction = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-12 pr-48 pb-12 pl-48 mt-12">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-[40px] text-[#333333]"
      >
        THE HAPPY COUPLE
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center text-[px] text-[#6a6a6a] mt-4"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel
        turpis accumsan, efficitur dolor fermentum, tincidunt metus.
      </motion.div>
      <div className="m-4 h-16 w-40 flex flex-row justify-around items-center text-center">
        <img src={logo2} alt="logo2" className="h-11 w-44" />
      </div>
      <div className=" flex flex-row w-screen justify-center mt-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="https://demo.dethemes.com/forever/versions/top-bottom-bar/images/him2.jpg"
            alt="profile1"
            className="size-96 mr-4 transition-transform duration-1000 ease-in-out transform hover:scale-110"
          />
          <div className="w-[25rem] h-[10rem] mr-4 mt-[40px] mb-[40px] text-[#6a6a6a]">
            <span className="font-bold text-[15px] text-[#000000]">
              I'm Gerrard Leandro.
            </span>{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut
            vel turpis accumsan, efficitur dolor fermentum, tincidunt metus.
            Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus.
            Proin pulvinar.
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <img
            src="https://demo.dethemes.com/forever/versions/top-bottom-bar/images/her2.jpg"
            alt="profile2"
            className="size-96 ml-4 transition-transform duration-1000 ease-in-out transform hover:scale-110"
          />
          <div className="w-[25rem] h-[10rem] ml-4 mt-[40px] mb-[40px] text-[#6a6a6a]">
            <span className="font-bold text-[15px] text-[#000000]">
              I'm Dianne Anna.
            </span>{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut
            vel turpis accumsan, efficitur dolor fermentum, tincidunt metus.
            Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus.
            Proin pulvinar.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
