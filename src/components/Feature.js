import React from "react";
import { FaMap } from "react-icons/fa";
import { MdTranslate, MdFlight } from "react-icons/md";

import { motion } from "framer-motion";

const Feature = () => {
  return (
    <div className="main_container_features text-white">
      <div className="md:mx-40 mx-10 ">
        <div className="flex justify-center items-center mt-4">
          <span className="font-bold  md:text-5xl text-3xl">Our Features</span>
        </div>
        <div className="md:mt-10 flex md:flex-row flex-col  md:gap-4 gap-12 mt-8 pb-8 ">
          <motion.div
            className="features cursor-pointer"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex md:flex-col flex-row items-center md:justify-center md:gap-0 gap-12 justify-between">
              <div>
                <FaMap className="md:text-4xl text-3xl " />
              </div>
              <span className="md:text-4xl  text-2xl font-bold  md:mt-4">
                Maps
              </span>
            </div>
            <p className="mt-2 ">
              We offer verities of option on our map features. It have instant
              driving mood like google map.We have incognito mode too. Other
              features like saving locations, pinned places, locations sharing,
              in-app media control etc.
            </p>
          </motion.div>
          <motion.div
            className="features cursor-pointer"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex md:flex-col flex-row items-center md:justify-center md:gap-0 gap-12 justify-between">
              <div>
                <MdFlight className="md:text-4xl text-3xl " />
              </div>
              <span className="md:text-4xl  text-2xl font-bold  md:mt-4">
                Flights/Hotel
              </span>
            </div>
            <p className="mt-2 ">
              You can book cheapest to luxurious flights and hotels. We
              recommend according to your location, you can get top rated
              hotels. It just make your life easier when you travel, or if you
              are a tourist guide. We offer verities of choice for customers to
              choose.
            </p>
          </motion.div>
          <motion.div
            className="features cursor-pointer"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex md:flex-col flex-row items-center md:justify-center md:gap-0 gap-12 justify-between">
              <div>
                <MdTranslate className="md:text-4xl text-3xl" />
              </div>
              <span className="md:text-4xl  text-2xl font-bold md:mt-4">
                Translator
              </span>
            </div>
            <p className="mt-2 ">
              Our functions are pretty self-explanatory: voice translation,
              conversation translation, photo translation, and text translation.
              What makes our translator so innovative is its ability to
              translate your message for a large number of listeners, making it
              perfect for a presentation.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
