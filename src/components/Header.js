import React from "react";
import "../styles/Header.css";
import logo from "../images/logo.svg";
import TypingEffect from './TypingEffect';

function Header() {
  return (
    <div className="header">
      <div className="logo-and-nav">
        <img src={logo} alt="Icon" width="100" height="100" />
        <ul>
          <li><a className="nav-hover" href="#about">About Me</a></li>
          <li><a className="nav-hover" href="#projects">Projects</a></li>
          <li><a className="nav-hover" href="#workEx">Work Experience</a></li>
          <li><a className="nav-hover" href="#footer">Contact</a></li>
        </ul>
      </div>
      <div className="hero">
        <div className="heroText">
          <h1 className="Name">Raj Panjabi</h1>
          
          <TypingEffect text="A spiring Software Engineer" />
          <button className="cv">
            <a
              className="cvlink"
              href="https://drive.google.com/file/d/1hhZewm-fp-qAAg3sDbvFF6FqgBfn9jOv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="button">Resume</div>
            </a>
          </button>
        </div>
        <div>
          <div className="social-links-header">
            <div className="social">
              <a
                href="https://www.linkedin.com/in/rajpanjabi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in fa-lg" aria-hidden="true"></i>
              </a>
            </div>
            <div className="social">
              <a
                href="https://github.com/rajpanjabi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-lg" aria-hidden="true"></i>
              </a>
            </div>
            <div className="social">
              <a href="mailto:rajpunjabi47@yahoo.in">
                <i className="fas fa-envelope fa-lg" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;