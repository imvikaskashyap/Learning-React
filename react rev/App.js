import React, { useEffect, useState } from "react";
import Tours1 from "./components/tours/Tours1";

const url = "https://course-api.com/react-tours-project";
console.log(url);

function App(props) {
  const [tour, setTours] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(url);
    const newData = await res.json();
    console.log(newData);
    setTours(newData);
  };

  return (
    <div>
      <Tours1 tours={tour} />
    </div>
  );
}

export default App;
