import React from "react";

const Contact = () => {
  return (
    <div className="relative w-full h-[72rem] lg:h-[68rem]">
      <figure className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://static.vecteezy.com/system/resources/previews/035/720/587/non_2x/ai-generated-fruits-on-plate-fruits-decoration-ready-to-eat-fresh-fruit-variety-on-tray-healthy-eating-diet-food-ai-generated-free-photo.jpg"
          alt="contact bg"
        />
      </figure>
      <div className="absolute w-full h-full top-0 left-0 bg-[#000000a3]">
        <h2 className="my-10 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-orange-600 capitalize text-center">
          Contact us
        </h2>
        <form action="" className="w-11/12 xs:w-10/12 md:w-8/12 mx-auto">
          <div className="block lg:flex gap-6 w-full">
            <input
              type="text"
              name="text"
              placeholder="user name"
              autoComplete="off"
              className="w-full h-14 mb-5 pl-5 bg-transparent border-orange-600 border-2 rounded-lg placeholder:text-white text-white"
            />
            <input
              type="number"
              name="number"
              placeholder="phone number"
              autoComplete="off"
              className="w-full h-14 mb-5 pl-5 bg-transparent border-orange-600 border-2 rounded-lg placeholder:text-white text-white"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="your email"
            autoComplete="off"
            className="w-full h-14 mb-5 pl-5 bg-transparent border-orange-600 border-2 rounded-lg placeholder:text-white text-white"
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="write a message"
            autoComplete="off"
            className="resize-none w-full bg-transparent border-2 border-orange-600 rounded-lg placeholder:text-white p-5 text-white"
          />
          <div className="text-center mt-10">
            <input
              type="submit"
              value="Submit"
              className="text-white bg-orange-500 px-16 py-3 border-2 border-orange-500 rounded-lg hover:bg-transparent duration-300 outline-none"
            />
          </div>
        </form>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.4923328217114!2d90.37850097472041!3d23.97838567851555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dbf5e81a3d1d%3A0x2d613e66acaa9b84!2sFruits%20Market!5e0!3m2!1sen!2sbd!4v1714228435769!5m2!1sen!2sbd"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mt-16 mb-5"
        />
      </div>
    </div>
  );
};

export default Contact;
