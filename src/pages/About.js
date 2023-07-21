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
                Sophomore Computer Science student at Rutgers University - New Brunswick.  
              </p>
              <p>
                I'm pursuing internship opportunities.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1LONjL1bsZQ55ZXYRsANSlAionsJnOCc6/view?usp=sharing"
              download
            >
              <i className="fas fa-file-alt"></i> Download Resume
            </a>
          </div>

          <div className="about__bottom">
            <div className="experience">
              <div className="stack main-title">
                <span>Stack.</span>
              </div>

              <div className="companies">
                <div className="company">
                  <div className="name tech">Core Tech:</div>
                  <ul className="tasks">
                    <li>Python</li>
                    <li>C/C++</li>
                    <li>JavaScript</li>
                    <li>Angular</li>
                    <li>NestJS</li>
                    <li>PrimeNG</li>
                    <li>REST APIs</li>
                    <li>SQLite3</li>
                    <li>MySQL</li>
                    <li>CSS</li>
                  </ul>
                </div>

                <div className="company">
                  <div className="name tech">Familiar:</div>
                  <ul className="tasks">
                    <li>Django</li>
                    <li>React</li>
                    <li>AWS S3 & IAM User</li>
                    <li>UI/UX</li>
                  </ul>
                </div>

                <div className="company">
                  <div className="name tech">On The Job:</div>
                  <ul className="tasks">
                    <li>Responsive Design.</li>
                    <li>Version Control.</li>
                    <li>
                      JavaScript best practices, clean code.
                    </li>
                    <li>Continuous Integration/Development.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="experience">
              <div className="main-title">
                <span>experience.</span>
              </div>

              <div className="companies">

                <div className="company">
                  <div className="name">Rutgers University (Student Athlete Tutor)</div>
                  <div className="year">July 2023 - Present</div>
                  <ul className="tasks">
                    <li>
                    Tutoring athletes in multiple courses related to Computer Science such as Data Structures & Algotrithms, Introduction to Logic, and Calculus I & II
                    </li>
                    <li>
                    Second
                    </li>
                    <li>
                    Third bullet
                    </li>
                  </ul>
                </div>


                <div className="company">
                  <div className="name">Mathnasium (Mathematics Tutor)</div>
                  <div className="year">September 2022 - Present</div>
                  <ul className="tasks">
                    <li>
                      First Bullet point
                    </li>
                    <li>
                    Collaborating with other team members to complete the given tasks.
                    </li>
                    <li>
                    Working as a full-stack developer.
                    </li>
                  </ul>
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
