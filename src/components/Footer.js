import React from "react";

const Footer = () => {
return(
    <div className="site-footer">
    <h4 className="text-center">BloGV</h4>
    <p className="text-center">Contact me via Github, Linkedin or Gmail</p>
    <div className="footer-social-link">
    <ul className="social-links-list">
    <li><a href="https://github.com/ganushkevychv" target="_blank" rel="noopener noreferrer" className="github">
    <i className="fab fa-github fa-2x"/>
    </a></li>
    <li><a href="www.linkedin.com/in/vladyslav-ganushkevych" target="_blank" rel="noopener noreferrer" className="linkedin">
    <i className="fab fa-linkedin fa-2x"/>
    </a></li>
    <li><a href="mailto:ganushkevychv@gmail.com" target="_blank" rel="noopener noreferrer" className="gmail">
    <i className="fab fa-google fa-2x"/>
    </a></li>
    </ul>
    </div>
    </div>
)
}



export default Footer
