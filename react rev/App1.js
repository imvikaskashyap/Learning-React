import React, { useEffect, useState } from "react";
import "./App.css";
import Tours from "./components/tours/Tours";

const url = "https://course-api.com/react-tours-project";
// console.log(url);

function App() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    //  fetch(url)
    //    .then((response) => response.json())
    //    .then((data) => console.log(data));
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const res = await fetch(url);
      const toursData = await res.json();
      console.log(toursData);
      setTours(toursData);
    } catch (err) {
      console.log(err);
    }
  };

  const filterTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  if (tours.length == 0) {
    return (
      <div className="refresh">
        <h1>No Tours Available</h1>
        <button onClick={() => fetchTours()}>Click here</button>
      </div>
    );
  }

  return (
    <div className="main">
      <Tours tours={tours} filterTour={filterTour} />
    </div>
  );
}

export default App;
