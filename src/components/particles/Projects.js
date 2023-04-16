import { useState } from "react";
import "../../styles/Projects.css";
import "../../styles/Universal.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

import Header from "../Header";
import Footer from "./Footer";

const Projects = () => {
  const [tag, setTag] = useState("All");
  const [removePage, setRemovePage] = useState(false);
  const projects = [
    {
      id: 1,
      name: "ArtDock",
      tech: ["React Js", "Html & Css", "FireBase"],
      link: "https://artdock-ea1ac.web.app/Game",
    },
    {
      id: 2,
      name: "Jobby App",
      tech: ["React Js", "Html & Css"],
      link: "https://yuvakishoreja.ccbp.tech",
    },
    {
      id: 3,
      name: "Portfolio",
      tech: ["React Js", "Html & Css"],
    },
    {
      id: 4,
      name: "Emoji Game",
      tech: ["React Js", "Html & Css"],
      link: "https://yuvakishoreeg.ccbp.tech/",
    },
    {
      id: 5,
      name: "Wikipedia Search",
      tech: ["React Js", "Html & Css"],
      link: "https://yuvakishorewsa.ccbp.tech",
    },
  ];

  const navigate = useNavigate();

  let filteredList = projects;
  if (tag !== "All") {
    filteredList = projects.filter((item) => item.tech.includes(tag));
  }

  const animationHandler = () => {
    setRemovePage(true);
    console.log("hello");
    return () => {
      setRemovePage(false);
    };
  };

  const onAboutClick = () => {
    navigate("/home");
    setTimeout(() => {
      const aboutEl = document.querySelector("#aboutInHome");
      aboutEl.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className="whole-project-cont">
      <Header func={animationHandler} aboutFun={onAboutClick} />
      <div className="project-min-cont">
        <div className="d-flex justify-content-end mx-5 ">
          <select onChange={(e) => setTag(e.target.value)}>
            <option value="All">All</option>
            <option value="Html & Css">HTML & CSS</option>
            <option value="React Js">React Js</option>
            <option value="FireBase">FireBase</option>
            <option value="Python">Python</option>
          </select>
        </div>
        <div className="projects-cont">
          {filteredList.length === 0 ? (
            <div className="mt-5">
              <p className="m-0 text-white fs-3 text-center">
                No Projects Found.
              </p>
              <p className=" text-white fs-3 text-center m-0">
                Try changing category
              </p>
            </div>
          ) : (
            <ul className="row justify-content-center">
              {filteredList.map((item) => (
                <div
                  className={`${
                    removePage ? "project-component-removed" : ""
                  } project-item col-12 col-md-3 justify-content-around`}
                  style={{ "--projOrder": item.id }}
                >
                  <h1 className="project-item-name fs-2">{item.name}</h1>
                  <div className="project-details-box d-flex  w-100 justify-content-between">
                    <div>
                      <h1 className="project-tech-heading fs-6">
                        TECHNOLOGIES USED
                      </h1>
                      <ul>
                        {item.tech.map((library) => (
                          <li>{library}</li>
                        ))}
                      </ul>
                    </div>
                    <div className=" d-flex justify-content-center align-items-center">
                      <button className="bg-secondary  border-0 p-1 px-2 rounded-3">
                        <Link
                          className="know-more-link text-white"
                          to={`/projects/${item.id}`}
                        >
                          Know More
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className=" w-100 ">
                    <a
                      className="visit-website-anchor text-decoration-none text-dark"
                      href={item.link}
                    >
                      VisitWebsite
                      <BsFillArrowRightCircleFill className="mx-3" />
                    </a>
                  </div>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
