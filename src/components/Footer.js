import React from "react";
import "../styles/Footer.css";

import Linksvg from "../svg/linkedin.jsx";
import Igsvg from "../svg/ig.jsx";
import GitFootsvg from "../svg/gitfoot.jsx";

function Footer(){
    return(
        <section id="footer" className="Footer">
        
        <div className='social-links'>
            <ul>
            <a className="image-bounce" href="https://www.instagram.com/rajpanjabi__/"> <Igsvg/></a>  
            <a className="image-bounce" href="https://www.linkedin.com/in/rajpanjabi/"> <Linksvg/> </a> 
            <a className="image-bounce"  href="https://www.github.com/rajpanjabi/"> <GitFootsvg/></a> 
            </ul>
        </div>
        <p class="copyright">© 2024 Raj Panjabi </p>

        </section>
    )
}

export default Footer;
