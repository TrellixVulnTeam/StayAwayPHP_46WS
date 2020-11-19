import React from 'react';
import { auberges } from './dataAuberges';

const Auberges = () => {
  return (
    <div>
      {auberges.map((auberge) => {
        return (
          <div key={auberge.id} className='container'>
            <img src={auberge.image} alt={auberge.name} id='imageAuberge' />
            <h4 className='name'>{auberge.name}</h4>
            <p className='location'>{auberge.location}</p>
            <p className='delivery'>{`Delivery Price : ${auberge.delivryPrice}`}</p>
            <p className='duration'>{auberge.duration}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Auberges;
