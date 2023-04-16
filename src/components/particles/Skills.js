import { useState } from "react";
import "../../styles/Skills.css";
import "../../styles/Universal.css";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const [removePage, setRemovePage] = useState(false);
  const skills = [
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
  ];

  const navigate = useNavigate();

  const animationHandler = () => {
    setRemovePage(true);
    return () => {
      setRemovePage(false);
    };
  };

  const onAboutClick = () => {
    navigate("/");
    setTimeout(() => {
      const aboutEl = document.querySelector("#aboutInHome");
      aboutEl.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className="skill-whole-page d-flex flex-column">
      <Header func={animationHandler} aboutFun={onAboutClick} />
      <div className="skill-page row justify-content-between">
        <ul
          className={`${
            removePage ? "remove-right-exited" : ""
          } skills-cont col-sm-12 col-md-6`}
        >
          {skills.map((item) => (
            <li className="skill-list col-5 col-md-3">
              <div className="skill-min-cont">
                <div className="skill-text-cont">
                  <p className="skill-name">{item.language}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div
          className={`${
            removePage ? "remove-left-exited" : ""
          } skill-title-img-cont col-sm-12 col-md-5 d-flex justify-content-center`}
        >
          <img
            src="soft-skills-1536x1536-removebg-preview.png"
            alt="skill-img"
            className="skill-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
