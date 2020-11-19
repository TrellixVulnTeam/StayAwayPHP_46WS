import React from "react";
import { auberges } from "./dataAuberges";

const Auberges = () => {
  return (
    <div>
      {auberges.map((auberge) => {
        return (
          <div key={auberge.id}>
            <img src={auberge.image} alt={auberge.name} />
            <h4>{auberge.name}</h4>
            <p>{auberge.description}</p>
            <p>{`Delivry Price : ${auberge.delivryPrice}`}</p>
            <p>{auberge.duration}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Auberges;
/*     {/*  <h1>Auberges</h1>
      <div className="Auberge">
        <img src={props.image} alt={props.name} />
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <p>{`Delivry Price : ${props.delivryPrice}`}</p>
        <p>{props.duration}</p>
      </div> */

/* 
import React from "react";
import { movies } from "../data";
import Movie from "./Movie";

const MovieList = () => (
  <div>
    {movies.map((movie) => (
      <Movie key={movie.id} data={movie} />
    ))}
  </div>
);

export default MovieList;
 */
