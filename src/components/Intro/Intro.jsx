import React from "react";
import "./intro.css";
import bg from "../../assets/intro.png";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">
          Hello, I'm <span className="i"> Sagar Rout</span>
        </span>

        <span className="introText">
          <h1>
            <span className="introName">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Backend Developer",
                    "MERN Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
        </span>

        <div className="git-btn">
          <button className="btn">
            <a href="/images/myw3schoolsimage.jpg" download>
              Hire Me
            </a>
          </button>
          <button className="btn">
            <a href="mailto: sagarout104@gmail.com">Email Me</a>
          </button>
        </div>
      </div>
      <img src={bg} alt="Profile-Pic" className="bg" />
    </section>
  );
};

export default Intro;
