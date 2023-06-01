import React from "react";
import "../Home/Home.css";
import menu from "../Foods/Food";
const Home = () => {
  return (
    <>
      <div className="home">
        <h1>los pollos hermanos</h1>
        <p>
          Los Pollos Hermanos was a fast-food restaurant chain that specialized
          in fried chicken, operating across the southwestern United States. The
          name, pronounced [los ˈpo.ʝos eɾˈma.nos], is ungrammatical Spanish for
          "The Chicken Brothers." Founded by Gustavo Fring and Max Arciniega,
          the restaurant chain had fourteen locations throughout the southwest
          and was Gustavo Fring's major business concern. Los Pollos Hermanos
          was a subsidiary of Madrigal Electromotive, a German conglomerate with
          an ownership stake in the company.{" "}
        </p>
        <div className="banner">
          <img
            src="https://www.foodandwine.com/thmb/lUbqIVf29gv7CvaSWBuKN1uildo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/los-pollos-hermanos-ft-blog1019-4188b592c71f4207b0ec9652279bf33e.jpg"
            alt=""
          />
        </div>
      </div>
      <h1>OwnerShip</h1>
      <div className="intro-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/B9RgougnhiE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <p>
        Gus owned fourteen Los Pollos restaurants in the American Southwest
        between Albuquerque and Nevada ("Mandala", "Bug"). The flagship
        restaurant has had many visitors from employees of Gus' other business,
        namely Walter White, The Cousins, and Mike Ehrmantraut. Hank Schrader
        has also staked out the restaurant to monitor Fring. When Gus wants to
        talk to one of his employees, he texts them "Pollos" to have them meet
        at his restaurant or chicken farm. Employees must answer the phone with
        the restaurant's motto: "Los Pollos Hermanos, where something delicious
        is always cooking." ("Hermanos") Los Pollos Hermanos advertised its
        chicken as "slow-cooked to perfection... one taste, and you'll know."
      </p>
      <h2 className="foods-title">Our Foods</h2>
      <div className="foods">
        {menu.map((items) => (
          <div className="meal">
            <img src={items.img} alt="" />
            <h3>
              {items.title} ${items.price}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
