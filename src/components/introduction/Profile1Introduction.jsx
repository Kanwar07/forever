import React from "react";
import comma from "../../assets/comma.png";
import facebook from "../../assets/facebook.png";
import googleplus from "../../assets/googleplus.png";
import twitter from "../../assets/twitter.png";
import Navbar from "../navbar/Navbar";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Profile1Introduction = () => {
  return (
    <>
      <div>
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute z-20 w-full"
        >
          <Navbar />
        </motion.div>
        <div className="absolute flex flex-col justify-end items-center text-center w-full h-[36rem] z-10">
          <motion.div
            initial={{ x: -800 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[40px] mt-[20px] mb-[20px] text-[#ffffff]"
          >
            GERRARD LEANDRO
          </motion.div>
          <div className="m-4 h-16 w-40 flex flex-row justify-around items-center text-center">
            <img src={logo} alt="logo" className="h-10 w-44" />
          </div>
          <motion.div
            initial={{ x: 1150 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-[15px] mb-[25px] text-[#ffffff] ml-[22rem] mr-[22rem] max-[1000px]:ml-[0rem] max-[1000px]:mr-[0rem]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut
            vel turpis
          </motion.div>
          <div className="border bg-[#ffffff] h-[120px] w-[120px] rounded-full text-[150px] text-center flex justify-center items-center">
            <img src={comma} alt="comma" className="w-[6rem] h-[6rem]" />
          </div>
        </div>
        <div className="relative w-[100vw] h-[65vh]">
          <img
            src="https://demo.dethemes.com/forever/versions/top-bottom-bar/images/profile-him-1920-a.jpg"
            alt="guy"
            className="w-[100vw] h-[65vh] brightness-[0.75] bg-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-32 pr-60 pb-12 pl-60 max-[1000px]:pr-[10px] max-[1000px]:pl-[10px]">
        <div className="flex flex-row justify-center pb-[50px] gap-4">
          <div className="border p-4 rounded-full">
            <img src={facebook} alt="facebook" className="h-[3rem] w-[3rem]" />
          </div>
          <div className="border p-4 rounded-full">
            <img
              src={googleplus}
              alt="googleplus"
              className="h-[3rem] w-[3rem]"
            />
          </div>
          <div className="border p-4 rounded-full">
            <img src={twitter} alt="twitter" className="h-[3rem] w-[3rem]" />
          </div>
        </div>
        <div className="flex flex-row gap-8 text-[##6a6a6a] text-[15px] mb-[25px] opacity-60 max-[1000px]:flex-col max-[1000px]:gap-0">
          <div>
            <span className="font-bold">I'm Gerrard Leandro.</span> Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Fusce urna urna,
            imperdiet et purus ut, ultricies sollicitudin arcu. Cras placerat,
            arcu non faucibus suscipit, ex arcu consectetur enim, eu malesuada
            magna turpis sit amet mauris. Nullam nec leo at lorem interdum
            commodo. Etiam mollis massa in mauris lacinia porta. Pellentesque
            tristique, ante nec dictum mollis, felis ligula ullamcorper velit,
            ac auctor est ipsum vehicula ex. Donec eu blandit est, id gravida
            justo. Maecenas laoreet laoreet congue. Cras sit amet vestibulum
            ligula. Ut nec erat tristique, iaculis purus ac, pellentesque mi.
            Donec ac cursus est. Nunc id varius enim, ut tincidunt mi. Integer
            non est eros. Aliquam ex magna, elementum at dignissim vitae,
            placerat quis ante.
            <br />
            <br />
            Morbi a condimentum quam. Nullam quis quam at ex eleifend feugiat.
            Vivamus lacinia quam quam, ac viverra turpis pellentesque in. Mauris
            sollicitudin sapien risus, non sagittis velit dictum eget.
            Suspendisse velit lacus, pulvinar non ante
          </div>
          <div>
            ut, venenatis vehicula dolor. In hac habitasse platea dictumst. Nunc
            blandit egestas magna eu commodo. Proin ut eros ante. Mauris vitae
            tempus sem, ac venenatis arcu. Etiam eget blandit arcu, quis
            consequat nunc. Nunc pulvinar vehicula pellentesque. Sed auctor
            scelerisque mi. Curabitur mattis consequat lacus non iaculis.
            <br />
            <br />
            Integer justo nibh, ullamcorper et dolor ut, porta dapibus ante. Sed
            quis ex at felis ornare pharetra vitae id dolor. Donec finibus
            sagittis ipsum, tristique luctus tellus pharetra ultrices.
            Suspendisse mollis, tortor non placerat placerat, ligula odio luctus
            est, sit amet scelerisque diam ante tristique massa. Aenean molestie
            tellus a quam porttitor vehicula. Aliquam quis eros risus. Sed
            porttitor elit et diam feugiat egestas. Proin consequat suscipit
            accumsan. Curabitur mauris risus, tincidunt ut odio non, scelerisque
            vehicula metus. Proin urna odio, dignissim vitae nibh vitae,
            consectetur placerat tortor. In a ante ultrices, mollis erat eget,
            sagittis metus. Mauris sodales
          </div>
        </div>
      </div>
      <div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute flex flex-col justify-center items-center text-center z-10 w-full h-[32rem]"
        >
          <div className="m-4 h-16 w-40 flex flex-row justify-around items-center text-center">
            <img src={logo} alt="logo" className="h-10 w-44" />
          </div>
          <div className="text-[20px] mt-[10px] text-[#ffffff]">
            GERRARD & DIANNE
          </div>
        </motion.div>
        <div className="relative w-full h-96">
          <img
            src="https://demo.dethemes.com/forever/versions/top-bottom-bar/images/footer-image-3.jpg"
            alt="guy"
            className="w-full h-[32rem] brightness-[0.75]"
          />
        </div>
      </div>
    </>
  );
};

export default Profile1Introduction;
