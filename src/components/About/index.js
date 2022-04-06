import React from "react";
import coverImage from "../../assets/images/Ward.jpg";

function About() {
  return (
    <section id="about-me" className="container">
      <div className="item">
        <h1>About me</h1>
      </div>
      <div className="item">
        <img
          src={coverImage}
          className="my-2"
          style={{
            width: "75%",
            borderColor: "--tertiary-color",
            borderWidth: 3,
          }}
          alt="Ward in his backyard"
        />
      </div>
      <div className="item">
        <p>
          I was born and raised in Belgium in a beautiful, historic town called
          Gent. In 2005 I moved to Ottawa, Canada and in 2012 I became Canadian
          (yay). I now have dual citizenship. I love food, running, walking and
          watching a good movie. I am married and we have our hands full with
          two crazy cats, Napoleon and Finn. If you want to find out more about
          my job, click on My resume in the navigation bar. If you want to know
          more about my coding-endeavours (so far), check out My work.
        </p>
      </div>
    </section>
  );
}

export default About;
