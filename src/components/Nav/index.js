import React from "react";
import background from "../../assets/images/hero-bg.jpg";

function Nav() {
  return (
    <section>
      <header>
        <h1>
          <a href="/">Ward Vanlaar</a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#about-me">About me</a>
            </li>
            <li>
              <a href="#my-work">My work</a>
            </li>
            <li>
              <a href="#contact-me">Contact me</a>
            </li>
            <li>
              <a href="../../assets/resume/resume-ward.pdf">My resume</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="hero" style={{ backgroundImage: `url(${background})` }}>
        <h1>Live deeply. Travel light.</h1>
      </div>
     
    </section>
  );
}

export default Nav;
