import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IncNum, DecNum } from "./actions";
import "./App.css";

function App() {
  const myState = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>Increment & Decrement Counter</h1>
      <h1>{myState}</h1>
      <button onClick={() => dispatch(IncNum())}>Increment</button>
      <button onClick={() => dispatch(DecNum(5))}>Decrement</button>
    </div>
  );
}

export default App;
