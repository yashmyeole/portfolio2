import React from "react";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Header from "../../Components/Header/Header";
import Home from "../../Components/Home/Home";
import Project from "../../Components/Projects/Project";
import Skills from "../../Components/Skills/Skills";
import "./MainPage.css";
function MainPage() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
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
        <div className="main-about reveal fade-top">
          <About />
        </div>
        <hr class="rounded"></hr>
        <div className="main-skills reveal fade-right">
          <Skills />
        </div>
        <hr class="rounded"></hr>
        <div className="main-project reveal fade-left">
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
