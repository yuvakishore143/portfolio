import "../../styles/Projects.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Projects = ({ details }) => {
  const { color } = details;
  return (
    <div className="project-item">
      <div className="text-content">
        <h1 className="project-heading headings">{details.name}</h1>

        <a href="#" className="d-md-none mobile-link">
          Visit Website
        </a>
      </div>
      <div className="hover-cont">
        <div className="hover-text-cont">
          <div className="project-info d-none d-md-block">
            <span className="d-block inner-heading ">TECHNOLOGIES USED : </span>
            <ul className="tech-lists">
              {details.tech.map((item) => (
                <li className="tech-list-items">{item}</li>
              ))}
            </ul>
          </div>
          <button className=" btn know-btn">
            <Link className="know-more-link" to={`/projects/${details.id}`}>
              Know More
            </Link>
          </button>
        </div>
        <div className="hover-external-link-cont">
          {details.link !== undefined && (
            <div>
              <a className="link" href={details.link} target="_blank">
                Visit Website
              </a>
              <BsArrowRightCircle className="arrow-icon view-icon" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
