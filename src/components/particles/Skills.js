import "../../styles/Skills.css";
import Header from "../Header";

const Skills = () => {
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

  return (
    <div style={{ backgroundColor: "#1a1f61" }}>
      <Header />
      <div className="skill-page">
        <ul className="skills-cont">
          {skills.map((item) => (
            <li className="skill-list col-5 col-md-3">
              <div className="skill-min-cont">
                <div className="skill-img-cont">
                  <img
                    className="skill-list-img"
                    src={item.imgUrl}
                    alt={item.language}
                  />
                </div>
                <div className="skill-text-cont">
                  <p className="skill-name">{item.language}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="skill-title-img-cont">
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
