import React, { useState } from "react";
import { Fade } from "react-reveal";

import "./style.min.css";

const AddItem = ({ id, text, onClick }) => {
  const [state, setState] = useState({
    text: "",
  });

  const handleChange = (name) => (e) => {
    setState({ ...state, text: e.target.value });
  };

  return (
    <Fade>
      <div className="add-item-container" key={id}>
        <Fade>
          <div className="add-item-modal">
            <h2 className="modal-title">ADD ITEM</h2>
            <form>
              <input
                type="text"
                placeholder="enter item..."
                value={state.text}
                onChange={handleChange("text")}
              />
              <button>SUBMIT</button>
            </form>
            <p className="close-toggle" onClick={onClick}>
              CLOSE
            </p>
          </div>
        </Fade>
      </div>
    </Fade>
  );
};

export default AddItem;
