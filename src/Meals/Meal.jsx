import React, { useState, useEffect } from "react";
import "../Meals/Meal.css";
import MealInfo from "./MealInfo";

function Meal() {
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
          Category: meal.strCategory,
        }));
        setMeals(mealNames);
        setLoading(false);
      });
  }, []);

  const getMeal = (meal) => setSelectedFood(meal);

  return (
    <div>
      {selectedFood && (
        <div className="info">
          <MealInfo
            name={selectedFood.name}
            img={selectedFood.img}
            desc={selectedFood.desc}
            Category={selectedFood.Category}
            trailer={selectedFood.trailer}
          />
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
  );
}

export default Meal;
