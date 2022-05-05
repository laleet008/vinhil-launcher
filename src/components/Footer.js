import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const currentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <div className="main h-[80px]">
      <div className="md:mx-40 py-3 mx-10 flex md:flex-row flex-col md:justify-between md:gap-0 gap-4 ">
        <ul className="flex text-lg font-semibold gap-10 text-[#C67E00] mr-0 items-center">
          <Link to="/terms">
            <motion.li
              className="link"
              whileHover={{
                scale: 1.1,

                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              Terms
            </motion.li>
          </Link>
          <Link to="/privacy">
            <motion.li
              className="link"
              whileHover={{
                scale: 1.1,

                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              Privacy Policy
            </motion.li>
          </Link>
        </ul>
        <div className="text-lg flex items-center gap-2 text-[#C67E00]">
          <span className="text-2xl mt-1">&copy;</span>Copyright {currentYear()}{" "}
          Vinhil , All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
