import React from 'react'
import { Link } from "react-router-dom";
import '../style/Navbar.css';

const Navbar = () => {
    return(
        <div>
            <nav >
                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/food">Food</Link>
                    </li>
                    <li>
                        <Link to="/carouselweapon">Weapon</Link>
                    </li>
                    
                    <li>
                        <Link to="/commandes">Orders</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar