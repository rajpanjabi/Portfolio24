import React from 'react';
import '../styles/Header.css';
import logo from "../images/logo.svg"
import Raj from "../images/rajf.jpeg"


function Header() {
  return (
    <div className="header">
      <div class="logo-and-nav">
        <img src={logo} alt="Icon" width="100" height="100"></img>
        <ul>
          <li><a class="nav-hover" href="#about">About Me</a></li>
          <li><a class="nav-hover" href="#projects">Projects</a></li>
          <li><a class="nav-hover" href="#workEx">Work Experience</a></li>
          <li><a class="nav-hover" href="#contact">Contact</a></li>
        </ul>
      </div> 
    <div className='hero'>
    <div className='heroText'>

    <h1 className='Name'>Raj Panjabi</h1>
    <p className='heroCont'>Aspiring Software Engineer</p>
    
    <button className="cv"><a className="cvlink" href="https://drive.google.com/file/d/1hhZewm-fp-qAAg3sDbvFF6FqgBfn9jOv/view?usp=sharing" target="_blank"><div class="button">Resume</div></a></button>
    </div>
    <img className="Rajphoto" src={Raj} alt="Raj's image"></img>
    </div>
  </div>
  
  );
}

export default Header;




