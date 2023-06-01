import React from "react";

const MealInfo = ({ name, img, desc }) => {
  return (
    <>
      <img src={img} alt="" className="infoImg" />
      <h2>{name}</h2>
      <p>{desc}</p>
    </>
  );
};

export default MealInfo;
