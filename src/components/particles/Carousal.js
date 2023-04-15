import Carousel from "react-bootstrap/Carousel";
import "../../styles/Carousal.css";
import Header from "../Header";

export const Carousal = () => {
  return (
    <div className="carousel-cont">
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block car-img"
            src="emile-perron-xrVDYZRGdw4-unsplash.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <p className="text-white car-para">
              I build intelligent and impactful websites that work.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block car-img "
            src="database.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <p className="text-white car-para ">
              The website I create will interact with the databases using
              languages like SQL.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
