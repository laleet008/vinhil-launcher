import React from "react";
import Layout from "../components/Layout";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Layout>
      <div className="main_container">
        <div className="md:mx-40 mx-10 ">
          <div className="flex justify-center flex-col items-center h-96 relative mb-32">
            <div className="font-bold relative md:text-[250px] text-[200px] text-[#8C5900] opacity-40">
              404
            </div>
            <span className="absolute text-gray-200 font-bold md:text-8xl text-4xl tracking-widest	">
              Page Not Found
            </span>
            <Link to="/">
              <button className="flex py-2 px-4 text-[#c67e00] text-xl gap-4 bg-[#ffe7be] border border-gray-400 hover:border-gray-500 rounded-lg">
                <FaArrowLeft className="md:block hidden mt-1" /> Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
