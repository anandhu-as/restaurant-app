import React, { useState, useEffect } from "react";
import "../Meals/Meal.css";
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
    <div>
      {selectedFood && (
        <div className="info">
          <MealInfo
            name={selectedFood.name}
            img={selectedFood.img}
            desc={selectedFood.desc}
            category={selectedFood.category}
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
            <div className="meal" key={meal.name} onClick={() => getMeal(meal)}>
              <img src={meal.img} alt={meal.name} />
              <h3>{meal.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
const MealInfo = ({ name, img, desc, trailer, category }) => {
  return (
    <>
      <img src={img} alt="" className="infoImg" />
      <iframe
        className="youtube"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailer.slice(-11)}`}
      ></iframe>
      <h2>{name}</h2>
      <h2>{category}</h2>
      <p>{desc}</p>
    </>
  );
};

export default Meal;
