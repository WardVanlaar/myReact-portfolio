import React from "react";
import { FaGithubAlt, FaHtml5, FaNodeJs, FaFileDownload } from "react-icons/fa";
import { DiCss3, DiJavascript1 } from "react-icons/di";
import {
  SiHandlebarsdotjs,
  SiMysql,
  SiPwa,
  SiMongodb,
  SiInsomnia,
  SiLoom,
} from "react-icons/si";

function Resume() {
  return (
    <section id="resume" className="container">
      <div className="item">
        <h1 id="all-work-title">Resume</h1>
      </div>
      <div className="item">
        <div>
          <h2 id="work-title">My skills</h2>
        </div>
        <div>
          <ul id="nav-ul">
            <li id="nav-cat2">C-suite Executive management</li>
            <li id="nav-cat2">Full-stack Web Developer</li>
            <li id="nav-cat2">Statistical analysis</li>
            <li id="nav-cat2">Team player</li>
            <li id="nav-cat2">Trilingual (English, French, Dutch)</li>
            <li id="nav-cat2">Road safety expert</li>
          </ul>
        </div>
      </div>
      <div className="item">
        <p id="work-text">
          Download my CV <br></br>
          <br></br>
          <a id="nav-cat" href="https://tirf.ca/downloading/?dlm-dp-dl=6410">
            <FaFileDownload size="50" />
          </a>
        </p>
      </div>
    </section>
  );
}

export default Resume;
