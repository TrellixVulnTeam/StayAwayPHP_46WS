import React from "react";
import { Link } from "react-router-dom";
import "../style/Accueil.scss";

const Accueil = () => {
  return (
    <div className="container-home-page">
      <img
        className="logo"
        src="https://files.slack.com/files-pri/T6SG2QGG2-F01FB5DBFPE/logo.png"
        alt="logo"
      />
      <div className="container-btn-home">
        <Link to="/weapon">
          <button type="button">Weapons</button>
        </Link>
        <Link to="/food">
          <button type="button">Food</button>
        </Link>
      </div>
    </div>
  );
};

export default Accueil;
