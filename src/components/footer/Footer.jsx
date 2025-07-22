import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMessage,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2025 E-Learning Platform. All rights reserved. <br /> Made
          with ❤️ <a href="">Team Blind</a>
        </p>
        <div className="social-links">
          <a href="https://github.com/Abhishek-jii">
            <AiFillGithub />
          </a>
          <a href="">
            <AiFillMessage />
          </a>
          <a href="/">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
