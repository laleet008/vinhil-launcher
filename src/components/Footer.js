import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main">
      <div className="md:mx-40 py-3 mx-10 flex md:flex-row flex-col md:justify-between md:gap-0 gap-4 ">
        <ul className="flex text-lg font-semibold gap-10 text-[#C67E00] mr-0 items-center">
          <Link to="/terms">
            <li className="link">Terms</li>
          </Link>
          <Link to="/privacy">
            <li className="link">Privacy Policy</li>
          </Link>
        </ul>
        <p className="text-lg flex items-center gap-2 text-[#C67E00] cursor-pointer">
          <span className="text-2xl mt-1">&copy;</span>Copyright 2022 Imali
          media, All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
