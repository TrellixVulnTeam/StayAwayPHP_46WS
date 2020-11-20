import React, { useState } from 'react';
import axios from 'axios';
import '../style/Meals.css'

const Meals = () => {
  const [meals, setMeals] = useState([]);
  React.useEffect(() => {
    getMeals();
  }, []);

  const getMeals = () => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      // Extract the DATA from the received response
      .then((response) => response.data.meals)
      // Use this data to update the state
      .then((data) => {
        setMeals(data);
      });
  };
  console.log(meals);


  return (
    <div className="container-cards">
      {meals.map((meal) => (
        <div className="container-food">
          <img className="img-food" src={meal.strMealThumb} alt={meal.strIngredient1} />
          <div className="paraph-food">
            <p className="para1">{meal.strMeal}</p>
            <p className="para2">{`${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, ${meal.strIngredient4}`}</p>
          </div>
          <p className="para3">{`${meal.idMeal}`}</p>
          <img className="denier" src="../images/denier.png" alt="denier"/>
          <button className="btn-food" type="submit">ADD</button>
        </div>
      ))}
    </div>
  );
};

export default Meals;
