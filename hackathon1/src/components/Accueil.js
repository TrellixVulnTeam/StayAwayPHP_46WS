import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Accueil.css';
/* import logo from '../images/logo.png'; 
import gif from '../images/chevalier.gif';  */

const Accueil = () => {
  return (
    <div className='container-home-page'>
      <img className='logo' src='../images/logo.png' alt='logo' />
      <img className='gif' src='../images/chevalier.gif' alt='logo' />

      <div className='container-btn-home'>
        <Link to='/weapon'>
          <button type='button' className='btn1'>
            EXPRESS WEAPONS
          </button>
        </Link>
        <Link to='/food'>
          <button type='button' className='btn2'>
            EXPRESS MEALS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Accueil;
