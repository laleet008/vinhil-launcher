import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div className="main ">
      <div className="md:mx-40 mx-10 ">
        <Link to="/">
          <div>
            <img
              src="assets/app-logo.png"
              className="md:h-[60] h-[40px] w-[40px]  ml-16"
              alt=""
            />
            <p className="logo-heading uppercase text-[#C67E00] md:text-[25px] text-[20px] font-bold">
              VinHil Launcher
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Heading;
