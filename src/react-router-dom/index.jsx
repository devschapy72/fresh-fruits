import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import SingelPage from "../singel_page/SingelPage";
import AllFurit from "../components/AllFurit";
import Error from "../components/Error";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/allfurit" element={<AllFurit />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
      <Route path="/singelpage/:id" element={<SingelPage />} />
    </Routes>
  );
};

export default Index;
