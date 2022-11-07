import React from "react";
// import Navbar from "../Navbar/Navbar";
import "./HomePage.css";
import people from "./Img/people.png";

const HomePage = () => {
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
          <img src={people} alt="people" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
