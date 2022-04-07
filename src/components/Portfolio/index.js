import React from "react";
import { FaGithubAlt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { DiCss3, DiJavascript1 } from "react-icons/di";
import { SiHandlebarsdotjs, SiMysql, SiPwa, SiMongodb, SiInsomnia, SiLoom } from "react-icons/si";
// import video from '../../assets/videos.video1.mp4'

function Portfolio() {
  return (
    <section id="portfolio" className="container">
      <div className="item">
        <h1 id="all-work-title">Portfolio</h1>
      </div>
      <div className="item">
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
      </div>
      <div className="item">
        <p id="work-text">
          This is the fanpage I created during the pre-work of Carleton
          University's Coding Bootcamp for full-stack web developers; my first
          website. Check it out here{" "}
          <a href="https://wardvanlaar.github.io/fanpage/">
            https://wardvanlaar.github.io/fanpage
          </a>{" "}
          My code is here{" "}
          <a href="https://github.com/WardVanlaar/fanpage">
            https://github.com/WardVanlaar/fanpage
          </a>
          <br></br>
          <br></br>Technologies used: <br></br>
          <br></br>
          <FaHtml5 size="25" />
          <DiCss3 size="27" />
        </p>
      </div>

      <div className="item"></div>
      <div className="item">
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
      </div>
      <div className="item">
        <p id="work-text">
          I worked on a project with two team members to create an App to find
          trails anywhere in the world to run on. This was the first project of
          Carleton University's Coding BootCamp for full-stack web developers.
          You can find our source code at{" "}
          <a href="https://github.com/WardVanlaar/trail-finder/">
            https://github.com/WardVanlaar/trail-finder/
          </a>
          <br></br>
          <br></br>Technologies used: <br></br>
          <br></br>
          <FaHtml5 size="25" />
          <DiCss3 size="27" />
          <DiJavascript1 size="27" />
        </p>
      </div>

      <div className="item"></div>
      <div className="item">
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
      </div>
      <div className="item">
        <p id="work-text">
          This is my second Coding Bootcamp project. Our team developed a
          CMS-style blogg App for people skating on the Ottawa Rideau Canal to
          share their experiences on the ice. This App is deployed on Heroku{" "}
          {""}
          <a href="https://lord-of-the-rinks.herokuapp.com/">
            https://lord-of-the-rinks.herokuapp.com/.
          </a>{" "}
          Our source code is here{" "}
          <a href="https://github.com/WardVanlaar/lord-of-the-rinks">
            https://github.com/WardVanlaar/lord-of-the-rinks
          </a>
          <br></br>
          <br></br>Technologies used: <br></br>
          <br></br>
          <FaNodeJs size="27" />
          <SiHandlebarsdotjs size="25" />
          <DiCss3 size="27" />
          <SiMysql size="27" />
        </p>
      </div>

      <div className="item"></div>
      <div className="item">
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
      </div>
      <div className="item">
        <p id="work-text">
          This is my first Node.js App. It is a professional README generator to
          create high-quality README files for GitHub repos. If you want to find
          out more about this App...well, read the README at{" "}
          <a href="https://github.com/WardVanlaar/node.js-readme-generator">
            https://github.com/WardVanlaar/node.js-readme-generator
          </a>
          <br></br>
          <br></br>Technologies used: <br></br>
          <br></br>
          <FaNodeJs size="27" />
        </p>
      </div>

      <div className="item"></div>
      <div className="item">
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
      </div>
      <div className="item">
        <p id="work-text">
          This App is the first Progressive Web Application (PWA) I developed.
          It is a simple budget tracker, but the nice thing is it can be
          downloaded and installed as a native App. It even has icons{" "}
          <a href="https://pwa2-budget-tracker.herokuapp.com/">
            https://pwa2-budget-tracker.herokuapp.com/
          </a>{" "}
          The source code is here{" "}
          <a href="https://github.com/WardVanlaar/PWA-budget-tracker">
            https://github.com/WardVanlaar/PWA-budget-tracker
          </a>
          <br></br>
          <br></br>Technologies used: <br></br>
          <br></br>
          <SiPwa size="27" />
          <FaHtml5 size="25" />
          <DiCss3 size="27" />
          <DiJavascript1 size="27" />
        </p>
      </div>

      <div className="item"></div>
      <div className="item">
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
      </div>
      <div className="item">
        <p id="work-text">
          In this project I created the back-end for a social network using
          MongoDB. Instead of building a front-end web application I used
          Insomnia to test all CRUD operations.
          The source code is here{" "}
          <a href="https://github.com/WardVanlaar/NoSQL-social-network">
          https://github.com/WardVanlaar/NoSQL-social-network
          </a>
          <br></br>
          <br></br>Technologies used: <br></br>
          <br></br>
          <DiJavascript1 size="27" />
          <SiInsomnia size="25" />
          <SiMongodb size="25" />
          <SiLoom size="25" />
        </p>
      </div>

      <div className="item"></div>
      <div className="item">
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
      </div>
      <div className="item">
        <p id="work-text">
          I developed a software tool to map chains (called -mapch-). This tool
          was necessary in a project to link driver's licences of people who had
          changed their last name, which led to a change in their driver's
          licence number. I authored an article about this in the Stata journal,
          a scientific journal indexed in online scientific catalogues. Click
          anywhere on the Stata image above to take you to my published paper.
          You can also download the software at{" "}
          <a href="https://ideas.repec.org/s/boc/bocode.html">
            https://ideas.repec.org/s/boc/bocode.html
          </a>
        </p>
      </div>
    </section>
  );
}
export default Portfolio;
