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
                Sophomore computer science & data science student at Rutgers University - New Brunswick.
                Driven to expand expertise in a dyanmic and ever-changing learning enviroment.
                Eager to contribute to rapid advancements and innovation and aim to explore new opportunities.
              </p>
              <p>
                Currently looking for roles and opportunities in software engineering and data science/engineering. 
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
              <div className="stack main-title">
                <span>Tech Stack.</span>
              </div>

              <div className="companies">
             
              <div className="company">
              <div className="name tech">Languages:</div>

              <div class="languages">
                  {/* First Row */}
                  <div class="language">
                    <img src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png" alt="Java" class="language-image" />
                    <span class="task">Java</span>
                  </div>

                  <div class="language">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="Python" class="language-image" />
                    <span class="task">Python</span>
                  </div>

                  <div class="language">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" alt="C" class="language-image" />
                    <span class="task">C</span>
                  </div>

                  <div class="language">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" alt="C++" class="language-image" />
                    <span class="task">C++</span>
                  </div>

                  <div class="language">
                    <img src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png" alt="JavaScript" class="language-image" />
                    <span class="task">JavaScript</span>
                  </div>

              </div>

              <div class="languages">
                  {/* Second Row */}

                  <div class="language">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="HTML" class="language-image" />
                    <span class="task">HTML</span>
                  </div>

                  <div class="language">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png" alt="CSS" class="language-image" />
                    <span class="task">CSS</span>
                  </div>

                  <div class="language">
                    <img src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2019/07/image2-1.png?fit=600%2C315&ssl=1" alt="SQL" class="language-image" />
                    <span class="task">SQL</span>
                  </div>

                  <div class="language">
                    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--LkL103Qa--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/377/landscape/typescriptlang.png" alt="TypeScript" class="language-image" />
                    <span class="task">TypeScript</span>
                  </div>

                  <div class="language">
                    <img src="https://www.coretechs.com/wp-content/uploads/2020/08/kotlin-1-logo.png" alt="Kotlin" class="language-image" />
                    <span class="task">Kotlin</span>
                  </div>

              </div>
              
              

  

              
              </div>


                {/* <div className="company">
                  <div className="name tech">Languages:</div>
                  <ul className="tasks">
                    <li>Java</li>
                    <li>Python</li>
                    <li>C/C++</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>SQL</li>
                    <li>NoSQL</li>
                    <li>Kotlin</li>
                  </ul>
                </div> */}

                



                {/* <div className="company">
                  <div className="name tech">Frameworks/Libraries/Technologies:</div>
                  <ul className="tasks">
                    <li>D3.js</li>
                    <li>Node.js</li>
                    <li>Kubernetes</li>
                    <li>Docker</li>
                    <li>Git/Github</li>
                    <li>MERN</li>
                    <li>Selenium</li>
                    <li>Cypress</li>
                    <li>React</li>
                    <li>REST APIs</li>
                    <li>Angular</li>
                    <li>Scrapy</li>
                    <li>Pandas</li>
                    <li>NumPy</li>
                    <li>Matplotlib</li>
                    <li>vue.js</li>
                    <li>MongoDB</li>
                  </ul>
                </div> */}

                {/* <div className="company">
                  <div className="name tech">Familiar:</div>
                  <ul className="tasks">
                    <li>Django</li>
                    <li>Flask</li>
                    <li>AWS</li>
                    <li>UI/UX</li>
                  </ul>
                </div> */}

                {/* 
                
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
                
                */}

              
              </div>
            </div>

            <div className="experience">
              <div className="main-title">
                <span>experience.</span>
              </div>

              <div className="companies">

                <div className="company">
                  <div className="name">Rutgers University (Computer Science Academic Tutor)</div>
                  <div className="year">July 2023 - Present</div>
                  <ul className="tasks">
                    <li>
                    Tutored athletes in multiple courses related to Computer Science such as Data Structures & Algorithms, Introduction to Logic, and Calculus I & II
                    </li>
                    <li>
                    Enhanced academic proficiency of student-athletes through personalized tutoring, adapting to individual learning styles, leading to noticeable academic advancement
                    </li>
                    
                  </ul>
                </div>


                <div className="company">
                  <div className="name">Mathnasium (Mathematics Tutor)</div>
                  <div className="year">September 2022 - Present</div>
                  <ul className="tasks">
                    <li>
                    Leveraged digital tools to effectively address the learning requirements of a diverse group of 30 students, leading to an exceptional "A" final average grade in respective mathematics courses                    </li>
                    
                    <li>
                    Managed and provided one-on-one and group virtual  environments for 3+ students per session while increasing student enrollment and commitment through robust remote learning sessions held weekly
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
