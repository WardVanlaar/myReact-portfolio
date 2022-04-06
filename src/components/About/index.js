import React from "react";
import coverImage from "../../assets/images/Ward2.jpg";
import { FaGithubAlt } from "react-icons/fa";

function About() {
  return (
    <section id="about-me" className="container">
      <div className="item">
        <h1 id="me-title">About me</h1>
      </div>
      <div className="item">
        <img
          id="picture-Ward"
          src={coverImage}
          style={{
            width: "95%",
            borderColor: "--tertiary-color",
            borderWidth: 10,
          }}
          alt="Ward in his backyard"
        />
      </div>
      <div className="item">
        <p id="me-text">
          I was born and raised in Belgium in a beautiful, historic town called
          Gent. In 2005 I moved to Ottawa, Canada and in 2012 I became Canadian
          (yay). I now have dual citizenship. I love food, running, biking,
          walking and watching a good movie. I am married and we have our hands
          full with two crazy cats, Napoleon and Finn. If you want to find out
          more about my job, click on My resume in the navigation bar. If you
          want to know more about my coding-endeavours (so far), check out some
          of my projects in my Portfolio. Or check out my GitHub account{" "}
          <a href="https://github.com/WardVanlaar">
            <FaGithubAlt />
          </a>{" "}
          to see all my projects.
        </p>
      </div>
    </section>
  );
}

export default About;
