import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";

const Nav = () => {
  const [openSlider, setOpenSlider] = useState(false);

  const openNav = () => {
    setOpenSlider(!openSlider);
  };

  const closeNav = () => {
    setOpenSlider(!openSlider);
  };

  return (
    <div>
      <ul className="text-base font-medium hidden lg:flex gap-12 ">
        <li>
          <NavLink
            to="/"
            className="active-nav hover:text-orange-500 hover:underline duration-300 "
          >
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/about"
            className="active-nav hover:text-orange-500 hover:underline duration-300 "
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/allfurit"
            className="active-nav hover:text-orange-500 hover:underline duration-300 "
          >
            All Furit
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="active-nav hover:text-orange-500 hover:underline duration-300 "
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* responsive_nav_bar */}
      {openSlider ? (
        <button className=" lg:hidden" onClick={closeNav}>
          <CloseIcon />
        </button>
      ) : (
        <button className="lg:hidden" onClick={openNav}>
          <DehazeIcon />
        </button>
      )}

      <ul
        style={{ top: openSlider ? 0 : "-100%" }}
        className="text-base font-medium lg:hidden fixed mt-16 left-0 w-9/12 xs:w-7/12 sm:w-5/12 md:w-4/12 bg-orange-300 text-white py-10 flex flex-col justify-center items-center gap-8 font duration-300 z-40"
      >
        <li>
          <NavLink
            to="/"
            onClick={closeNav}
            className="active-nav hover:text-orange-500 hover:underline duration-300 "
          >
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/about"
            onClick={closeNav}
            className="active-nav hover:text-orange-500 hover:underline duration-300 "
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/allfurit"
            onClick={closeNav}
            className="active-nav hover:text-orange-500 hover:underline duration-300 "
          >
            All Furit
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={closeNav}
            className="active-nav hover:text-orange-500 hover:underline duration-300 "
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
