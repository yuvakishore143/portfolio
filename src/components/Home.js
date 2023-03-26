import { Component } from "react";
import "../styles/Home.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Skills from "../components/particles/Skills.js";
import Projects from "./particles/Projects";
import Footer from "./particles/Footer";

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
        imgUrl: "https://download.logo.wine/logo/Django_(web_framework)/Django_(web_framework)-Logo.wine.png",
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
        imgUrl:
          "https://www.vectorlogo.zone/logos/jquery/jquery-ar21.png",
      },
      {
        id: 10,
        language: "TYPESCRIPT",
        order: ["order-0", "order-1"],
        imgUrl:
          "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png",
      },
    ],
    projects: [{id : 1 , name : 'ArtDock' , tech:['React Js' , 'Html & Css' , 'FireBase'] , link : "https://artdock-ea1ac.web.app/Game"}, {id : 2 , name :'Portfolio' ,  tech:['React Js' , 'Html & Css ']}],
  };

  render() {
    const { skills, projects } = this.state;
    return (
      <div className="home-cont d-flex flex-column">
        <div className="landing-cont">
          <h1 className="landing-heading heading-one">I build intelligent and </h1>
          <h1 className="landing-heading heading-two">impactful websites that work.</h1>
        </div>
        <div>
          <h1 className="home-headings headings">
            SEE MY WORK
            <BsFillArrowRightCircleFill className="arrow-icon" />
          </h1>
          <div className="projects-cont"></div>
        </div>
        <div className="projects-cont d-flex">
          {projects.map((item) => (
            <Projects details = {item} key = {item.id} />
          ))}
        </div>
        <div>
          <h1 className="home-headings headings">
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
