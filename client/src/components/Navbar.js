import React from "react";
import { Slide } from "react-reveal";

import "./style.min.css";

const Navbar = () => {
  return (
    <Slide down>
      <div className="navbar">
        <h1 className="title">Shopping List</h1>
      </div>
    </Slide>
  );
};

export default Navbar;
