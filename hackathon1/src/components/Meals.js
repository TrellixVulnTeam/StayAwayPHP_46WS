import React, { useState } from "react";
import axios from "axios";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  React.useEffect(() => {
    getMeals();
  }, []);

  const getMeals = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      // Extract the DATA from the received response
      .then((response) => response.data.meals)
      // Use this data to update the state
      .then((data) => {
        setMeals(data);
      });
  };
  console.log(meals);

  return (
    <div>
      {meals.map((meal) => (
        <div>
          <img src={meal.strMealThumb} alt={meal.strIngredient1} />
          <p>{meal.strMeal}</p>
          <p>{`${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, ${meal.strIngredient4}`}</p>
          <button type="button">Add festoylle</button>
        </div>
      ))}
    </div>
  );
};

export default Meals;
