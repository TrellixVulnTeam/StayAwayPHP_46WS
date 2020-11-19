import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/food">Food</Link>
                    </li>
                    <li>
                        <Link to="/weapon">Weapon</Link>
                    </li>
                    <li>
                        <Link to="/rechercher">Search</Link>
                    </li>
                    <li>
                        <Link to="/commandes">Orders</Link>
                    </li>
                    <li>
                        <Link to="/compte">Account</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar