import rightarrow from "./icons8-double-right-50.png";
import React, { useEffect, useState } from "react";
import cancel from "./icons8-cancel-50.png";
import map from "./map.png";
import chennai from "./Chennai Saloon.png";
import callme from "./Call.png";
import sendmail from "./sendmail (1).png";
import address from "./Location.png";
import leftarrow from "./icons8-left-arrow-50.png";
import myprofile from "./myprofile.jpg";
import Loginpage from "./Loginpage-TechGram.png";
import UserPage from "./Userpage-TechGram (1).png";
import Lessgo from "./Lessgo-mainpage.png";
import lapimg from "./icons8-laptop-30.png";
import responsive from "./icons8-responsive-64.png";
import csss from "./icons8-css-100.png";
import reactimg from "./icons8-react-24.png";
import webjs from "./icons8-js-48.png";
import javaimg from "./icons8-java-50.png";
import html from "./html-5.png";
import arrow from "./arrow.png";
import css from "./css-3.png";
import js from "./js.png";
import java from "./java.png";
import git from "./github.png";
import reactjs from "./physics.png";
import menubar from "./icons8-menu-bar-50.png";
import linkedIn from "./icons8-linkedin-30.png";
import Facebook from "./icons8-facebook-30.png";
import twitter from "./icons8-twitter-30.png";
import mail from "./icons8-gmail-64.png";
import blackmenu from "./list.png";
import insta from "./icons8-instagram-50.png";
export default function Portfolio() {
  const [mgass, setmgass] = useState(false);
  const [width, setWidth] = useState(10);
  const [scroller, setScrolled] = useState(0);
  const [bar, setBar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handlemgass);
    return () => {
      window.removeEventListener("scroll", handlemgass);
    };
  });
  function handlemgass() {
    if (window.scrollY >= 800) {
      setmgass(true);
    } else {
      setmgass(false);
    }
  }

  function updateWidth() {
    setWidth((prevX) => {
      const newX =
        -(document.querySelector(".project-img").children.length - 1) * 700;
      return prevX <= newX ? prevX : prevX - 850;
    });
  }
  function handleWidth() {
    setWidth((prevX) => (prevX >= 0 ? prevX : prevX + 850));
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  function handleScroll() {
    if (window.scrollY > 120) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }
  function handleScrolltoContactinmob(){
    if(window.scrollY<=0){
      window.scrollBy({
        top:5420,behavior:"smooth"
      })
    }
  }
  function handleScrolltoContact(){
  
      window.scrollBy({
        top:3590,behavior:"smooth"
      })
    
  }
  function handleScrolltoHome() {
    window.scrollBy({
      top: -10000,
      behavior: "smooth",
    });
  }
  function handleScrolltoprojects() {
    if (window.scrollY <= 0) {
      window.scrollBy({
        top: 1950,
        behavior: "smooth",
      });
    } else if (window.scrollY <= 600) {
      window.scrollBy({
        top: 1380,
        behavior: "smooth",
      });
    } else if (window.scrollY >= 1000) {
      window.scrollBy({
        top: 860,
        behavior: "smooth",
      });
    }
  }
  function handleScrolltoProjectInmob() {
    if (window.scrollY <= 0) {
      window.scrollBy({
        top: 2890,
        behavior: "smooth",
      });
    } else if (window.scrollY >= 400 && window.scrollY <= 600) {
      window.scrollBy({
        top: 2490,
        behavior: "smooth",
      });
    } else if (window.scrollY >= 1300) {
      window.scrollBy({
        top: 1500,
        behavior: "smooth",
      });
    }
  }
  function handleScrolltoserviceinmob() {
    if (window.scrollY <= 0) {
      window.scrollBy({
        top: 1400,
        behavior: "smooth",
      });
    } else if (window.scrollY <= 500) {
      window.scrollBy({
        top: 1010,
        behavior: "smooth",
      });
    } else if (window.scrollY >= 2800) {
      window.scrollBy({
        top: -1410,
        behavior: "smooth",
      });
    }
  }
  function handleScrollToAboutinmob() {
    if (window.scrollY <= 0) {
      window.scrollBy({
        top: 450,
        behavior: "smooth",
      });
    } else if (window.scrollY >= 2500) {
      window.scrollBy({
        top: -2450,
        behavior: "smooth",
      });
    } else if (window.scrollY >= 800 && window.screenY <= 900) {
      window.scrollBy({
        top: -1000,
        behavior: "smooth",
      });
    }
  }
  function handleScrollToServices() {
    if (window.scrollY <= 0) {
      window.scrollBy({
        top: 1100,
        behavior: "smooth",
      });
    } else if (window.scrollY <= 600) {
      window.scrollBy({
        top: 500,
        behavior: "smooth",
      });
    } else if (window.scrollY >= 1700) {
      window.scrollBy({
        top: -900,
        behavior: "smooth",
      });
    }
  }
  function handleScrollToAbout() {
    if (window.scrollY <= 0) {
      window.scrollBy({
        top: 570,
        behavior: "smooth",
      });
    } else if (window.scrollY >= 1700) {
      window.scrollBy({
        top: -1400,
        behavior: "smooth",
      });
    } else if (window.scrollY >= 1000) {
      window.scrollBy({
        top: -550,
        behavior: "smooth",
      });
    }
  }

  function updateBar() {
    setBar(!bar);
  }
  return (
    <>
      <div>
        <div className="home-page">
          <div className="nav-bar" id={scroller ? "navv" : ""}>
            <div>PortFolio</div>
            <div className="lesser">
              <img src={scroller ? blackmenu : menubar} onClick={updateBar} />
              <nav style={{ display: bar ? "flex" : "none" }}>
                <ul>
                  <li>
                    Home{" "}
                    <img
                      style={{ width: "20px" }}
                      onClick={updateBar}
                      src={cancel}
                    ></img>
                  </li>
                  <li
                    onClick={() => {
                      handleScrollToAboutinmob();
                    }}
                  >
                    About
                  </li>
                  <li
                    onClick={() => {
                      handleScrolltoserviceinmob();
                    }}
                  >
                    Service
                  </li>
                  <li
                    onClick={() => {
                      handleScrolltoProjectInmob();
                    }}
                  >
                    Projects
                  </li>
                  <li>Blog</li>
                  <li onClick={handleScrolltoContactinmob}>Contact</li>
                </ul>
              </nav>
            </div>

            <nav>
              <ul>
                <li
                  onClick={() => {
                    handleScrolltoHome();
                  }}
                >
                  Home
                </li>
                <li
                  onClick={() => {
                    handleScrollToAbout();
                  }}
                >
                  About
                </li>
                <li
                  onClick={() => {
                    handleScrollToServices();
                  }}
                >
                  Service
                </li>
                <li
                  onClick={() => {
                    handleScrolltoprojects();
                  }}
                >
                  Projects
                </li>
                <li>Blog</li>
                <li onClick={handleScrolltoContact}>Contact</li>
              </ul>
            </nav>
          </div>
          <div className="home-body">
            <div className="name">
              Hi, Im <span style={{ color: "green" }}>Alaudhin</span>
            </div>
            <div className="work">
              I Am A <span style={{ color: "green" }}>Web Developer</span>
            </div>
            <div className="social-media">
              <img src={linkedIn}></img>
              <img src={Facebook}></img>
              <img src={mail}></img>
              <img src={insta}></img>
              <img src={twitter}></img>
            </div>
          </div>
        </div>
        <div className="about-page">
          <div className="my-img">
            <img src={myprofile} />
          </div>
          <div className="my-text">
            <div>
              <h1>Few Words About Me</h1>
              <div>
                Hi, I'm Alaudhin, a dedicated front-end developer with a unique
                background in civil engineering. Graduating in 2023, I
                transitioned into the dynamic field of IT to pursue my passion
                for creating exceptional digital experiences. Proficient in
                HTML, CSS, JavaScript, and ReactJS for front-end development, I
                also possess a solid understanding of Java and SQL for back-end
                development. As a full-stack developer, I specialize in crafting
                top-notch services and projects that deliver optimal user
                experiences.<br></br>
                <br></br>Whether it's designing responsive interfaces or
                optimizing database queries, I take pride in my ability to
                collaborate effectively with teams and stakeholders to bring
                ideas to life.
              </div>
              <h2>My Skills : </h2>
              <div className="skill-img">
                <img src={html} />
                <img src={css} />
                <img src={js} />
                <img src={reactjs} />
                <img src={git} />
                <img src={java} />
              </div>
              <div className="buttons">
                <button>
                  <a href="https://drive.usercontent.google.com/u/0/uc?id=1GwvGwU6iDuzTKIveWVcQnAjvxOhcoYMz&export=download">
                    Download Resume
                  </a>
                </button>
                <button className="hire-btn">Hire Me</button>
              </div>
            </div>
          </div>
        </div>
        <div className="whatido">
          <div className="do-texts">
            <h1>What I Do</h1>
            <h4>
              Specializing in full-stack development, adept at crafting robust
              applications .
            </h4>
          </div>
          <div className="skill-container">
            <div className="skill-1">
              <div className="skilll" id={mgass ? "mass" : ""}>
                <img src={lapimg} />
                <h4>Web Design</h4>
                <div>
                  Dedicated to crafting visually stunning and intuitive web
                  designs that captivate audiences and enhance user experiences
                </div>
              </div>
            </div>
            <div className="skill-2">
              <div className="skilll" id={mgass ? "mass" : ""}>
                <img src={responsive} />
                <h4>Responsive Design</h4>
                <div>
                  Proficient in responsive design techniques, ensuring websites
                  adapt seamlessly across various devices.
                </div>
              </div>
            </div>
            <div className="skill-2">
              <div className="skilll" id={mgass ? "mass" : ""}>
                <img src={webjs} />
                <h4>Web Development</h4>
                <div>
                  Skilled in web development, proficient in turning design
                  concepts into interactive and dynamic websites with clean code
                </div>
              </div>
            </div>
            <div className="skill-2">
              <div className="skilll" id={mgass ? "mass" : ""}>
                <img src={reactimg} />
                <h4>Front-End Library</h4>
                <div>
                  Proficient in ReactJS, leveraging its component-based
                  architecture to build interactive and scalable user interfaces
                  with ease.
                </div>
              </div>
            </div>
            <div className="skill-2">
              <div className="skilll" id={mgass ? "mass" : ""}>
                <img src={csss} />
                <h4>Styles</h4>
                <div>
                  Dedicated to crafting elegant and visually appealing CSS
                  styles that enhance the overall look and feel of websites
                </div>
              </div>
            </div>
            <div className="skill-2">
              {" "}
              <div className="skilll" id={mgass ? "mass" : ""}>
                <img src={javaimg} />
                <h4>Java</h4>
                <div>
                  Proficient in Java backend development, adept at building
                  robust and scalable server-side applications with Java
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="myprojects">
          <h1>My Projects</h1>
          <div>
            Dedicated to crafting responsive frontend projects that seamlessly
            adapt to various devices, providing an optimal viewing experience
            for users
          </div>
          <div className="project-container">
            <div
              className="project-img"
              style={{ left: `${width}px`, position: "relative" }}
            >
              <img src={Lessgo} />
              <img src={Loginpage} />
              <img src={UserPage} />
            </div>
            <div id="buttons">
              <img src={leftarrow} onClick={handleWidth} />
              <img onClick={updateWidth} src={rightarrow} />
            </div>
          </div>
          <h1>Wanna Visit My Projects?</h1>
          <div className="visit-container">
            <div className="doss">
              <img src={Lessgo} />
              <h3>LessGo Travels</h3>
              <div>
                Crafting immersive user experiences with ReactJS, our travel
                agency website seamlessly merges stunning visuals with intuitive
                navigation, inviting users to embark on their next adventure
                with ease
              </div>
              <br></br>
              <div>
                {" "}
                <a
                  href="https://alaudhin936.github.io/travel-agency/"
                  style={{ color: "green" }}
                >
                  Click Here{" "}
                </a>{" "}
                To Enjoy The Show
              </div>
            </div>
            <div className="doss">
              <img src={chennai} />
              <h3>The Chennai Saloon</h3>
              <div>
                Embracing ReactJS, our salon shop website blends elegant design
                with seamless functionality, offering clients a tailored
                experience in the world of beauty and grooming
              </div>
              <br></br>
              <div>
                {" "}
                <a href="#" style={{ color: "green" }}>
                  Click Here{" "}
                </a>{" "}
                To Enjoy The Show
              </div>
            </div>
            <div className="doss">
              <img src={Loginpage} />
              <h3>Tech-Gram Login Page</h3>
              <div>
                our social media login page revolutionizes user authentication
                with sleek design and effortless integration, ensuring a
                seamless entry point into the digital social sphere
              </div>
              <br></br>
              <div>
                {" "}
                <a
                  href="https://alaudhin936.github.io/Tech-Gram/"
                  style={{ color: "green" }}
                >
                  Click Here{" "}
                </a>{" "}
                To Enjoy The Show
              </div>
            </div>
            <div className="doss">
              <img src={UserPage} />
              <h3>Tech-Gram User Page</h3>
              <div>
                Powered by ReactJS, our social media user main page redefines
                connectivity with dynamic features and a sleek interface,
                fostering engaging interactions within the digital community
              </div>
              <br></br>
              <div>
                {" "}
                <a
                  href="https://alaudhin936.github.io/UserPage-TG/"
                  style={{ color: "green" }}
                >
                  Click Here{" "}
                </a>{" "}
                To Enjoy The Show
              </div>
            </div>
          </div>
        </div>
        <div className="contact">
<h1>Reach me</h1>
<div className="contact-type">
  <div><img src={address}/>
 <div>Thiruvallur,kk Nagar<br></br>Chennai-631402</div>
  </div>
  <div><img src={callme}/>
  <div>+91 93613 03772<br></br>+91 90876 34562</div></div>
  <div><img src={sendmail}/>
  <div>ralaudhin1@gmail.com<br></br>alaudhinallu
  @gmail.com</div></div>
</div>
<div className="send-query">
  <div className="my-enquiry">
    <div className="myy-enquiry">
      <input placeholder="Your Name"/>
      <input placeholder="e-mail"/>
      <input placeholder="subject"/>
      <input placeholder="Phone"/>
    </div>
    <div>
    <textarea name="comment" rows="4" cols="50" placeholder="Write Message"></textarea><br></br>
    <button className="sendmsg">Send Message</button>
    </div>
  </div>
  <div className="map">
    <img src={map}></img>
      </div>
</div>
        </div>
        <footer>Copyright ©2024 
          <span style={{color:"green",position:"relative"}}> Alaudhin_Dev </span> All Rights Reserved</footer>
      </div>
      <div className="absolute">
        <img
          src={arrow}
          style={{ display: scroller ? "block" : "none" }}
          onClick={() => {
            handleScrolltoHome();
          }}
        />
      </div>
    </>
  );
}
