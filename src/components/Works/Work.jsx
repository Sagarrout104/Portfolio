import React from "react";
import "./work.css";

import Project from "./Project";

const Work = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">Projects</h2>
      <div className="worksImgs">
        <Project />
      </div>
    </section>
  );
};

export default Work;
