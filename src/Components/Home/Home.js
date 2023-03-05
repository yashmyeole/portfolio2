import React from "react";
import "./Home.css";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
import HomeImg from "../../assets/homeimg.png";

function Home() {
  return (
    <div
      className="home-main"
      id="home"
    >
      <div className="home-right">
        <div className="home-right-info">
          <h2 className="home-right-head">Hi, I'am Yash</h2>
          <div className="home-right-role">Frontend Developer</div>
          <div className="home-right-desc">
            Self-motivated with few months of industrial experience in Frontend Development. Good
            communication, written, interpersonal skills, proven team player with an analytical mind
            bent to problem solving and delivering solutions.
          </div>

          <a href="#contact">
            <button className="home-right-contact">Contact Me</button>
          </a>
        </div>
        <div className="home-right-image">
          <img
            alt=""
            src={HomeImg}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
