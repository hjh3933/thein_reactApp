import React from "react";
import "../styles/home.scss";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="photo-board">
        <div className="main-title">
          <h2>✈️ Tokyo Planner</h2>
          <p>도쿄 여행 계획을 채워보자!!</p>
        </div>

        <img src={img1} className="photo p1" alt="" />
        <img src={img2} className="photo p2" alt="" />
        <img src={img3} className="photo p3" alt="" />
        <img src={img4} className="photo p4" alt="" />
        <img src={img5} className="photo p5" alt="" />
      </div>
    </div>
  );
};

export default Home;
