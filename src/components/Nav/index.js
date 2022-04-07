
import background from "../../assets/images/hero-bg.jpg";
import React from "react";

function Nav(props) {
  const tabs = ["about", "portfolio", "resume", "contact"];
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
            {tabs.map((tab) => (
              <li key={tab}>
                <a
                  id="nav-cat"
                  href={"#" + tab.toLowerCase()}
                  onClick={() => props.handlePageChange(tab)}
                  className={
                    props.currentPage === tab ? "nav-link active" : "nav-link"
                  }
                >
                  {tab}
                </a>
              </li>
            ))}
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
