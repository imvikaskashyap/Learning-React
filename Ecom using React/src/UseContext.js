import React, { createContext } from "react";
import "./App.css";
import Comp1 from "./Context/Comp1";

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={"VIkas"}>
        <LastName.Provider value={"Kashyap"}>
          <Comp1 />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName, LastName };
