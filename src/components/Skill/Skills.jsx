import React from "react";
import "./skills.css";
import frontEnd from "../../assets/front-end.png";
import backEnd from "../../assets/back-end.png";
import otherTools from "../../assets/other-tools.png";

import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaWordpress,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandMysql } from "react-icons/tb";
import { SiVisualstudiocode } from "react-icons/si";
import { SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="skillTitle">About Me</h2>
      <span className="skillDesc">
        Passionate web developers dedicated to turning ideas into seamless
        digital experiences. Explore our portfolio for a showcase of impactful
        projects.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={frontEnd} alt="front-end" className="skillBarImg" />
          <div className="skillBarText">
            <h3>Front End Developer</h3>
            <p>
              <FaHtml5 color="#FF4B00" size={30} title="html" />
              <FaCss3 color="006BC0" size={30} title="css" />
              <IoLogoJavascript color="yellow" size={30} title="javascript" />
              <FaBootstrap color="#563D7C" size={30} title="bootstrap" />
              <FaReact color="#149ECA" size={30} title="reactJs" />
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={backEnd} alt="back-end" className="skillBarImg" />
          <div className="skillBarText">
            <h3>Back End Developer</h3>
            <p>
              <FaNodeJs color="#72BD55" size={30} title="nodeJs" />
              <SiExpress color="#fff" size={30} title="expressJs" />
              <FaPhp color="#4D588E" size={30} title="php" />
              <DiMongodb color="4FA93F" size={30} title="mngoDB" />
              <TbBrandMysql color="#015B85" size={30} title="mysql" />
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={otherTools} alt="others" className="skillBarImg" />
          <div className="skillBarText">
            <h3>Other Tools</h3>
            <p>
              <FaWordpress color="#1E8CBE" size={30} title="wordpress" />
              <FaGithub color="fff" size={30} title="github" />
              <SiVisualstudiocode color="006BC0" size={30} title="vs-code" />
              <SiPostman color="#F76935" size={30} title="postman" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
