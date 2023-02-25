import React from "react";
import "./About.css";
import AboutImg from "../../img/about.jpg";
function About() {
  return (
    <div
      id="about"
      className="about-main"
    >
      <div className="about-header">About Me</div>
      <div className="about-sh">My Intro</div>
      <div className="about-info">
        <div className="about-img">
          <img
            alt=""
            src={AboutImg}
          />
        </div>
        <div className="about-data">
          <div className="about-desc">
            Enthusiastic engineering graduate with basic knowledge in coding and design. Proficient
            in HTML 5, JavaScript, React, Node, DBMS and Python. Ability to learn new software and
            technologies quickly. Capability to work in teams by providing valuable support.
          </div>
          <a
            href={require("../../assets/Resume.pdf")}
            download="Resume.pdf"
          >
            <button className="about-cv">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
