import React, { useState, useEffect, useReducer } from "react";
import "../Meals/Meal.css";
import MealContext from "./MealContext";
import { MealInfo } from "./MealInfo";
import URL from "../Urls/url";

const mealReducer = (state, action) => {
  switch (action.type) {
    case "SET_MEALS":
      return {
        ...state,
        loading: false,
        meals: action.payload,
      };
    case "SELECTED_FOOD":
      return {
        ...state,
        selectedFood: action.playload,
      };
  }
};
const Meal = () => {
  const initialState = {
    loading: true,
    meals: [],
    selectedFood: null,
  };
  const [state, dispatch] = useReducer(mealReducer, initialState);
  const { loading, meals, selectedFood } = state;
  useEffect(() => {
    fetch(URL[1])
      .then((res) => res.json())
      .then((data) => {
        const mealNames = data.meals.map((meal) => ({
          img: meal.strMealThumb,
          name: meal.strMeal,
          desc: meal.strInstructions,
          trailer: meal.strYoutube,
          category: meal.strCategory,
        }));
        dispatch({ type: "SET_MEALS", payload: mealNames });
      });
  }, []);

  const getMeal = (meal) => dispatch({ type: "SELECTED_FOOD", playload: meal });
  return (
    //selectedFood value from the Meal component is provided to the MealContext.Provider
    <MealContext.Provider value={selectedFood}>
      <div>
        {selectedFood ? (
          <div className="info">
            <MealInfo />
          </div>
        ) : (
          false
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
