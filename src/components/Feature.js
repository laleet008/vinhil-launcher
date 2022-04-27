import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdWallpaper } from "react-icons/md";

import { BsShieldLockFill } from "react-icons/bs";

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
              <BsShieldLockFill className="md:text-4xl text-3xl text-gray-200" />
              <span className="md:text-4xl  text-2xl font-bold text-gray-300 md:mt-4">
                App Locker
              </span>
            </div>
            <p className="mt-2 text-gray-300">
              Make your apps more secure with our app locker feature. This
              feature let you maintain more privacy with your sensitive data. It
              is not about pattern or pin with biometric unlock feature you can
              have more secure use cases of this launcher.
            </p>
          </div>
          <div className="features">
            <div className="flex md:flex-col flex-row items-center md:justify-center md:gap-0 gap-12 justify-between">
              <FaSearch className="md:text-4xl text-3xl text-gray-200" />
              <span className="md:text-4xl  text-2xl font-bold text-gray-300 md:mt-4">
                Search Screen
              </span>
            </div>
            <p className="mt-2 text-gray-300">
              Our searching Feature save your time to find out the desired app,
              which will be very effective on your limited time. It has
              attractive UI with it you can interact. It suggest as you type,
              also ranked the most searched apps at the top.
            </p>
          </div>
          <div className="features">
            <div className="flex md:flex-col flex-row items-center md:justify-center md:gap-0 gap-12 justify-between">
              <MdWallpaper className="md:text-4xl text-3xl text-gray-200" />
              <span className="md:text-4xl  text-2xl font-bold text-gray-300 md:mt-4">
                Wallpaper Options
              </span>
            </div>
            <p className="mt-2 text-gray-300">
              We provide different categories of wallpapers. You can have your
              choice with your eye comfort. The different colors and also
              provide HD on our wallpaper. You can also choose from gallery and
              let you use custom wallpaper.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
