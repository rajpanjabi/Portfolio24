import React from 'react';
import '../styles/Projects.css';

import FamilyTravelTracker from '../images/FamilyTravelTracker.png';
import capitalQuizpic from '../images/capitalQuizpic.png';
import uber3 from "../images/uber3.png"
import codLol from "../images/codLol.png"
import spotify from "../images/spotify.png"
import data from "../images/data.png"
import chatbot from "../images/chatbot.png"

function Projects(){
    const Projects=[
        {   photo:codLol,
            content:"Created an auction-based web application using Spring Boot and React with Maven project management, featuring a product catalog, bidding system, and Stripe-integrated payment processing. Implemented robust user authentication, and containerized the application with Docker for scalable cloud deployment.",
            name:"BidWise Full Stack Web Application",
            type:"java",
            link:"https://www.github.com/Nishiket-singh/Ecom4413"
        },
        {   photo:chatbot,
            content:"Built an entire GPT architecture from scratch, incorporating transformer blocks and multi-head attention mechanisms, and achieved over 85% accuracy on a dummy dataset by applying machine learning techniques including normalization, temperature",
            name:"Large Language Model from Scratch",
            type:"java",
            link:"https://github.com/kwshr/LMS-ChatBot"
        },
        {   photo:spotify,
            content:"Developed a Java-based backend for a Spotify clone using Spring Boot, integrating MongoDB and Neo4j to create two efficient, scalable microservices. The project focused on building RESTful API endpoints for specific use-cases, leveraging NoSQL and Graph DB, and refined skills in software architecture and Maven for build automation.",
            name:"API Backend Development with Microservices (Spotify Clone)",
            type:"java",
            link:"https://www.github.com/rajpanjabi/Spotify-Clone "
        },
        {   photo:FamilyTravelTracker,
            content:"Travel Tracker is a Node.js and Express web application interfacing with a PostgreSQL database, enabling users to log visited countries, which are then highlighted on an interactive map rendered using EJS templating. The application features a user-friendly interface for adding countries and displays the total count of visited nations.",
            name:"Family Travel Tracker",
            type:"java",
            link:"https://www.github.com/rajpanjabi/TravelTracker"
        },
        {   photo:uber3,
            content:"Developed a predictive model to evaluate Uber Driver’s Lifetime Value using Python libraries, determining key performance indicators and driver tenure to inform strategic business decisions and implement dynamic pricing through clustering.",
            name:"Uber Driver Lifetime Value Analysis",
            type:"Python",
            link:"https://www.github.com/rajpanjabi/Uber_Driver_lifetime_Value_Python"
        },
        {   photo:data,
            content:"Conducted buyer profiling for AeroFit treadmills by analyzing customer demographics, employing descriptive and exploratory analysis with matplotlib and seaborn to distinguish customer characteristics per product, and calculated conditional, marginal probabilities, and outliers impact.",
            name:"Aerofit Treadmill Buyer Profiling",
            type:"python",
            link:"https://www.github.com/rajpanjabi/Treadmill_Buyer_Profiling_Python "
        },
        {  photo:capitalQuizpic,
            content:"Capital City Quiz is an interactive web application where users can test their knowledge of capital cities around the world. Built with Node.js, Express, and PostgreSQL, this quiz challenges users to identify the capital city for each country presented.",
            name:"Capital Quiz Game",
            type:"python",
            link:"https://www.github.com/rajpanjabi/Flag-Quiz"
        },    
    ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      {Projects.map((project)=> (
        <a className="projectLink"  href={project.link}>
        <img className="Photosize" src={project.photo}/>
        <p> <strong>{project.name} </strong></p>
        <p className="contentp">{project.content}</p>
        </a>
      ))}
            
           
     
      <ul>
        <li>Portfolio Website - React</li>
        <li>Chatbot for LMS - Python, Moodle</li>
        <li>LLM from Scratch - PyTorch</li>
      </ul>
    </section>
  );
}

export default Projects;