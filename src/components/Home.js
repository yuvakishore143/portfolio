import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Projects.css";
import "../styles/Universal.css";
import About from "./About";

import Header from "./Header";
import { useState } from "react";
import Footer from "./particles/Footer";
import { useRef } from "react";
import { useEffect } from "react";

const Home = () => {
  const animatedRef = useRef()
  const [removePage, setRemovePage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onAboutClick = () => {
    const aboutEl = document.querySelector("#aboutInHome");
    aboutEl.scrollIntoView({
      behavior: "smooth",
    });
  };

  const animationHandler = () => {
    setRemovePage(true);
    return () => {
      setRemovePage(false);
    };
  };

  useEffect(()=>{
      const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });

      });
      observer.observe(animatedRef.current);  
    return ()=>{
        observer.disconnect()
    }
  },[])


  return (
      <div className="home-cont">
        <Header func={animationHandler} aboutFun={onAboutClick} />
        <div className="home-content row px-4 justify-content-between ">
          <div
            id="home-content"
            className={` ${
              removePage ? "remove-right-exited" : ""
            } home-text-cont col-12 col-md-6 d-flex flex-column justify-content-center`}
          >
            <div className="home-heading">
              <h1 className="text-white fs-1 mb-3">
                I build intelligent and impactful websites that work.
              </h1>
              <p className="text-white fs-5">
                I use Both frontend and backend libraries to build a complete
                <br />
                working projects
              </p>
            </div>

            <div className="d-flex gap-4 mt-5">
              <button
                className=" home-btn"
                style={{ backgroundColor: "orange" }}
              >
                <Link
                  className="home-btn-link"
                  to="https://yuvakishoreeg.ccbp.tech/"
                >
                  Play Game
                </Link>
              </button>
              <button className=" home-btn">
                <Link
                  className="home-btn-link"
                  to="/files/Yuva's Resume (6).pdf"
                  target="_blank"
                  download
                >
                  Download Resume
                </Link>
              </button>
            </div>
          </div>
          <div
            className={`${
              removePage ? "remove-left-exited" : ""
            } home-img-cont col-12 col-md-5 d-flex align-items-center  `}
            id="home-img-cont"
          >
            <img
              className="home-img"
              src="B-Tech-Degree-removebg-preview.png"
            />
          </div>
        </div>
        <div ref={animatedRef} id="aboutInHome">
          <About val={removePage} isVisible={isVisible} />
        </div>
        <div>
          {/* <Footer /> */}
        </div>
      </div>
  );
};

export default Home;
