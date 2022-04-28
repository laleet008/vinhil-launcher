import React from "react";
import { FaMap } from "react-icons/fa";
import { MdTranslate, MdFlight } from "react-icons/md";

import { motion } from "framer-motion";

const Feature = () => {
  return (
    <div className="main_container_features">
      <div className="md:mx-40 mx-10 ">
        <div className="flex justify-center items-center mt-4">
          <span className="font-bold text-white md:text-5xl text-3xl">
            Our Features
          </span>
        </div>
        <div className="md:mt-10 flex md:flex-row flex-col  md:gap-4 gap-12 mt-8 pb-8">
          <div className="features">
            <div className="flex md:flex-col flex-row items-center md:justify-center md:gap-0 gap-12 justify-between">
              <motion.div whileHover={{ scale: 1.1 }}>
                <FaMap className="md:text-4xl text-3xl text-gray-200" />
              </motion.div>
              <motion.span
                className="md:text-4xl  text-2xl font-bold text-gray-300 md:mt-4"
                whileHover={{ scale: 0.9 }}
              >
                Maps
              </motion.span>
            </div>
            <p className="mt-2 text-gray-300">
              We offer verities of option on our map features. It have instant
              driving mood like google map.We have incognito mode too. Other
              features like saving locations, pinned places, locations sharing,
              in-app media control etc.
            </p>
          </div>
          <div className="features">
            <div className="flex md:flex-col flex-row items-center md:justify-center md:gap-0 gap-12 justify-between">
              <motion.div whileHover={{ scale: 1.1 }}>
                <MdFlight className="md:text-4xl text-3xl text-gray-200" />
              </motion.div>
              <motion.span
                className="md:text-4xl  text-2xl font-bold text-gray-300 md:mt-4"
                whileHover={{ scale: 0.9 }}
              >
                Flights/Hotel
              </motion.span>
            </div>
            <p className="mt-2 text-gray-300">
              You can book cheapest to luxurious flights and hotels. We
              recommend according to your location, you can get top rated
              hotels. It just make your life easier when you travel, or if you
              are a tourist guide. We offer verities of choice for customers to
              choose.
            </p>
          </div>
          <div className="features">
            <div className="flex md:flex-col flex-row items-center md:justify-center md:gap-0 gap-12 justify-between">
              <motion.div whileHover={{ scale: 1.1 }}>
                <MdTranslate className="md:text-4xl text-3xl text-gray-200" />
              </motion.div>
              <motion.span
                className="md:text-4xl  text-2xl font-bold text-gray-300 md:mt-4"
                whileHover={{ scale: 0.9 }}
              >
                Translator
              </motion.span>
            </div>
            <p className="mt-2 text-gray-300">
              Our functions are pretty self-explanatory: voice translation,
              conversation translation, photo translation, and text translation.
              What makes our translator so innovative is its ability to
              translate your message for a large number of listeners, making it
              perfect for a presentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
