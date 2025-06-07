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
                Senior Computer Science & Data Science double major @ Rutgers University - New Brunswick.
                Eager to contribute to rapid advancements and innovation and aim to explore new opportunities.
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
                    <img src="https://www.datocms-assets.com/48401/1627663113-learn-typescript.png?fit=max&w=900" alt="TypeScript" class="language-image" />
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
                <span>experience. </span>
              </div>

              <div className="companies">


              {/* Autation Developer Internship*/}

              <div className="company">
                  <div className="name">Junior RPA Developer Intern @ Veolia</div>
                  <div className="year">June 2025 - August 2025</div>
                  <ul className="tasks">
                    <li>
                    </li>
                    <li>
                    </li>
                    <li>
                    </li>
                  </ul>
                </div>

               
                {/* Machine Learning */}

                <div className="company">
                  <div className="name">Machine Learning Engineer Intern @ Artcii</div>
                  <div className="year">June 2024 - September 2024</div>
                  <ul className="tasks">
                    <li>
                    Designed and deployed a Retrieval-Augmented Generation (RAG) system using OpenAI API and Pinecone in Node.js, enabling accurate multi-modal data retrieval that enhanced personalized learning for 20+ users                   
                     </li>
                    <li>
                    Built a real-time analytics dashboard to track user ratings of AI-generated responses, implementing weekly feedback loops that drove targeted improvements in recommendation quality
                    </li>
                    <li>
                      Engineered enterprise-grade MongoDB schemas with built-in validation, optimizing query performance to process over 500 requests/sec while maintaining high availability
                    </li>
                  </ul>
                </div>

                {/* Rutgers */}

                <div className="company">
                  <div className="name">Data Structures Teaching Assistant @ Rutgers University</div>
                  <div className="year">Semptember 2023 - Present</div>
                  <ul className="tasks">
                    <li>
                    Tutored 30+ student-athletes individually in CS fundamentals, resulting in a 90% pass rate and an average 20-point increase in exam scores across the semester
                    </li>
                    <li>
                    Evaluated academic performance for 1300+ students per semester by proctoring and grading exams, reducing grade disputes by 20% through timely and fair evaluation
                    </li>
                    <li>
                    Facilitated review sessions for over 100 students each semester, leading to a significant improvement in understanding algorithms and data structures, which increased student performance on exams by an average of 40 points
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
