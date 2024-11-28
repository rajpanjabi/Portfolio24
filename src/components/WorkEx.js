import React from "react";
import '../styles/WorkEx.css';

// function WorkEx(){
//     return(
//         <section class="sub-section-alternative" id="experience">
   
// </section>
//     )


// }
// export default WorkEx;

function WorkEx(){

const experiences = [
    {
      title: "York University UIT Department",
      role: "Full Stack Developer",
      type: "Full-time",
      description: [
        "Providing hands-on technical support and orientation to instructors",
        "Solving audiovisual issues and other technological challenges to ensure efficient delivery of course material"
      ],
    },
    {
      title: "Supervisor",
      role: "Tim Hortons",
      type: "Full-time",
      link: "https://www.rocscience.com/about/news-events/technical-projects-of-rocscience-co-ops-summer-2021",
      description: [
        "Developed new features, and updated existing ones using C++ and MFC for Version 5.012 of UnWedge, a geotechnical engineering program",
        "Improved and added elements to the UI in RS2 for better data visualization"
      ],
    },
  ];

  return (
    <section className="workEx" id="experience">
    <div className="container">
      <h2 className="sub-section">Experience</h2>
      <div className="container">
        <div className="rb-container">
          <ul className="rb">
            {experiences.map((exp, index) => (
              <li key={index} className="rb-item">
                <div className="position">
                  <div className="timestamp">
                    <h4>{exp.title}<br />{exp.role}</h4>
                  </div>
                  <div className="experience-tag">
                    {exp.type} <br />
                    {exp.link && (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer">
                        <div className="term">View More</div>
                      </a>
                    )}
                  </div>
                </div>
                <div className="item-title">
                  {exp.description.map((item, i) => (
                    <p key={i}>● {item}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
};

export default WorkEx;
