import React from "react";
// import Navbar from "../Navbar/Navbar";
import "./HomePage.css";
import people from "./img/people.png";

const HomePage = () => {
  var img = new Image(); // Создаёт новый элемент изображения
  img.src =
    "/Users/akmaldin/Desktop/team-project/src/Components/HomePage/assets/img/people.png"; // Устанавливает путь

  return (
    <>
      {/* <Navbar /> */}
      <div className="container-HomePage">
        <div className="content-Homepage">
          <p>FABLE</p>
          <p>
            Moscow clothing brand that doesn't limit itself to the framework of
            any concepts
          </p>
          <img src={people} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
