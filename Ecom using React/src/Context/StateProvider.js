import React, { useReducer, createContext, useContext } from "react";
import { initialState } from "../Reducer/Reducer";

// global data using context api

export const StateContext = createContext();

// provide tha data using provider

function StateProvider({ reducer, initialState, children }) {
  return (
    <div>
      <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </StateContext.Provider>
    </div>
  );
}

export default StateProvider;

// thats how we can use context and get the state from it

export const useStateValue = () => useContext(StateContext);
