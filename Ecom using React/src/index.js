import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StateProvider from "./Context/StateProvider";
import reducer, { initialState } from "./Reducer/Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>
  // </React.StrictMode>
);
