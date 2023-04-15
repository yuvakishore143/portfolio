import React, { useState } from "react";
import "../styles/Landing.css"; // Import CSS file for styling
import Home from "./Home";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [clicked, setClicked] = useState(false); // State to track if landing page is clicked
  const [showActualContent, setShowActualContent] = useState(false);

  const handleLandingPageClick = () => {
    setClicked(true);
    setTimeout(() => {
      setShowActualContent(true);
    }, 400);
  };

  const navigate = useNavigate();

  return (
    <div onClick={handleLandingPageClick}>
      <div
        className={`landing-page ${
          clicked ? "clicked" : ""
        } background-container`}
      >
        <div className="content">
          <h1 className="text-white">Welcome to My Website</h1>
          <p className="text-white">Click to Enter</p>
        </div>
      </div>
      {/* {showActualContent && <Home />} */}
      {showActualContent && navigate("/home")}
    </div>
  );
};

export default LandingPage;
