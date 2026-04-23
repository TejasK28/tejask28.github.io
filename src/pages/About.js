import React, { useEffect } from "react";
import { motion } from "framer-motion";
// import { fadeUp } from "../animations";
import gsap from "gsap";
import Footer from "../components/Footer";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = "Tejas — About Me";
    // fadeUp(".about-inner", 0.8);
    gsap.from(".about__inner", {
      duration: 0.2,
      delay: 1,
      opacity: 0,
      ease: "Power4.out",
    });
    gsap.to(".cursor", {
      duration: 0,
      css: { display: "none" },
    });
  }, []);
  return (
    <>
      <motion.div
        initial={{ height: "100%" }}
        // animate={{ height: "0%", transition: { ...transition, delay: 1 } }}
        className="transition"
      />
      <motion.div
        exit={{ height: "100%", transition }}
        className="transition2"
      />
      <motion.div
        initial={{ height: 0, visibility: "hidden" }}
        animate={{
          height: "100%",
          visibility: "visible",
          transition: { ...transition, duration: 2, delay: -0.2 },
        }}
        className="about"
      >
        <div className="about__inner">
          <div className="about__top">
            <div className="my-name">
              Tejas <br /> Kandri.
            </div>
            <div className="desc">
              <p>
                Computer Science & Data Science New Grad @ Rutgers University - New Brunswick.
              </p>
              <p>
                Currently looking for roles and opportunities in software engineering, data science/engineering, and cybersecurity. 
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1LONjL1bsZQ55ZXYRsANSlAionsJnOCc6/view?usp=sharing"
              download
            >
              <i className="fas fa-file-alt"></i> View Resume
            </a>
          </div>

          <div className="about__bottom">
            <div className="experience">
              <div className="companies">
              </div>
            </div>

            <div className="experience">
              <div className="main-title">
                <span>experience. </span>
              </div>

              <div className="companies">

              {/* Autation Developer Internship*/}

              <div className="company">
                  <div className="name">AI & Automation Developer @ Veolia North America</div>
                  <div className="year">June 2025 - Present</div>
                  {/* <ul className="tasks">
                    <li>
                      
                    </li>
                    <li>
                    </li>
                    <li>
                    </li>
                  </ul> */}
                </div>

                
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </motion.div>
    </>
  );
};

export default About;
