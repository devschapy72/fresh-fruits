import React from "react";
import { BrowserRouter } from "react-router-dom";
import Index from "./react-router-dom";
import DashBord from "./layouts/DashBord";

const App = () => {
  return (
    <BrowserRouter>
      <DashBord>
        <Index />
      </DashBord>
    </BrowserRouter>
  );
};

export default App;
