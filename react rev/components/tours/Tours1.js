import React, { useState } from "react";
import TourData from "../tour/TourData";

function Tours1({ tours, filterTour }) {
  return (
    <>
      <center>
        {" "}
        <h1>Available Tours</h1>
      </center>
      <div className="main_container">
        {tours.map((tour) => {
          return <TourData key={tour.id} {...tour} filterTour={filterTour} />;
        })}
      </div>
    </>
  );
}
export default Tours1;
