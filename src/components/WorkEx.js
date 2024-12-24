import React, { useState, useEffect } from 'react';
import '../styles/WorkEx.css';

const WorkExperience = () => {
  const experiences = [
    {
      title: "York University IT Department",
      role: "Junior Full Stack Developer",
      type: "Full-time",
      duration: "July 2024 - August 2024",
      description: [
        "Contributed to the Generative AI project, recognized with a CIO Award.",
        "Developed a custom Moodle block and forms for syllabus/FAQ uploads, and made API calls for course-specific bot instances.",
        "Used Mustache templates, JavaScript, and Ajax for dynamic content and full-stack optimization.",
        "Gained proficiency in PHP, Moodle APIs, and database management.",
        "Tool serves 55,000+ students, enhancing education with AI-driven support.",
        "Collaborated with cross-functional teams to deliver project objectives."
      ]
    },
    {
      title: "York Federation of Students",
      role: "IT Support Assistant",
      type: "Part-time",
      duration: "Sep 2022 – Present",
      description: [
        "Provided tech support, resolved hardware/software issues, and maintained IT equipment for events.",
        "Assisted with network connectivity to ensure smooth event operations."
      ]
    },
    {
      title: "Tim Hortons",
      role: "Supervisor",
      type: "Full-time",
      duration: "Mar 2022 - Sept 2024",
      description: [
        "Streamlined processes, increasing productivity and reducing complaints by 40%.",
        "Trained new staff, improving workforce integration and customer satisfaction.",
        "Optimized inventory strategy, reducing waste by 10%, and maintained strong team communication."
      ]
    }
  ];


  return (
    <section id="workEx" className="workEx">
    <h2 className="worktitle"> Work Experience</h2>
    <div className="work-experience">
      {experiences.map((experience, index) => (
        <div key={index} className="work-card">
          <div className="work-header">
            <h3 className="work-title">{experience.title}</h3>
            <div className="work-role-duration">
              <p>{experience.role}</p>
              <p className="work-duration">{experience.duration}</p>
            </div>
          </div>
          <div className="work-description">
            <ul className='jobContent'>
              {experience.description.map((item, idx) => (
                <li key={idx} className="description-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default WorkExperience;








// import React, { useState, useEffect } from 'react';
// import '../styles/WorkEx.css';

// const WorkExperience = () => {

//   const experiences = [
//     {
//       title: "Generative AI Project, York University",
//       role: "Junior Full Stack Developer",
//       type: "Full-time",
//       duration: "July 2024 - August 2024",
//       description: [
//         "Contributed to York University’s Generative AI project, recognized with a CIO Awards Canada 2024 honor.",
//         "Developed a custom Moodle block and several forms for uploading syllabus and FAQs, enabling the chatbot to respond to queries.",
//         "Made API calls to the backend server to create bot instances specific to individual courses, facilitating real-time interactions.",
//         "Utilized Mustache templates, JavaScript, and Ajax for dynamic content rendering and optimized full-stack interaction.",
//         "Acquired proficiency in PHP, Moodle APIs, and database management through hands-on experience.",
//         "This tool will serve over 55,000 York University students, enriching their education with AI-driven support.",
//         "Collaborated effectively with cross-functional teams, demonstrating strong communication and problem-solving skills."
//       ]
//     },
//     {
//       title: "York Federation of Students",
//       role: "IT Support Assistant",
//       type: "Part-time",
//       duration: "Sep 2022 – Present",
//       description: [
//         "Provided technical support by troubleshooting and resolving hardware and software issues for event staff, ensuring smooth event operations.",
//         "Set up and maintained computer systems and IT equipment, ensuring all necessary technology was ready for use during events.",
//         "Assisted with network connectivity issues, ensuring seamless communication and operational efficiency."
//       ]
//     },
//     {
//       title: "Tim Hortons",
//       role: "Supervisor",
//       type: "Full-time",
//       duration: "Mar 2022 - Sept 2024",
//       description: [
//         "Deployed problem-solving tactics to streamline processes, increasing productivity and reducing customer complaint rate by 40%.",
//         "Actively involved in training new staff members, imparting essential skills and company protocols, ensuring a smooth integration into the workforce.",
//         "Spearheaded the inventory management process by analyzing sales trends over recent months, resulting in a more efficient inventory strategy that reduced waste by 10%.",
//         "Consistently maintained strong interpersonal skills, fostering positive relationships and efficient communication channels between team members, management, and customers."
//       ]
//     }
//   ];
    
//   return (
  
//       <div className="work-experience-sections">
//       <h2 className="sub-section">Experience</h2>
//         {experiences.map((experience) => (
//           <div className="work-card">
//           <div className='title'>
//             <h3>{experience.title}</h3>
//             <h3>{experience.role}</h3>
//             <h3>{experience.duration}</h3>
      
           
//             </div>
//             <div className='description'>
//             <p>{experience.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
  
//   );
// };

// export default WorkExperience;








// import React from "react";
// import '../styles/WorkEx.css';

// // function WorkEx(){
// //     return(
// //         <section class="sub-section-alternative" id="experience">
   
// // </section>
// //     )


// // }
// // export default WorkEx;

// function WorkEx(){

// const experiences = [
//     {
//       title: "York University UIT Department",
//       role: "Full Stack Developer",
//       type: "Full-time",
//       description: [
//         "Providing hands-on technical support and orientation to instructors",
//         "Solving audiovisual issues and other technological challenges to ensure efficient delivery of course material"
//       ],
//     },
//     {
//       title: "Supervisor",
//       role: "Tim Hortons",
//       type: "Full-time",
//       link: "https://www.rocscience.com/about/news-events/technical-projects-of-rocscience-co-ops-summer-2021",
//       description: [
//         "Developed new features, and updated existing ones using C++ and MFC for Version 5.012 of UnWedge, a geotechnical engineering program",
//         "Improved and added elements to the UI in RS2 for better data visualization"
//       ],
//     },
//   ];

//   return (
//     <section className="workEx" id="experience">
//     <div className="container">
//       <h2 className="sub-section">Experience</h2>
//       <div className="container">
//         <div className="rb-container">
//           <ul className="rb">
//             {experiences.map((exp, index) => (
//               <li key={index} className="rb-item">
//                 <div className="position">
//                   <div className="timestamp">
//                     <h4>{exp.title}<br />{exp.role}</h4>
//                   </div>
//                   <div className="experience-tag">
//                     {exp.type} <br />
//                     {exp.link && (
//                       <a href={exp.link} target="_blank" rel="noopener noreferrer">
//                         <div className="term">View More</div>
//                       </a>
//                     )}
//                   </div>
//                 </div>
//                 <div className="item-title">
//                   {exp.description.map((item, i) => (
//                     <p key={i}>● {item}</p>
//                   ))}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       </div>
//     </section>
//   );
// };

// export default WorkEx;