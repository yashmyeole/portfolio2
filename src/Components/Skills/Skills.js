import React from "react";
import "./Skills.css";

import Mongo from "../../assets/mongo.png";
import Reacts from "../../assets/react.png";
import Node from "../../assets/node.png";
import Postgres from "../../assets/postgres.png";
import Vue from "../../assets/vue.png";
import Redux from "../../assets/redux.png";

function Skills() {
  return (
    <div
      id="skills"
      className="skills-main"
    >
      <div className="skills-header">Skills</div>
      <div className="skills-sh">My technical Set</div>
      <div className="skills-info">
        <div className="skills-row">
          <div className="skills-level">
            <img
              className="skills-level-img"
              alt=""
              src={Reacts}
            />
          </div>
          <div className="skills-level">
            <img
              className="skills-level-img"
              alt=""
              src={Vue}
            />
          </div>
          <div className="skills-level">
            <img
              className="skills-level-img"
              alt=""
              src={Node}
            />
          </div>
          <div className="skills-level">
            <img
              className="skills-level-img"
              alt=""
              src={Mongo}
            />
          </div>
          <div className="skills-level">
            <img
              className="skills-level-img"
              alt=""
              src={Postgres}
            />
          </div>
          <div className="skills-level">
            <img
              className="skills-level-img"
              alt=""
              src={Redux}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
