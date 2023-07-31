import React, { useEffect } from "react";
import { motion } from "framer-motion";
import PreLoader from "../components/PreLoader";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as ScrollSVG } from "../assets/images/down-scroll.svg";
import { ReactComponent as Triangle } from "../assets/images/triangle.svg";
import { boxHover, boxExit } from "../animations";
import Footer from "../components/Footer";
import AnimateEl from "../components/AnimateEl";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const text1 = "Hi, I'm Tejas.";
const text2 = "Code, Creativity, and Projects.";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = "Tejas | Portfolio";
  }, []);

  return (
    <>
      <PreLoader />

      <motion.div
        exit={{ height: "100vh", transition }}
        className="transition2"
      />

      <div className="landing">
        <section className="landing__top">
          <div className="sub">Aspiring Software Engineer</div>
          <h1 className="landing__main">
            <span className="text-con">
              {text1.split("").map((t, i) => (
                <span key={i} className="text">
                  {t}
                </span>
              ))}
              <br />
              {text2.split("").map((t, i) => (
                <span key={i} className="text">
                  {t}
                </span>
              ))}
            </span>
          </h1>
          <h1 className="landing__main2">
          {text1} <br /> {text2}
          </h1>
          <div className="links">
            <NavLink className="item" to="/about">
              About Me
            </NavLink>
            <span className="item">—</span>
            <span className="item"><a href="#projects">Personal Projects</a></span>
          </div>

          <div className="scroll-down">
            <ScrollSVG />
          </div>

          <div className="shapes">
            <div className="main-circle" />
            <div className="shape shape-1" />
            <div className="shape shape-2">
              <Triangle />
            </div>
            <div className="shape shape-3" />
            <div className="shape shape-4" />
          </div>
        </section>

        <section className="landing__work">
          <AnimateEl>
            <div className="title" id="projects">
              Personal <br /> Projects
            </div>
          </AnimateEl>
          <div className="boxes">
            <AnimateEl>
              <a
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
                className="box box-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/TejasK28/Film-Oracle-Sentiment-Analysis/"
              >
                <div className="box-content">
                  <div className="box-anim p-title">Sentiment Analysis for Movies & Shows</div>
                  <div className="box-anim p-sub">
                    A neural network learns your movie interests and predicts what movies & shows you would enjoy.
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>
                <div className="in-progress-banner">In Progress</div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
            <AnimateEl>
              <a
                href="https://github.com/TejasK28/Course-Sniper-2.0"
                target="_blank"
                rel="noopener noreferrer"
                className="box box-2"
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
              >
                <div className="box-content">
                  <div className="box-anim p-title">Rutgers University: Course Sniper</div>
                  <div className="box-anim p-sub">
                    Automates course selection & registration for highly competitive courses.  
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
            
            
            <AnimateEl>
              <a
                href="https://github.com/TejasK28/Monopoly"
                target="_blank"
                rel="noopener noreferrer"
                className="box box-3"
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
              >
                <div className="box-content">
                  <div className="box-anim p-title">Monopoly</div>
                  <div className="box-anim p-sub">
                    Recreation of the family game Monopoly in Java.
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>
                <div className="in-progress-banner">In progress</div>
                <div className="box-image"></div>
              </a>
            </AnimateEl>

            <AnimateEl>
              <a
                href="https://github.com/TejasK28/Skip-The-Line-Kivy-Version"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
                className="box box-4"
              >
                <div className="box-content">
                  <div className="box-anim p-title">New Jersey MVC Appointment Sniper</div>
                  <div className="box-anim p-sub">
                    Automates appointment registration process for any MVC location in NJ. Open sourced during the pandemic.
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
            
          </div>
          <a
            href="https://github.com/tejask28"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="more">
              <div className="btn-content">View more projects</div>
            </button>
          </a>
        </section>

        <section className="find-me">
          <div className="title">
            Find <br /> Me{" "}
            <span role="img" aria-label="find-emoji">
              🔎
            </span>
          </div>
          <div className="topic">PS: I enjoy writing.</div>

          <div className="social-boxes">
            <a
              href="https://github.com/tejask28"
              target="_blank"
              rel="noopener noreferrer"
              className="box github"
            >
              <div className="content">
                <i className="fab fa-github-alt"></i>
                <div className="items">
                  <div className="name">Github</div>
                  <div className="user">/tejask28</div>
                </div>
              </div>
            </a>
            

            <a
              href="https://www.linkedin.com/in/tejaskandri/"
              target="_blank"
              rel="noopener noreferrer"
              className="box linkedin"
            >
              <div className="content">
                <i className="fab fa-linkedin-in"></i>
                <div className="items">
                  <div className="name">Linkedin</div>
                  <div className="user">/tejaskandri</div>
                </div>
              </div>
            </a>
            
          </div>
        </section>

        <section className="contact">
          <div className="topic">Interested To Learn More ?</div>
          <Link to="/contact">
            <div className="title">Let's Talk &#8594;</div>
          </Link>
        </section>

        {/* footer exported as component */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
