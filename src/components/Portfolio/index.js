import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
// import coverImage from "../../assets/images/stata-lg-react.jpg";

function Portfolio() {
  return (
    <section id="portfolio" className="container">
      <div className="item">
        <h1 id="all-work-title">Portfolio</h1>
      </div>
      <div className="item">
        <div>
          <h2 id="work-title">Trail Finder</h2>
        </div>
        <div>
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
        <div id="border"></div>
        <p id="work-text">
          I worked on a project with two team members to create an App to find
          trails anywhere in the world to run on. This was the first project of
          the Carleton University Coding BootCamp for full-stack web developers.
          You can find our source code at{" "}
          <a href="https://github.com/WardVanlaar/trail-finder/">
            https://github.com/WardVanlaar/trail-finder/
          </a>
        </p>
      </div>

      <div className="item"></div>
      <div className="item">
        <div>
          <h2 id="work-title">Lord of the Rinks</h2>
        </div>
        <div>
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
          share their experiences on the ice. This App is deployed on Heroku.
          You can find it here{" "}
          <a href="https://lord-of-the-rinks.herokuapp.com/">
            https://lord-of-the-rinks.herokuapp.com/.
          </a>{" "}
          Our source code is here{" "}
          <a href="https://github.com/WardVanlaar/lord-of-the-rinks">
            https://github.com/WardVanlaar/lord-of-the-rinks
          </a>
        </p>
      </div>

      <div className="item"></div>
      <div className="item">
        <div>
          <h2 id="work-title">Programming in Stata</h2>
        </div>
        <div>
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
