import Carousel from 'react-bootstrap/Carousel';
import '../../styles/Carousal.css'


export const Carousal = () => {
  return (
    <div className="carousel-cont">
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block car-img"
            src="background.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3 className='text-secondary data-text car-heading hed-1'>Web Development</h3> */}
            <p className='text-secondary car-para para-1'>I build intelligent and impactful websites that work.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block car-img "
            src="nasa-Q1p7bh3SHj8-unsplash.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3 className='text-white data-text car-heading hed-1 '>Data Science</h3> */}
            <p className=' text-white car-para para-2'>I write the logic for the complex problems using data-structures and algorithms</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block car-img "
            src="database.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3 className='text-white data-text car-heading hed-1'>Data Bases</h3> */}
            <p   className='text-white data-text car-para para-1'>
            The website I create will interact with the databases using languages like SQL.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
