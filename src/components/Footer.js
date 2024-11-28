import React from "react";
import "../styles/Footer.css";

function Footer(){
    return(
        <section id="footer" className="Footer">
        <h2> Contact Me</h2>
        <div className='social-links'>
            <ul>
                <li><a>Github</a></li>
                <li><a>Linkeidn</a></li>
                <li><a>Email</a></li>
            </ul>
        </div>
        <p class="copyright">©2024 Raj Panjabi </p>

        </section>
    )
}

export default Footer;
