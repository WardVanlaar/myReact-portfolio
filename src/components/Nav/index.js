import React from "react";
import background from "../../assets/images/hero-bg.jpg";

function Nav() {
  return (
    <section>
      <header>
        <h1>
          <a id="my-name" href="/">
            Ward Vanlaar
          </a>
        </h1>
        <nav>
          <ul id="nav-ul">
            <li>
              <a id="nav-cat" href="#about-me">
                About me
              </a>
            </li>
            <li>
              <a id="nav-cat" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a id="nav-cat" href="#contact-me">
                Contact
              </a>
            </li>
            <li>
              <a id="nav-cat" href="https://tirf.ca/downloading/?dlm-dp-dl=6410">
                Resume
              </a>
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
