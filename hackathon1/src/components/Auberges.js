import React from "react";
import { auberges } from "./dataAuberges";
import { Link } from "react-router-dom";
import "../style/Auberges.css";

const Auberges = () => {
  return (
    <div>
      {auberges.map((auberge) => {
        return (
          <Link className="link-auberge" to="/listOfMeals">
            <div key={auberge.id} className="container">
              <img src={auberge.image} alt={auberge.name} id="imageAuberge" />
              <div className="paratout">
                <h4 className="name">{auberge.name}</h4>
                <p className="delivery">{`Delivery Price : ${auberge.delivryPrice}`}</p>
                <p className="duration">{auberge.duration}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Auberges;
