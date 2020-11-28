import React from "react";
import { Fade } from "react-reveal";

import "./style.min.css";

const ListBody = ({ id, text, onClick }) => {
  return (
    <Fade delay={700} up>
      <div className="list-item" key={id}>
        <h2 className="list-item-text">{text}</h2>
        <i className="far fa-times-circle" onClick={onClick}></i>
      </div>
    </Fade>
  );
};

export default ListBody;
