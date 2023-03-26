import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import '../../styles/ProjectDetails.css'


const Portfolio = () =>{

    return(
        <div className="project-details-cont">
            <h1 className="project-details-heading">
                Portfolio Website
            </h1>
            <p className="project-details-para">
                This is my second project.
            </p>
            <h4 className="project-details-heading">Theme : </h4>
            <p className="project-details-para">
                This is my personal website where all my projects and skill will be stored. There is no backend as the info is manually entered
            </p>
            <h4 className="project-details-heading">Technologies</h4>
            <ul className="project-details-ul">
                <li className="project-details-li">To build the entire project I used react js and javascript. For the user interface I used HTML and CS.</li>
                <li className="project-details-li">To deploy the project I used Netlify hosting services</li>
            </ul>
            <a href="#" className="project-details-link">Visit Website<BsFillArrowRightCircleFill className="project-details-arrow-icon" /></a>
        </div>
    )

}

export default Portfolio 