import React from "react";
import coverImage from "../../assets/images/Ward2.jpg";
import { Row, Col } from "react-bootstrap";

function About() {
  return (
    <section id="about-me">
      <Row className="row">
        <Col lg={2} md={12} sm={12}>
          <h1 id="me-title">About me</h1>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <img
            id="picture-Ward"
            src={coverImage}
            style={{
              width: "65%",
              borderColor: "--tertiary-color",
              borderWidth: 3,
            }}
            alt="Ward in his backyard"
          />
        </Col>
        <Col lg={6} md={12} sm={12}>
          <p id="me-text">
            I was born and raised in Belgium in a beautiful, historic town
            called Gent. In 2005 I moved to Ottawa, Canada and in 2012 I became
            Canadian (yay). I now have dual citizenship. I love food, running,
            biking, walking and watching a good movie. I am married and we have
            our hands full with two crazy cats, Napoleon and Finn. If you want
            to find out more about my job, click on resume in the navigation
            bar. If you want to know more about my coding-endeavours (so far),
            check out some of my projects in my portfolio. Or check out my
            GitHub account to see all my projects.
          </p>
        </Col>
      </Row>
    </section>
  );
}

export default About;
