//code adapted from https://github.com/nicolewallace09/react-portfolio

import React from "react";
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaStackOverflow
} from "react-icons/fa";

function Footer() {   
    return (
    <div className="page-footer" id="footer">
        <a id="footer-el" href="https://github.com/WardVanlaar"> <FaGithubAlt size="35" /></a>
        <a id="footer-el" href="https://www.linkedin.com/in/ward-vanlaar-98b50b214/"> <FaLinkedinIn size="35" /></a>
        <a id="footer-el" href="https://stackoverflow.com/users/18748123/ward-vanlaar"><FaStackOverflow size="35" /></a>
    </div>
    )
}

export default Footer;