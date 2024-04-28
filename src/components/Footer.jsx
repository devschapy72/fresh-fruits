import React from "react";

const Footer = () => {
  return (
    <div className="relative">
      <figure>
        <img
          className="h-16 w-full object-cover"
          src="https://png.pngtree.com/thumb_back/fh260/background/20210906/pngtree-fruit-orange-orange-juice-yellow-simple-banner-image_805873.jpg"
          alt="footer-imag"
        />
      </figure>
      <div>
        <h3 className="absolute top-0 left-0 h-full w-full bg-[#00000070] flex justify-center items-center text-white font-serif font-semibold text-xs xs:text-sm sm:text-base lg:text-lg">
          {" "}
          Copyright © {new Date().getFullYear()} - All right reserved by SUMON
        </h3>
      </div>
    </div>
  );
};

export default Footer;
