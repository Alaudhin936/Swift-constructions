import { useEffect, useState } from "react";
import "./MainPage.css";
import c1 from "./client1.jpg";
import c2 from "./client2.jpg";
import c3 from "./client3.jpg";
import c4 from "./client4.jpg";
import autocad from "./technical-education.png";
import aboutImg from "./Aboutimg.jpg";
import i1 from "./theodolite.png";
import i2 from "./road.png";
import reviewbg from "./sean-pollock-PhYq704ffdA-unsplash.jpg";
import i3 from "./civil-engineering.png";
import i4 from "./engineer.png";
import i5 from "./location-pin.png";
import uparrow from "./up-arrow.png";
import downarrow from "./down-arrow.png";
import whitelogo from "./swift-constructions-high-resolution-logo-white-transparent.png";
import blacklogo from "./swift-constructions-high-resolution-logo-black-transparent.png";
import blackcancel from "./cancel.png";
import blackmenu from "./list.png";
import twiter from "./icons8-twitter-30.png";
import insta from "./icons8-instagram-50.png";
import facebok from "./icons8-facebook-30.png";
import mail from "./icons8-gmail-64.png";
import linkedin from "./icons8-linkedin-30.png";
import cancel from "./icons8-cancel-50 - Copy.png";
import menuBar from "./icons8-menu-bar-50.png";
export default function MainPage() {
  const [cmt, setCmt] = useState("395");
  const [maja, setMaja] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [jumptop, setJumptop] = useState(false);
  const [anim, setAnim] = useState(false);
  function hanldeanim() {
    if (window.scrollY > 2500) {
      setAnim(true);
    } else {
      setAnim(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", hanldeanim);
    return () => {
      window.removeEventListener("scroll", hanldeanim);
    };
  });
  function handlecmttodown() {
    setCmt((prevCmt) => {
      return prevCmt <= -450 ? prevCmt : prevCmt - 200;
    });
  }
  function handlecmttoup() {
    setCmt((prevCmt) => {
      return prevCmt >= 392 ? prevCmt : prevCmt + 200;
    });
  }
  useEffect(() => {
    window.addEventListener("scroll", hadleJump);
    return () => {
      window.removeEventListener("scroll", hadleJump);
    };
  });
  function hadleJump() {
    if (window.scrollY > 1300) {
      setJumptop(true);
    } else {
      setJumptop(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleAnimation);
    return () => {
      window.removeEventListener("scroll", handleAnimation);
    };
  });
  function navigatetoHomeinlap() {
    if (window.scrollY > 0) {
      window.scrollBy({
        top: -100000,
        behavior: "smooth",
      });
    }
  }
  function navigatetoAboutinlap() {
    if (window.scrollY >= 0 && window.scrollY < 200) {
      window.scrollBy({
        top: 480,
        behavior: "smooth",
      });
    }
    if(window.scrollY>=1500 && window.scrollY<=1800){
      window.scrollBy({
        top:-1120,behavior:"smooth"
      })
    }
  }
  function navigatetoserviceinlap(){
    if(window.scrollY>=0 && window.scrollY<200){
      window.scrollBy({
        top:1600,behavior:"smooth"
      })
    }
    if(window.scrollY>=460 && window.scrollY<=500){
      window.scrollBy({
        top:1120,behavior:"smooth"
      })
    }
  }
  function handleAnimation() {
    if (window.scrollY > 390) {
      setAnimation(true);
    } else {
      setAnimation(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", majafunc);
    return () => {
      window.removeEventListener("scroll", majafunc);
    };
  });
  function majafunc() {
    if (window.scrollY > 33) {
      setMaja(true);
    } else {
      setMaja(false);
    }
  }
  const [cancell, SetCancel] = useState(false);
  function handleCancel() {
    SetCancel(!cancell);
  }
  function navigateToHome() {
    if (window.scrollY >= 0) {
      window.scrollBy({
        top: -10000,
        behavior: "smooth",
      });
    }
    handleCancel();
  }
  function navigatToAbout() {
    if (window.scrollY >= 0 && window.scrollY < 530) {
      window.scrollBy({
        top: 530,
        behavior: "smooth",
      });
    } else if (window.scrollY >= 2600 && window.scrollY <= 2900) {
      window.scrollBy({
        top: -2160,
        behavior: "smooth",
      });
    }
    handleCancel();
  }
  function navigateToService() {
    if (window.scrollY <= 0 && window.scrollY <= 100) {
      window.scrollBy({
        top: 2700,
        behavior: "smooth",
      });
    } else if (window.scrollY >= 530 && window.scrollY <= 580) {
      window.scrollBy({
        top: 2150,
        behavior: "smooth",
      });
    }
    handleCancel();
  }
  return (
    <>
      <div className="main-container">
        <div className="top-container">
          <div className={maja ? "maja" : "nav-page"}>
            <div className="logo-img">
              <img src={maja ? blacklogo : whitelogo} />
            </div>
            <div className="menu-bar">
              <img
                src={
                  cancell
                    ? maja
                      ? blackcancel
                      : cancel
                    : maja
                    ? blackmenu
                    : menuBar
                }
                onClick={handleCancel}
              />
              <div
                className="responsive-bar"
                style={{
                  display: cancell ? "block" : "none",
                  animationName: "fromtop",
                }}
              >
                <ul>
                  <li onClick={navigateToHome}>Home</li>
                  <li onClick={navigatToAbout}>About</li>
                  <li onClick={navigateToService}>Services</li>
                  <li>Design and projects</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <nav>
              <ul>
                <li onClick={navigatetoHomeinlap}>Home</li>
                <li onClick={navigatetoAboutinlap}>About</li>
                <li onClick={navigatetoserviceinlap}>Services</li>
                <li>Design and projects</li>
                <li>Contact Us</li>
              </ul>
            </nav>
          </div>
          <div className="content-container">
            <div className="namestyle">
              WELCOME TO&nbsp;<span className="name"> SWIFT CONSTRUCTIONS</span>
            </div>
            <div className="type-text">
              Designing Excellence<span className="name">,Building Dreams</span>
            </div>
            <div className="social-media">
              <a href="https://www.instagram.com/sd.santhosh31?igsh=bDZ3ZmplcXFycXV6">
                <img src={insta} style={{ borderColor: "white" }} />
              </a>
              <a>
                <img src={linkedin} style={{ borderColor: "white" }} />
              </a>
              <a>
                {" "}
                <img src={twiter} style={{ borderColor: "white" }} />
              </a>
              <a>
                <img src={facebok} style={{ borderColor: "white" }} />
              </a>
              <a href="mailto:ala@gmail.com">
                <img style={{ borderColor: "white" }} src={mail} />
              </a>
            </div>
          </div>
        </div>
        <div className="about">
          <h1>Who We Are</h1>
          <div className="about-us">
            <div>
              <img src={aboutImg} />
            </div>
            <div className={animation ? "content-animation" : "right-content"}>
              {" "}
              <h2>History</h2>
              "Swift Constructions emerged in 2023 as the brainchild of Charan,
              Alaudhin, and Aravind, three ambitious friends united by their
              passion for construction innovation. Since our inception, we've
              embarked on a journey fueled by a shared vision: to redefine the
              construction industry landscape. With a focus on ingenuity and
              meticulous planning, we've developed a reputation for delivering
              cutting-edge building solutions at an unparalleled value.
              <br></br>
              <br></br>
              <h2>Construction Excellence</h2>
              Our approach is simple yet profound: we combine our expertise with
              a relentless pursuit of excellence to offer clients a
              transformative construction experience. From conceptualization to
              completion, we prioritize efficiency, sustainability, and
              affordability, ensuring that every project reflects our unwavering
              commitment to quality craftsmanship.
              <br></br>
              <br></br>
              <h2>Client Collaboration</h2>
              At Swift Constructions, we understand that each building tells a
              unique story. That's why we collaborate closely with our clients,
              listening to their needs, and translating their vision into
              reality. Whether it's residential, commercial, or industrial
              projects, our team thrives on challenges, turning obstacles into
              opportunities for innovation.
              <br></br>
              <br></br>
              <h2>Innovative Entrepreneurship</h2>
              Fuelled by entrepreneurial spirit, our company thrives on a
              culture of perpetual advancement. Through tireless exploration of
              cutting-edge technologies and methodologies, we maintain our
              position at the vanguard of our industry. Our unwavering
              dedication to remaining abreast of evolving trends ensures that we
              consistently deliver progressive solutions that endure. With each
              endeavor, we don't merely construct buildings; we forge lasting
              legacies that transcend time. Embrace this exhilarating journey
              with us as we continually redefine the possibilities within the
              realm of construction
              <br></br>
              <br></br>
              <h2>Budget-Friendly Excellence</h2>
              At Swift Constructions, affordability is not just a goal; it's our
              promise to our clients. We pride ourselves on offering the most
              competitive prices in the market without compromising on quality
              or innovation. Leveraging our efficient processes, strategic
              partnerships, and streamlined operations, we consistently deliver
              high-caliber construction solutions at prices that defy industry
              standards. Our commitment to affordability doesn't just benefit
              our clients in the short term; it ensures that everyone can access
              top-notch construction services without breaking the bank. Join us
              and experience unparalleled value as we continue to set new
              benchmarks for affordability in the construction industry
            </div>
          </div>
        </div>
        <div className="services">
          <h1>What We Do</h1>
          <div className="our-skills">
            <div className={jumptop ? "majja" : "each-skill"}>
              <img src={autocad} />
              <span className="stylee">Auto Cad</span>
              <div>
                At Swift Constructions, we specialize in translating intricate
                plans into reality through our advanced Autocad expertise. With
                a keen eye for detail and precision, our team utilizes Autocad
                to execute projects seamlessly, ensuring accuracy and efficiency
                every step of the way.
              </div>
            </div>
            <div className={jumptop ? "majja" : "each-skill"}>
              {" "}
              <img src={i1} />
              <span className="stylee">Survey Analizing</span>
              <div>
                Swift Constructions employs rigorous survey analysis to ensure
                precise planning and execution of our projects. Through
                meticulous data collection and advanced analytical techniques,
                we evaluate site conditions, environmental factors, and
                regulatory requirements.
              </div>{" "}
            </div>
            <div className={jumptop ? "majja" : "each-skill"}>
              <img src={i5} />
              <span className="stylee">Land Valuation</span>
              <div>
                Swift Construction excels in land valuation, offering precise
                assessments tailored to client needs. Leveraging industry
                insights and advanced methodologies, we deliver transparent and
                reliable results. Trust Swift for accurate valuation that
                informs your strategic decisions.
              </div>
            </div>
            <div className={jumptop ? "majja" : "each-skill"}>
              {" "}
              <img src={i4} />
              <span className="stylee">Tailored Planning</span>
              <div>
                At Swift Constructions, our planning prowess shines across
                diverse projects. From hospitals to apartments, we tailor
                solutions with precision, balancing functionality, aesthetics,
                and sustainability. we develop customized plans tailored to meet
                the unique needs of each client
              </div>{" "}
            </div>
            <div className={jumptop ? "majja" : "each-skill"}>
              {" "}
              <img src={i3} />
              <span className="stylee">Architectural Visualization</span>
              <div>
                At Swift Construction, we harness the power of 3ds Max for
                immersive architectural designs. Our expert team blends
                creativity and precision to craft visually stunning renderings
                that bring projects to life and experience cutting-edge design.
              </div>{" "}
            </div>
            <div className={jumptop ? "majja" : "each-skill"}>
              {" "}
              <img src={i2} />
              <span className="stylee"> demolition projects</span>
              <div>
                In demolition projects, Swift Constructions adopts a meticulous
                approach focused on safety, efficiency, and sustainability. Our
                team employs advanced techniques and state-of-the-art equipment
                to carefully dismantle structures while minimizing environmental
                impact.
              </div>{" "}
            </div>
          </div>
        </div>
        <br></br>
        <div className="customer-review">
          <br></br>
          <h2 style={{ color: "gray" }}>See What Our Client Says</h2>
          <div className="upper">
            <div
              className={anim ? "anm" : "lowerr"}
              style={{ position: "relative", top: `${cmt}px` }}
            >
              <div className="lower">
                <div>
                  <img src={c1} />
                </div>
                <div>
                  Swift Constructions exceeded my expectations, delivering a
                  flawless home that perfectly matches my vision. Their
                  attention to detail and commitment to quality craftsmanship
                  are unparalleled
                  <h3>Deepak gowda</h3>
                </div>
              </div>

              <div className="lower">
                <div>
                  <img src={c3} />
                </div>
                <div>
                  Swift Constructions exceeded my expectations, delivering a
                  flawless home that perfectly matches my vision. Their
                  attention to detail and commitment to quality craftsmanship
                  are unparalleled
                  <h3>Deepak gowda</h3>
                </div>
              </div>
              <div className="lower">
                <div>
                  <img src={c2} />
                </div>
                <div>
                  Swift Constructions exceeded my expectations, delivering a
                  flawless home that perfectly matches my vision. Their
                  attention to detail and commitment to quality craftsmanship
                  are unparalleled
                  <h3>Santhosh SD</h3>
                </div>
              </div>
              <div className="lower">
                <div>
                  <img src={c3} />
                </div>
                <div>
                  Swift Constructions exceeded my expectations, delivering a
                  flawless home that perfectly matches my vision. Their
                  attention to detail and commitment to quality craftsmanship
                  are unparalleled
                  <h3>Praveen Babu</h3>
                </div>
              </div>
            </div>
            <div
              className={anim ? "anm" : "lowerr"}
              style={{ position: "relative", top: `${cmt}px` }}
            >
              <div className="lower">
                <div>
                  <img src={c3} />
                </div>
                <div>
                  Swift Constructions exceeded my expectations, delivering a
                  flawless home that perfectly matches my vision. Their
                  attention to detail and commitment to quality craftsmanship
                  are unparalleled
                  <h3>Praveen Babu</h3>
                </div>
              </div>
              <div className="lower">
                <div>
                  <img src={c4} />
                </div>
                <div>
                  Swift Constructions exceeded my expectations, delivering a
                  flawless home that perfectly matches my vision. Their
                  attention to detail and commitment to quality craftsmanship
                  are unparalleled
                  <h3>Alaudhin khan</h3>
                </div>
              </div>
              <div className="lower">
                <div>
                  <img src={c1} />
                </div>
                <div>
                  Swift Constructions exceeded my expectations, delivering a
                  flawless home that perfectly matches my vision. Their
                  attention to detail and commitment to quality craftsmanship
                  are unparalleled
                  <h3>Deepak gowda</h3>
                </div>
              </div>
              <div className="lower">
                <div>
                  <img src={c2} />
                </div>
                <div>
                  Swift Constructions exceeded my expectations, delivering a
                  flawless home that perfectly matches my vision. Their
                  attention to detail and commitment to quality craftsmanship
                  are unparalleled
                  <h3>Deepak gowda</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="lower-btn">
            <div onClick={handlecmttoup}>Read Less</div>
            <div onClick={handlecmttodown}> Read More..</div>
          </div>
        </div>
      </div>
    </>
  );
}
