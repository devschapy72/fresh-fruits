import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="  ">
      <figure className="w-full  h-[85vh] relative">
        <img
          className="w-full h-full object-cover"
          src="https://img.freepik.com/premium-photo/ripe-fruits-with-splashes-juice_372999-9344.jpg"
          alt="erro"
        />
        <div className="absolute top-0 left-0 w-full h-full  bg-[#00000079] flex flex-col justify-center items-center">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-center font-serif font-semibold text-orange-400 mb-10 capitalize">
            This Page not found ☹
          </h1>
          <NavLink
            to="/"
            className="px-16 py-3 border-2 border-orange-600 bg-orange-600 hover:bg-transparent duration-300 outline-none rounded-xl"
          >
            <Button sx={{ color: "white" }}>Go Back</Button>
          </NavLink>
        </div>
      </figure>
    </div>
  );
};

export default Error;
