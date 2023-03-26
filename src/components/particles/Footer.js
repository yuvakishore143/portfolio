import "../../styles/Footer.css";
import {AiFillGithub , AiFillLinkedin , AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-cont d-flex align-items-center ">
      <ul className="footer-min-cont d-flex justify-content-around">
        <li className=" footer-list d-flex flex-row justify-content-center align-items-center">
          <div className="footer-logo-cont ">
            <AiFillGithub className="footer-logo"/>
          </div>
          <div className="footer-text-cont">
            <a className="footer-text-link" target="_blank" href="https://github.com/yuvakishore143">yuvakishore143</a>
          </div>
        </li>
        <li className="footer-list d-flex flex-row justify-content-center align-items-center">
          <div className="footer-logo-cont">
            <AiFillLinkedin className="footer-logo"/>
          </div>
          <div className="footer-text-cont">
            <a className="footer-text-link" target="_blank" href="https://www.linkedin.com/in/yuva-kishore-vishwanath/">yuvakishorevishwanath</a>
          </div>
        </li>
        <li className=" footer-list d-flex flex-row justify-content-center align-items-center">
          <div className="footer-logo-cont">
            <AiFillInstagram className="footer-logo"/>
          </div>
          <div className="footer-text-cont">
            <a className="footer-text-link" target="_blank" href="https://www.instagram.com/yuvavishwanath/">@yuvavishwanath</a>
          </div>
        </li>

      </ul>
    </div>
  );
};

export default Footer;
