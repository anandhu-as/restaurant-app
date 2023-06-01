import React, { useState, useEffect } from "react";
import "../Meals/Meal.css";
import MealContext from "./MealContext";
import { MealInfo } from "./MealInfo";
const Meal = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFood, setSelectedFood] = useState(null);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
      .then((res) => res.json())
      .then((data) => {
        const mealNames = data.meals.map((meal) => ({
          img: meal.strMealThumb,
          name: meal.strMeal,
          desc: meal.strInstructions,
          trailer: meal.strYoutube,
          category: meal.strCategory,
        }));
        setMeals(mealNames);
        setLoading(false);
      });
  }, []);

  const getMeal = (meal) => setSelectedFood(meal);
  return (
    //selectedFood value from the Meal component is provided to the MealContext.Provider
    <MealContext.Provider value={selectedFood}>
      <div>
        {selectedFood && (
          <div className="info">
            <MealInfo />
          </div>
        )}
        {loading ? (
          <div className="loader">
            <div className="justify-content-center jimu-primary-loading"></div>
          </div>
        ) : (
          <div className="container">
            {meals.map((meal) => (
              <div
                className="meal"
                key={meal.name}
                onClick={() => getMeal(meal)}
              >
                <img src={meal.img} alt={meal.name} />
                <h3>{meal.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </MealContext.Provider>
  );
};

export default Meal;
