import React, { useState } from 'react';
import axios from 'axios';

const Meals = () => {
  const [meals, setMeals] = useState([]);
  React.useEffect(() => {
    getMeals();
  }, []);

  const getMeals = () => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        setMeals(data);
      });
  };

  return (
    <div>
      <img src={meals.strMealThumb} alt='' />
    </div>
  );
};

export default Meals;
