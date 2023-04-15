import { useParams } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../styles/ProjectDetails.css";

const details = [
  {
    projectName: "Art Dock",
    id: "1",
    minPara: "This is my first project and it was my college project",
    theme:
      "The main theme of this project is to make a platform for the artiststo present their skills and get to know more aboutother artist.They can also promote their social media accounts andalso earn money by doing custom art for the people who are interested",
    technologies: [
      " To build the entire project I used react js and javascript. For theuser interface I used HTML and CS.",
      "For the database I used Firebase because it noSql database and easyto work with for a small-medium projects",
      "To deploy the project I used Heroku hosting services",
    ],
    siteLink: "https://artdock-ea1ac.web.app/Game",
  },
  {
    projectName: "Portfolio Website",
    id: "2",
    minPara: "This is my second project.",
    theme:
      "This is my personal website where all my projects and skill will bestored. There is no backend as the info is manually entered",
    technologies: [
      "To build the entire project I used react js and javascript. For the user interface I used HTML and CS.",
      "To deploy the project I used Netlify hosting services",
    ],
    siteLink: "#",
  },
  {
    projectName: "Wikipedia Search",
    id: "4",
    minPara: "",
    theme:
      " The project is build as a part of my full-stack development course. Inthis project we can search for anything that can be found inwikipedia.It's just a like a mini search engine",
    technologies: [
      "This project is solely build using react js ",
      "For the design part Html and Css is used.",
    ],
    siteLink: "https://yuvakishorewsa.ccbp.tech/",
  },
  {
    projectName: "Jobby App",
    id: "5",
    minPara: "This is one of my biggest project",
    theme:
      "This project is to find the jobs for any user.In this project the user can search for the jobs based on position or salary. the user can also directly search for a certain role using search bar.But the user first need to login using credentials.for now the only the combination of username : 'rahul' and password : 'rahul@2021' is allowed. so if you want to enter the app please use this credentials.Here fetching is done from the external api for the jobs part.",
    technologies: [
      "This project is solely build using react js ",
      "For the design part Html and Css is used.",
    ],
    siteLink: "https://yuvakishoreja.ccbp.tech",
  },
  {
    projectName: "Emoji Game",
    id: "3",
    minPara: "",
    theme:
      "This project is built as part of my full-stack development course.This is a very fun project in this project the player has to pick all the emojis without pressing the same emoji twice. As the player selects the emoji the points will be awarded. the highest score will be shown at the top right. This game also need a high memory game so it comes as both fun and educational game. ",
    technologies: [
      "to build this project used reactjs",
      "for the design used HTML and Css",
    ],
    siteLink: "https://yuvakishoreeg.ccbp.tech/",
  },
];

const SingleProject = (props) => {
  const { id } = useParams();
  console.log(id);
  const requiredDetails = details.filter((item) => item.id === id);
  return (
    <>
      <div className="d-flex back-btn-cont mt-4 me-5">
        <button className="back-btn btn btn-secondary ">
          <Link to="/" className="back-link">
            Go Back
          </Link>
        </button>
      </div>
      <div className="project-details-cont">
        <h1 className="project-details-heading headings">
          {requiredDetails[0].projectName}
        </h1>
        <p className="project-details-para">{requiredDetails[0].minPara}</p>
        <h4 className="project-details-heading headings">Theme : </h4>
        <p className="project-details-para">{requiredDetails[0].theme}</p>
        <h4 className="project-details-heading headings">Technologies</h4>
        <ul className="project-details-ul">
          {requiredDetails[0].technologies.map((item) => (
            <li className="project-details-li">{item}</li>
          ))}
        </ul>
        <a href={requiredDetails[0].siteLink} className="project-details-link">
          Visit Website
          <BsFillArrowRightCircleFill className="project-details-arrow-icon" />
        </a>
      </div>
    </>
  );
};

export default SingleProject;
