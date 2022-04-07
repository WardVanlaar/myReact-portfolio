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
import { Row, Col } from "react-bootstrap";

function Resume() {
  return (
    <section id="resume">
       <Row className="row">
       <Col lg={2} md={12} sm={12}>
        <h1 id="all-work-title">Resume</h1>
      </Col>
      <Col lg={7} md={12} sm={12}>
        <div>
          <h2 id="work-title">My skills</h2>
        </div>
        <div>
          <ul id="nav-ul">
            <li id="nav-cat2">C-suite Executive management</li>
            <li id="nav-cat2">Full-stack Web Developer (HTML, CSS, JS, Node, Express, MySQL, MongoDB, React, MERN)</li>
            <li id="nav-cat2">Statistical analysis</li>
            <li id="nav-cat2">Team player</li>
            <li id="nav-cat2">Trilingual (English, French, Dutch)</li>
            <li id="nav-cat2">Road safety expert</li>
          </ul>
        </div>
      </Col>
      <Col lg={3} md={12} sm={12}>
      <h2 id="work-title">Download my cv</h2> <br></br>
          <br></br>
          <a id="nav-cat" href="https://tirf.ca/downloading/?dlm-dp-dl=6410">
            <FaFileDownload size="50" />
          </a>
      </Col>
      </Row>
    </section>
  );
}

export default Resume;
