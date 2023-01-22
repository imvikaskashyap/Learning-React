import React, { useEffect, useState } from "react";
import Tours1 from "./components/tours/Tours1";

const url = "https://course-api.com/react-tours-project";

function App(props) {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let res = await fetch(url);
      let toursData = await res.json();
      // console.log(toursData);
      setTours(toursData);
    } catch (err) {
      console.log(err);
    }
  };

  if (tours.length == 0) {
    return (
      <div className="refresh">
        <h1>No Tours Available</h1>
        <button onClick={() => fetchData()}>Click here</button>
      </div>
    );
  }

  let filterTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  return (
    <div>
      <Tours1 tours={tours} filterTour={filterTour} />
    </div>
  );
}

export default App;
