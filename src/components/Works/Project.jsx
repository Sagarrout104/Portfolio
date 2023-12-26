import React from "react";
import "./project.css";
import portfolio from "../../assets/portfolio.png";
import project01 from "../../assets/project02.jpg";
import project02 from "../../assets/project03.jpg";
import project03 from "../../assets/project04.jpg";

const Project = () => {
  return (
    <>
      <div className="card">
        <img src={portfolio} alt="portfolio" />
        <div className="card-content">
          <div className="card-title">Portfolio</div>
          <div className="card-description">
            This Project is made by HTML|CSS|Bootstrap|Js|React. It's a personal
            portfolio website full responsive.
          </div>
          <div className="card-buttons">
            <button className="card-button">
              <a
                href="https://sagarrout104.github.io/Portfolio/"
                target="_blank"
              >
                Live Preview
              </a>
            </button>

            <button className="card-button">
              <a
                href="https://github.com/Sagarrout104/Portfolio"
                target="_blank"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <img src={project01} alt="project" />
        <div className="card-content">
          <div className="card-title">Project Title</div>
          <div className="card-description">
            Makes sure the description is not describing a real project but is
            instead a sample for communication purposes.
          </div>
          <div className="card-buttons">
            <button className="card-button">Live Preview</button>
            <button className="card-button">Source Code</button>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={project02} alt="project" />
        <div className="card-content">
          <div className="card-title">Project Title</div>
          <div className="card-description">
            Makes sure the description is not describing a real project but is
            instead a sample for communication purposes.
          </div>
          <div className="card-buttons">
            <button className="card-button">Live Preview</button>
            <button className="card-button">Source Code</button>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={project03} alt="project" />
        <div className="card-content">
          <div className="card-title">Project Title</div>
          <div className="card-description">
            Makes sure the description is not describing a real project but is
            instead a sample for communication purposes.
          </div>
          <div className="card-buttons">
            <button className="card-button">Live Preview</button>
            <button className="card-button">Source Code</button>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={project02} alt="project" />
        <div className="card-content">
          <div className="card-title">Project Title</div>
          <div className="card-description">
            Makes sure the description is not describing a real project but is
            instead a sample for communication purposes.
          </div>
          <div className="card-buttons">
            <button className="card-button">Live Preview</button>
            <button className="card-button">Source Code</button>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={project01} alt="project" />
        <div className="card-content">
          <div className="card-title">Project Title</div>
          <div className="card-description">
            Makes sure the description is not describing a real project but is
            instead a sample for communication purposes.
          </div>
          <div className="card-buttons">
            <button className="card-button">Live Preview</button>
            <button className="card-button">Source Code</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
