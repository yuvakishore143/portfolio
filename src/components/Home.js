import { Component } from "react";
import "../styles/Home.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Skills from "../components/particles/Skills.js";
import Projects from "./particles/Projects";
import Footer from "./particles/Footer";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Projects.css";

import { Carousal } from "./particles/Carousal";

class Home extends Component {
  state = {
    skills: [
      {
        id: 1,
        language: "python",
        order: ["order-0", "order-1"],
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
      },
      {
        id: 2,
        language: "Django",
        order: ["order-1", "order-0"],
        imgUrl:
          "https://download.logo.wine/logo/Django_(web_framework)/Django_(web_framework)-Logo.wine.png",
      },
      {
        id: 3,
        language: "MySql",
        order: ["order-0", "order-1"],
        imgUrl: "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png",
      },
      {
        id: 4,
        language: "JavaScript",
        order: ["order-1", "order-0"],
        imgUrl: "jslogo.png",
      },
      {
        id: 5,
        language: "React js",
        order: ["order-0", "order-1"],
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      },
      {
        id: 6,
        language: "HTML",
        order: ["order-1", "order-1"],
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
      },
      {
        id: 7,
        language: "CSS",
        order: ["order-0", "order-1"],
        imgUrl: "cssimg.png",
      },
      {
        id: 8,
        language: "BOOTSTRAP",
        order: ["order-0", "order-1"],
        imgUrl: "https://sndpbag4you.com/bootstrap.png",
      },
      {
        id: 9,
        language: "JQUERY",
        order: ["order-0", "order-1"],
        imgUrl: "jquery-removebg-preview.png",
      },
      {
        id: 10,
        language: "TYPESCRIPT",
        order: ["order-0", "order-1"],
        imgUrl: "typescript-logo-528x194-removebg-preview.png",
      },
    ],
    projects: [
      {
        id: 1,
        name: "ArtDock",
        tech: ["React Js", "Html & Css", "FireBase"],
        link: "https://artdock-ea1ac.web.app/Game",
      },
      {
        id: 5,
        name: "Jobby App",
        tech: ["React Js", "Html & Css"],
        link: "https://yuvakishoreja.ccbp.tech",
      },
      {
        id: 2,
        name: "Portfolio",
        tech: ["React Js", "Html & Css"],
      },
      {
        id: 3,
        name: "Emoji Game",
        tech: ["React Js", "Html & Css"],
        link: "https://yuvakishoreeg.ccbp.tech/",
      },
      {
        id: 4,
        name: "Wikipedia Search",
        tech: ["React Js", "Html & Css"],
        link: "https://yuvakishorewsa.ccbp.tech",
      },
    ],
    tag: "All",
  };

  SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#BEB7B7",
          borderRadius: "50%",
          border: "none",
        }}
        onClick={onClick}
      >
        hello
      </div>
    );
  }

  render() {
    const { skills, projects, tag, totalItems } = this.state;
    let filteredList = projects;
    if (tag !== "All") {
      filteredList = projects.filter((item) => item.tech.includes(tag));
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: filteredList.length > 1 ? 4 : 1,
      slidesToScroll: 2,
      prevArrow: <this.SamplePrevArrow />,
      nextArrow: <this.SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: filteredList.length > 1 ? 3 : 1,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: filteredList.length > 1 ? 2 : 1,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="home-cont">
        <div className="landing-cont">
          <Carousal />
        </div>
        <div className="whole-project-cont">
          <div className="d-flex justify-content-between mx-3 align-items-center ">
            <div>
              <h1 className="home-headings headings">
                SEE MY WORK
                <BsFillArrowRightCircleFill className="arrow-icon" />
              </h1>
            </div>
            <div>
              <select onChange={(e) => this.setState({ tag: e.target.value })}>
                <option value="All">All</option>
                <option value="Html & Css">HTML & CSS</option>
                <option value="React Js">React Js</option>
                <option value="FireBase">FireBase</option>
                <option value="Python">Python</option>
              </select>
            </div>
          </div>
          {filteredList.length === 0 ? (
            <h1 className=" no-project-text">In Progress...</h1>
          ) : (
            <div className="projects-cont">
              <Slider className="slider" {...settings}>
                {filteredList.map((item) => (
                  <Projects details={item} key={item.id} />
                ))}
              </Slider>
            </div>
          )}
        </div>
        <div>
          <h1 className="home-headings headings skill-heading">
            SKILLS <BsFillArrowRightCircleFill className="arrow-icon" />{" "}
          </h1>
          <ul className="skills-cont">
            {skills.map((item) => (
              <Skills details={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
