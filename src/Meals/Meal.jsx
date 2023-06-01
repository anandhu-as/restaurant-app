import { React, useState, useEffect } from "react";
import "../Meals/Meal.css";

function Meal() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals[0].strYoutube);
        const mealNames = data.meals.map((meal) => ({
          img: meal.strMealThumb,
          name: meal.strMeal,
        }));
        setMeals(mealNames);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loader">
          <div className="justify-content-center jimu-primary-loading"></div>
        </div>
      ) : (
        <div className="container">
          {meals.map((meal) => (
            <div className="meal" key={meal.name}>
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
