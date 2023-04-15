import { useState } from "react";
import "../../styles/Projects.css";
import { BsArrowRightCircle, BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Header";

const Projects = ({ details }) => {
  const [tag, setTag] = useState("All");
  const projects = [
    {
      id: 1,
      name: "ArtDock",
      tech: ["React Js", "Html & Css", "FireBase"],
      link: "https://artdock-ea1ac.web.app/Game",
    },
    {
      id: 5,
      name: "Jobby App",
      tech: ["React Js", "Html & Css"],
      link: "https://yuvakishoreja.ccbp.tech",
    },
    {
      id: 2,
      name: "Portfolio",
      tech: ["React Js", "Html & Css"],
    },
    {
      id: 3,
      name: "Emoji Game",
      tech: ["React Js", "Html & Css"],
      link: "https://yuvakishoreeg.ccbp.tech/",
    },
    {
      id: 4,
      name: "Wikipedia Search",
      tech: ["React Js", "Html & Css"],
      link: "https://yuvakishorewsa.ccbp.tech",
    },
  ];

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

  let filteredList = projects;
  if (tag !== "All") {
    filteredList = projects.filter((item) => item.tech.includes(tag));
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: filteredList.length > 1 ? 4 : 1,
    slidesToScroll: 2,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: filteredList.length > 1 ? 3 : 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: filteredList.length > 1 ? 2 : 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="whole-project-cont">
      <Header />
      <div className="d-flex justify-content-between mx-3 align-items-center ">
        <div>
          <h1 className="home-headings headings">
            SEE MY WORK
            <BsFillArrowRightCircleFill className="arrow-icon" />
          </h1>
        </div>
        <div>
          <select onChange={(e) => this.setState({ tag: e.target.value })}>
            <option value="All">All</option>
            <option value="Html & Css">HTML & CSS</option>
            <option value="React Js">React Js</option>
            <option value="FireBase">FireBase</option>
            <option value="Python">Python</option>
          </select>
        </div>
      </div>
      {filteredList.length === 0 ? (
        <h1 className=" no-project-text">In Progress...</h1>
      ) : (
        <div className="projects-cont">
          <Slider className="slider" {...settings}>
            {filteredList.map((item) => (
              <div className="project-item">
                <div className="text-content">
                  <h1 className="project-heading headings">{item.name}</h1>

                  <a href="#" className="d-md-none mobile-link">
                    Visit Website
                  </a>
                </div>
                <div className="hover-cont">
                  <div className="hover-text-cont">
                    <div className="project-info d-none d-md-block">
                      <span className="d-block inner-heading ">
                        TECHNOLOGIES USED :{" "}
                      </span>
                      <ul className="tech-lists">
                        {item.tech.map((item) => (
                          <li className="tech-list-items">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <button className=" btn know-btn">
                      <Link
                        className="know-more-link"
                        to={`/projects/${item.id}`}
                      >
                        Know More
                      </Link>
                    </button>
                  </div>
                  <div className="hover-external-link-cont">
                    {item.link !== undefined && (
                      <div>
                        <a className="link" href={item.link} target="_blank">
                          Visit Website
                        </a>
                        <BsArrowRightCircle className="arrow-icon view-icon" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Projects;
