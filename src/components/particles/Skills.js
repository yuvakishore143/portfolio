import "../../styles/Skills.css";

const Skills = ({ details }) => {
  return (
    <li className="skill-list col-5 col-md-3">
      <div className="skill-min-cont">
        <div className="skill-img-cont">
          <img
            className="skill-list-img"
            src={details.imgUrl}
            alt={details.language}
          />
        </div>
        <div className="skill-text-cont">
          <p className="skill-name">{details.language}</p>
        </div>
      </div>
    </li>
  );
};

export default Skills;
