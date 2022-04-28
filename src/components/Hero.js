import React from "react";
import "./styles.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="main_container">
      <div className="md:mx-40 mx-10">
        <div className="flex md:flex-row flex-col md:gap-20  ">
          <motion.div
            className="md:w-1/2 flex flex-col justify-center mb-16"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <span className="md:text-[58px] text-[40px]  font-bold text-white">
              Vinhill Launcher.
            </span>
            <p className="md:text-[32px] text-[20px] mt-4 text-gray-200">
              Design To Save Precious Time And Be More Productive
            </p>
          </motion.div>
          <div className="relative">
            <motion.img
              src="assets/hero-img1.png"
              className="md:absolute h-[600px]"
              alt="Hero first img"
              whileHover={{
                scale: 1.1,
              }}
            />
            <motion.img
              src="assets/hero-img2.png"
              className="ml-64 md:block hidden h-[550px] mt-6"
              alt="Hero second img"
              whileHover={{
                scale: 1.1,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
