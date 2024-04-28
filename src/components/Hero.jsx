import React from "react";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div>
      <figure className="w-full h-screen relative">
        <img
          className="w-full h-full object-cover"
          src="https://static.vecteezy.com/system/resources/previews/035/720/587/non_2x/ai-generated-fruits-on-plate-fruits-decoration-ready-to-eat-fresh-fruit-variety-on-tray-healthy-eating-diet-food-ai-generated-free-photo.jpg"
          alt="hero image"
        />
        <div className="absolute bg-[#00000076] top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <p className="text-white text-xl md:text-2xl font-serif font-extrabold">
            Welcome to
          </p>
          <span className="text-orange-400 mt-2 mb-4 font-mono font-extrabold text-4xl xs:text-5xl sm:text-6xl lg:text-7xl">
            <Typewriter
              options={{
                strings: ["FRESH FRUITS", "GOOD HEALTH"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <p className="w-11/12 xs:w-10/12 sm:w-8/12 lg:w-6/12 text-center text-yellow-200 font-serif font-extralight text-sm mb-10">
            where nature's bounty meets your doorstep! Explore our vibrant
            selection of the freshest fruits, bursting with flavor and
            nutrients. From succulent berries to juicy citrus, each bite is a
            celebration of wholesome goodness. Dive into a world of freshness
            and vitality with every click. Your journey to healthier living
            starts here!
          </p>
          <NavLink to="/allfurit">
            <button className="bg-orange-600 text-white px-16 py-4 outline-none border-2 border-orange-600 rounded-lg  hover:bg-transparent duration-300">
              All Fruits
            </button>
          </NavLink>
        </div>
      </figure>
    </div>
  );
};

export default Hero;

// ["Fresh Fruits", "good helth"]
