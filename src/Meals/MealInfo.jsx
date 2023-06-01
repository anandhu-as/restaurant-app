import React from "react";
const MealInfo = ({ name, img, desc, trailer, Category }) => {
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
      <h2>{Category}</h2>
      <p>{desc}</p>
    </>
  );
};

export default MealInfo;
