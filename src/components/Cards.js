import React from "react";
import { Link } from "react-router-dom";

function Cards({ results }) {
  return (
    <div className="cards">
      {results
        ? results.map((item) => (
            <div key={item.id} className="img-container">
              <Link to={`/users/` + item.id}>
                <img src={item.image} alt={item.name} className="img" />
                <h3>{item.name}</h3>
              </Link>
            </div>
          ))
        : "not fuond"}
    </div>
  );
}

export default Cards;
