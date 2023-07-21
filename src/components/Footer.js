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
                data-text="tejaskandri28@gamil.com"
                href="mailto:tejaskandri28@gamil.com"
              >
                tejaskandri28@gamil.com
              </a>
            </p>

            <p>
              <a
                data-text="wa.me/sharmiladroja"
                href="https://wa.me/+918805929891"
                target="_blank"
                rel="noopener noreferrer"
              >
                wa.me/sharmiladroja
              </a>
            </p>



          </div>
          <div className="link">

            <p>
              <Link data-text="Resume" to="/about">
                Resume
              </Link>
            </p>

            <p>
              <Link data-text="Message" to="/contact">
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
