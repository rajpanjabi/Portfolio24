import React from 'react';
import '../styles/About.css';
import Reactsvg from"../svg/reactsvg.jsx";
import Htmlsvg from "../svg/html.jsx";
import Csssvg from "../svg/css.jsx"
import Jssvg from "../svg/js.jsx"
import Expresssvg from "../svg/express.jsx"
import Nodesvg from "../svg/nodesvg.jsx"
import Dockersvg from "../svg/docker.jsx"
import Gitsvg from "../svg/git.jsx"
import Javasvg from "../svg/java.jsx"
import Jirasvg from "../svg/jira.jsx"
import Mongosvg from "../svg/mongo.jsx"
import Postgresvg from "../svg/postgreSQl.jsx"
import Pythonsvg from "../svg/python.jsx"
import Springsvg from "../svg/spring.jsx"
import Mysqlsvg from "../svg/mysql.jsx";
import Sqlsvg from "../svg/sql.jsx";
import Csvg from "../svg/c.jsx";
import Gitlabsvg from "../svg/gitlab.jsx";

function About() {
  return (
    <section id="about" className="about">
    <div className='container'>
     <h2>About Me</h2>
      <h3>👋 Hello, I'm Raj Panjabi</h3>
      <p className="aboutText" >I’m a recent Computer Science graduate 👨🏻‍🎓 from York University, diving deep into software development, data analytics, and machine learning.</p>
      
      <p className="aboutText" >I enjoy working out, binge-watching Netflix, and building scalable apps with my headphones on 🎧 and an iced coffee by my side</p>

      <p className="aboutText" >My life motto? “Try again, fail again, fail better.” </p>

      <p className="aboutText" >If you’re up for a chat, collaboration, or just want to swap Netflix recommendations, feel free to reach out! Let’s make something amazing together! 🤝💡</p>
      <h3 className='sk'>👨🏻‍💻 Skills</h3>

        <div className="casediv">
          <div className="lang">
            <h3 className='subsection'>Languages</h3>
              <div className="row1">
                <Pythonsvg/>
                <Javasvg/>
                <Csvg/>
              </div>
              <div className="row2">
              </div>
              <div className="row3">
              </div>
          </div>

          <div className="web">
            <h3 className='subsection'>Web Development</h3>
            <div className="row1">
              <Reactsvg/>
              <Htmlsvg />
              <Csssvg/>
            </div>
            <div className="row2">
              <Jssvg/>
              <Expresssvg/>
              <Nodesvg/>
            </div>
            <div className="row3">
            </div>
          </div>
          <div className="data">
            <h3 className='subsection'> Data</h3>
            <div className="row1">
              <Postgresvg/>
              <Mysqlsvg/>
              <Mongosvg/>
            </div>
            <div className="row2">
            </div>
            <div className="row3">
            </div>
          </div>
    
          <div className="devtools">
            <h3 className='subsection'>Dev Tools</h3>
            <div className="row1">
              <Gitsvg/>
              <Dockersvg/>
              <Jirasvg/>
            </div>
            <div className="row2">
              <Gitlabsvg/>
            </div>
            <div className="row3">
            </div>
          </div>
        
      </div>
    </div>
    </section>
  );
}

export default About;

// <p> <span style={{fontSize:"30px"}}> 🚀 </span> Hello, I'm <strong> Raj Panjabi</strong>!</p>
// <p>Let's code the future, together!</p>