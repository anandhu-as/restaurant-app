import React from "react";
import "../src/App.css";
import Meal from "./Meals/Meal";
import { Navbar } from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" Component={About} />
        <Route path="/food" Component={Meal} />
        <Route path="/" Component={Home} />
      </Routes>
    </>
  );
};

export default App;
