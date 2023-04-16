import "../styles/About.css";
import Slider from "react-slick";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const About = ({ val }) => {
  const SamplePrevArrow = (props) => {
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
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SamplePrevArrow />,
  };
  return (
    <div className="row about-page justify-content-between mb-3">
      <div
        className={` ${
          val ? "remove-right-exited" : ""
        } about-img-cont col-md-5 d-flex justify-content-center align-items-center`}
      >
        <img
          className="about-img"
          src="https://smkn1empatlawang.sch.id/wp-content/uploads/2020/01/feature1.png"
        />
      </div>
      <div className="col-md-6 m-auto">
        <Slider
          className={` ${val ? "remove-left-exited" : ""} sill-slider`}
          {...settings}
        >
          <div className="slider-items item-2">
            <h2 className="about-headings">ABOUT </h2>
            <p className="per-para">
              I am aspiring Full-stack developer who is doing online course in
              nxt wave. <br />I completed my BSc computer science degree from
              st.josepsh
              <br /> degree and pg collage with 84%.I Like building website and
              AI models.
            </p>
          </div>
          <div className="slider-items item-1">
            <h3 className="about-headings mb-3 ">Education</h3>
            <p className="m-0">
              Bachelor's degree at st.josephs Degree and Pg Collage
              <span className="text-info ms-1">(8.2 CGPA)</span>
            </p>
            <p className="m-0">
              Intermediate at Vishwabharathi Jr.Collage
              <span className="text-info ms-1">(780 Marks)</span>
            </p>
            <p className="m-0">
              10Th at Brilliant Grammar High School
              <span className="text-info ms-1">(9.2 CGPA)</span>
            </p>
          </div>
          <div className="slider-items item-3">
            <h2 className="about-headings">PERSONAL INTERESTS</h2>
            <ul className=" about-ul">
              <li className="list-group-item">Playing Chess</li>
              <li className="list-group-item">Watching Anime and movies</li>
              <li className="list-group-item">Reading Books</li>
            </ul>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default About;
