import React from "react";
import Nav from "./Nav";
import Login from "./Login";

const Header = () => {
  return (
    <div className="h-16 shadow-xl px-5 sm:px-10 flex justify-between items-center">
      <div className="flex items-center gap-1">
        <figure className="w-10 sm:w-14 h-10 sm:h-14 border-2 rounded-full overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/12/d6/00/12d60046505b41fe3ca8a71e0d186c62.jpg"
            alt="fresh furit"
            className="w-full h-full object-cover"
          />
        </figure>
        <figcaption className="text-xl xs:text-2xl sm:text-3xl font-serif font-extrabold uppercase">
          fresh <span className="text-[#fa8231]">furits</span>
        </figcaption>
      </div>
      <Nav />
      <Login />
    </div>
  );
};

export default Header;
