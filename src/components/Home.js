import { Component } from "react";
import "../styles/Home.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "../styles/Projects.css";

import { Carousal } from "./particles/Carousal";
import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <div className="home-cont">
        <Header />
        <div className="home-content">
          <div className="d-flex align-items-center">
            <div className="home-heading">
              I build intelligent and impactful websites that work.
            </div>
          </div>
          <div>
            <img src="B-Tech-Degree-removebg-preview.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
