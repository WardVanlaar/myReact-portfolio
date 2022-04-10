import React from "react";
import { FaGithubAlt, FaHtml5, FaNodeJs, FaGrinWink } from "react-icons/fa";
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

function Portfolio() {
  return (
    <section id="portfolio">
      <Row className="row">
        <Col lg={2} md={12} sm={12}>
          <h1 id="all-work-title">Portfolio</h1>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <div>
            <h2 id="work-title">Fanpage</h2>
          </div>
          <div id="work-picture">
            <img
              src={require("../../assets/images/pink-floyd.jpg")}
              style={{
                width: "75%",
              }}
              alt="Pink Floyd collage"
            />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <p id="work-text">
            This is the fanpage I created during the pre-work of Carleton
            University's Coding Bootcamp for full-stack web developers; my first
            website. Check it out here{" "}
            <a href="https://wardvanlaar.github.io/fanpage/">
              https://wardvanlaar.github.io/fanpage
            </a>{" "}
            My source code is{" "}
            <a href="https://github.com/WardVanlaar/fanpage">
              here
            </a>
            <br></br>
            <br></br>Technologies used: <br></br>
            <br></br>
            <FaHtml5 size="40" />
            <DiCss3 size="44" />
          </p>
        </Col>
      </Row>

      <Row className="row">
        <Col lg={2} md={12} sm={12}>
          <div className="item"></div>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <div>
            <h2 id="work-title">Trail Finder</h2>
          </div>
          <div id="work-picture">
            <img
              src={require("../../assets/images/run-girl.png")}
              style={{
                width: "75%",
              }}
              alt="Running girl"
            />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <p id="work-text">
            I worked on a project with two team members to create an App to find
            trails anywhere in the world to run on. This was the first project
            of Carleton University's Coding BootCamp for full-stack web
            developers. You can find our source code at{" "}
            <a href="https://github.com/WardVanlaar/trail-finder/">
              https://github.com/WardVanlaar/trail-finder/
            </a>
            <br></br>
            <br></br>Technologies used: <br></br>
            <br></br>
            <FaHtml5 size="40" />
            <DiCss3 size="44" />
            <DiJavascript1 size="45" />
          </p>
        </Col>
      </Row>

      <Row className="row">
        <Col lg={2} md={12} sm={12}>
          <div className="item"></div>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <div>
            <h2 id="work-title">README generator</h2>
          </div>
          <div id="work-picture">
            <img
              src={require("../../assets/images/README-generator.jpg")}
              style={{
                width: "75%",
              }}
              alt="screen cap of the README-file of this REAMDE-generator"
            />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <p id="work-text">
            This is my first Node.js App. It is a professional README generator
            to create high-quality README files for GitHub repos. If you want to
            find out more about this App...well, read the {" "}
            <a href="https://github.com/WardVanlaar/node.js-readme-generator">
              README
            </a>
            <br></br>
            <br></br>Technologies used: <br></br>
            <br></br>
            <FaNodeJs size="44" />
          </p>
        </Col>
      </Row>

      <Row className="row">
        <Col lg={2} md={12} sm={12}>
          <div className="item"></div>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <div>
            <h2 id="work-title">Lord of the Rinks</h2>
          </div>
          <div id="work-picture">
            <img
              src={require("../../assets/images/lord-of-the-rinks.png")}
              style={{
                width: "75%",
              }}
              alt="Lord of the rinks landing page"
            />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <p id="work-text">
            This is my second Coding Bootcamp project. Our team developed a
            CMS-style blogg App for people skating on the Ottawa Rideau Canal to
            share their experiences on the ice. This App is deployed on Heroku{" "}
            {""}
            <a href="https://lord-of-the-rinks.herokuapp.com/">
              https://lord-of-the-rinks.herokuapp.com/.
            </a>{" "}
            Our source code is{" "}
            <a href="https://github.com/WardVanlaar/lord-of-the-rinks">
              here
            </a>
            <br></br>
            <br></br>Technologies used: <br></br>
            <br></br>
            <FaNodeJs size="42" />
            <SiHandlebarsdotjs size="40" />
            <DiCss3 size="40" />
            <SiMysql size="44" />
          </p>
        </Col>
      </Row>

      <Row className="row">
        <Col lg={2} md={12} sm={12}>
          <div className="item"></div>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <div>
            <h2 id="work-title">NoSQL Social Network</h2>
          </div>
          <div id="work-picture">
            <img
              src={require("../../assets/images/NoSQL.jpg")}
              style={{
                width: "75%",
              }}
              alt=""
            />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <p id="work-text">
            In this project I created the back-end for a social network using
            MongoDB. Instead of building a front-end web application, I used
            Insomnia to test all CRUD operations. The source code is{" "}
            <a href="https://github.com/WardVanlaar/NoSQL-social-network">
              here
            </a>
            <br></br>
            <br></br>Technologies used: <br></br>
            <br></br>
            <FaNodeJs size="42" />
            <SiInsomnia size="38" />
            <SiMongodb size="42" />
            <SiLoom size="38" />
          </p>
        </Col>
      </Row>

      <Row className="row">
        <Col lg={2} md={12} sm={12}>
          <div className="item"></div>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <div>
            <h2 id="work-title">PWA Budget Tracker</h2>
          </div>
          <div id="work-picture">
            <img
              src={require("../../assets/images/PWA-budget-tracker.png")}
              style={{
                width: "75%",
              }}
              alt="screen cap of the PWA budget tracker App"
            />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <p id="work-text">
            This App is the first Progressive Web Application (PWA) I developed.
            It is a simple budget tracker, but the nice thing is it can be
            downloaded and installed as a native App. It even has icons{" "}
            <FaGrinWink />{" "}. You can check out the App here {" "}
            <a href="https://pwa2-budget-tracker.herokuapp.com/">
              https://pwa2-budget-tracker.herokuapp.com/
            </a>{" "}
            The source code is{" "}
            <a href="https://github.com/WardVanlaar/PWA-budget-tracker">
              here
            </a>
            <br></br>
            <br></br>Technologies used: <br></br>
            <br></br>
            <SiPwa size="40" />
            <FaHtml5 size="40" />
            <DiCss3 size="44" />
            <FaNodeJs size="42" />
          </p>
        </Col>
      </Row>

      <Row className="row">
        <Col lg={2} md={12} sm={12}>
          <div className="item"></div>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <div>
            <h2 id="work-title">Programming in Stata</h2>
          </div>
          <div id="work-picture">
            <img
              src={require("../../assets/images/stata-lg-react.jpg")}
              style={{
                width: "75%",
              }}
              alt="Stata logo"
            />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <p id="work-text">
            I developed a software tool to map chains (called -mapch-). This
            tool was necessary in a project to link driver's licences of people
            who had changed their last name, which led to a change in their
            driver's licence number. I authored an article about this in the
            Stata journal, a scientific journal indexed in online scientific
            catalogues. You can download the paper <a href="https://journals.sagepub.com/doi/pdf/10.1177/1536867X0800800406">
              here
            </a> and the software at{" "}
            <a href="https://ideas.repec.org/s/boc/bocode.html">
              https://ideas.repec.org/s/boc/bocode.html
            </a>
          </p>
        </Col>
      </Row>
    </section>
  );
}
export default Portfolio;
