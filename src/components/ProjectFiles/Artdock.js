import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../styles/ProjectDetails.css";

const ArtDock = () => {
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
        <h1 className="project-details-heading headings">Art Dock</h1>
        <p className="project-details-para">
          This is my first project and it was my college project
        </p>
        <h4 className="project-details-heading headings">Theme : </h4>
        <p className="project-details-para">
          The main theme of this project is to make a platform for the artists
          to present their skills and get to know more about <br />
          other artist.They can also promote their social media accounts and
          also earn money by doing custom art for the people who are <br />
          interested.
        </p>
        <h4 className="project-details-heading headings">Technologies</h4>
        <ul className="project-details-ul">
          <li className="project-details-li">
            To build the entire project I used react js and javascript. For the
            user interface I used HTML and CS.
          </li>
          <li className="project-details-li">
            For the database I used Firebase because it noSql database and easy
            to work with for a small-medium projects
          </li>
          <li className="project-details-li">
            To deploy the project I used Heroku hosting services
          </li>
        </ul>
        <a
          href="https://artdock-ea1ac.web.app/Game"
          className="project-details-link"
        >
          Visit Website{" "}
          <BsFillArrowRightCircleFill className="project-details-arrow-icon" />
        </a>
      </div>
    </>
  );
};

export default ArtDock;
