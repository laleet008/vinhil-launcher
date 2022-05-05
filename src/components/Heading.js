import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Heading = () => {
  return (
    <div className="main h-[100px] ">
      <div className="md:mx-40 mx-10">
        <Link to="/">
          <div>
            <motion.img
              src="assets/app-logo.png"
              className="md:h-[60] h-[40px] w-[40px]  ml-10"
              alt=""
              animate={{ x: 30 }}
            />
            <motion.p
              animate={{ y: 5 }}
              className="logo-heading uppercase text-[#C67E00] md:text-[25px] text-[20px] font-bold"
            >
              VinHil Launcher
            </motion.p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Heading;
