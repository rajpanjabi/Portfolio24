import React from "react";
import "../styles/Footer.css";

function Footer(){
    return(
        <section id="footer" className="Footer">
        
        <div className='social-links'>
            <ul>
            <a className="image-bounce" href="https://www.instagram.com/rajpanjabi__/"> <i className="fab fa-instagram fa-lg" aria-hidden="true"></i></a>  
            <a className="image-bounce" href="https://www.linkedin.com/in/rajpanjabi/"> <i className="fab fa-linkedin-in fa-lg" aria-hidden="true"></i> </a> 
            <a className="image-bounce"  href="https://www.github.com/rajpanjabi/"> <i className="fab fa-github fa-lg" aria-hidden="true"></i></a> 
           
            </ul>
        </div>
        <p class="copyright">© 2024 Raj Panjabi </p>

        </section>
    )
}

export default Footer;
