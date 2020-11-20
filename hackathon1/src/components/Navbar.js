import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/food2">Foods</Link>
          </li>
          <li>
            <Link to="/carouselweapon">Weapons</Link>
          </li>
          <li>
            <Link to="/order">Orders</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
