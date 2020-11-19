import React from 'react';
import { auberges } from './dataAuberges';
import { Link } from 'react-router-dom';
import '../style/Auberges.scss';

const Auberges = () => {
  return (
    <div className='aubergeCtn'>
      {auberges.map((auberge) => {
        return (
          <Link to='/listOfMeals'>
            <div key={auberge.id} className='container'>
              <img src={auberge.image} alt={auberge.name} id='imageAuberge' />
              <h4 className='name'>{auberge.name}</h4>
              <div className='paragraphe'>
                <p className='delivery'>{`Delivery Price : ${auberge.delivryPrice} • `}</p>
                <p className='duration'> {auberge.duration}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Auberges;
