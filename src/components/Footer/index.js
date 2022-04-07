//code adapted from https://github.com/nicolewallace09/react-portfolio

import React from "react";
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaSlack,
  FaMobileAlt,
} from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";

function Footer() {   
    return (
    <div className="page-footer" id="footer">
        <a id="footer-el" href="https://github.com/WardVanlaar"> <FaGithubAlt size="50" /></a>
        <a id="footer-el" href="https://www.linkedin.com/in/ward-vanlaar-98b50b214/"> <FaLinkedinIn size="50" /></a>
        <a id="footer-el" href="https://wardvanlaar.slack.com/"><FaSlack size="50" /></a>
    </div>
    )
}

export default Footer;