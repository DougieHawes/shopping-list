import React, { useState } from "react";

import { Provider } from "react-redux";
import store from "./store";

import "./style.min.css";

import Navbar from "./components/Navbar";
import ListBody from "./components/ListBody";
import AddItem from "./components/AddItem";

const App = () => {
  const [state, setState] = useState({
    showModal: false,
  });

  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <ListBody
          onClick={() => {
            setState({ ...state, showModal: true });
          }}
        />
        {state.showModal && (
          <AddItem
            onClick={() => {
              setState({ ...state, showModal: false });
            }}
          />
        )}
      </div>
    </Provider>
  );
};

export default App;
