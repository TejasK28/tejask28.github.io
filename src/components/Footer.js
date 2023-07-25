import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <hr />
      <div className="footer-top">
        <div className="message">Contact Me</div>
        <div className="links">
          <div className="link">
            
            <p>
              <a
                data-text="Email"
                href="mailto:tejaskandri28@gamil.com"
              >
                Email
              </a>
            </p>

            <p>
              <a
                data-text="LinkedIn"
                href="https://linkedin.com/in/tejaskandri28"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>



          </div>
          <div className="link">

            <p>
              <Link data-text="Resume" to="/eportfolio/about">
                Resume
              </Link>
            </p>

            <p>
              <Link data-text="Message" to="/eportfolio/contact">
                Message
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© Tejas Kandri 2023</div>
    </footer>
  );
};

export default Footer;
