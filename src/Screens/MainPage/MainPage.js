import React from "react";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Header from "../../Components/Header/Header";
import Home from "../../Components/Home/Home";
import Project from "../../Components/Projects/Project";
import Skills from "../../Components/Skills/Skills";
import "./MainPage.css";
function MainPage() {
  return (
    <div>
      <div className="main-header">
        <Header />
      </div>
      <div>
        <div className="main-home">
          <Home />
        </div>
        <hr class="rounded"></hr>
        <div className="main-about">
          <About />
        </div>
        <hr class="rounded"></hr>
        <div className="main-skills">
          <Skills />
        </div>
        <hr class="rounded"></hr>
        <div className="main-project">
          <Project />
        </div>
        <hr class="rounded"></hr>
        <div className="main-contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
