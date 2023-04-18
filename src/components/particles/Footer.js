import "../../styles/Footer.css";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-cont d-flex justify-content-around bg-white align-items-center">
      <div className="footer-personal-cont  h-75 d-flex flex-column justify-content-around">
        <h4 className="fs-4 m-0 mb-1">Address:</h4>
        <p className="fs-6 m-0">Teacher's Colony,Shadnagar</p>
        <p className="fs-6 m-0">Telangana,</p>
        <p className="fs-6 m-0">India</p>
      </div>
      <div className="footer-img-cont">
        <img src="initial(dark).png" className="footer-logo" />
      </div>
    </div>
  );
};

export default Footer;
