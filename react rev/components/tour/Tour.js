import React, { useState } from "react";
import "./Tour.css";

function Tour({ id, image, info, name, price, filterTour }) {
  const [readMore, setReadMore] = useState(false);
  console.log(readMore);

  const readMoreClick = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="single_tour">
      <img src={image} alt={name} />
      <div className="footer">
        <div className="tour_info">
          <h4>{name}</h4>
          <h4 className="tour_price"> ${price}</h4>
        </div>
        <p className="info">
          {readMore ? info : `${info.substring(0, 160)}...`}
          <button onClick={readMoreClick} className="button">
            {readMore ? "Show less" : "Read More"}
          </button>
        </p>
      </div>
      <div className="delete">
        <button onClick={() => filterTour(id)}>Not Interested</button>
      </div>
    </div>
  );
}

export default Tour;
