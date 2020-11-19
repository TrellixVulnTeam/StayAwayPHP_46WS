import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Accueil.scss';
import logo from '../style/logo.png';
import gif from '../style/chevalier.gif';

const Accueil = () => {
  return (
    <div className='container-home-page'>
      <img className='logo' src={logo} alt='logo' />
      <div className='container-btn-home'>
        <Link to='/weapon'>
          <button type='button' className='btn1'>
            EXPRESS WEAPONS
          </button>
        </Link>
        <Link to='/food'>
          <button type='button' className='btn2'></button>
        </Link>
        <img className='gif' src={gif} alt='logo' />
      </div>
    </div>
  );
};

export default Accueil;
