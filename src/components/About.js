import "../styles/About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-cont">
      <div className="personal-details">
        <h3 className="about-headings">PERSONAL DETAILS</h3>
        <p className="per-det">
          Name : <span className="personal-ans">V.Yuva kishore</span>
        </p>
        <p className="per-det">
          Address :
          <span className="personal-ans">Shadnagar , Telangana , India</span>
        </p>
      </div>
      <div className="personal-info">
        <h2 className="about-headings">ABOUT </h2>
        <p className="per-para">
          I am aspiring Full-stack developer who is doing online course in nxt
          wave. <br />I completed my BSc computer science degree from st.josepsh
          <br /> degree and pg collge with 84%.I Like building website and AI
          models.
        </p>
      </div>
      <div className="personal-interests">
        <h2 className="about-headings">PERSONAL INTERESTS</h2>
        <ul className=" about-ul">
          <li class="list-group-item">Playing Chess</li>
          <li class="list-group-item">Watching Anime and movies</li>
          <li class="list-group-item">Reading Books</li>
        </ul>
      </div>
      <div className="resume-cont">
        <button className="btn btn-secondary">
          <Link className="resume-link" to="/files/Yuva's Resume (6).pdf" target="_blank" download>
            Download My Resume
          </Link>
        </button>
      </div>
    </div>
  );
};

export default About;
