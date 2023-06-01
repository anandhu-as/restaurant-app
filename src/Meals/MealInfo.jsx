import React, { useContext } from "react";
import MealContext from "./MealContext";
export const MealInfo = () => {
  const selectedFood = useContext(MealContext);
  const { name, img, desc, trailer, category } = selectedFood;
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
      <p className="desc">{desc}</p>
    </>
  );
};
