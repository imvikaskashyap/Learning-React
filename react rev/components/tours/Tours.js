import React from "react";
import Tour from "../tour/Tour";
import "./Tours.css";

function Tours({ tours, filterTour }) {
  return (
    <div className="main_container">
      <h1>Available Tours</h1>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} filterTour={filterTour} />;
      })}
    </div>
  );
}

export default Tours;
