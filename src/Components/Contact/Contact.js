import React from "react";
import "./Contact.css";

import Insta from "../../assets/insta.png";
import LinkedIn from "../../assets/linkedin.png";
import GitHub from "../../assets/github.png";
import LeetCode from "../../assets/leetcode.png";
import HackerRank from "../../assets/hackerrank.png";
import GFG from "../../assets/gfg.png";

function Contact() {
  return (
    <div
      id="contact"
      className="contact-main"
    >
      <div className="contact-top">
        <div className="contact-coffee">Take a Coffee & Chat With Me</div>
        <div className="contact-info">
          <div className="contact-info-left">
            <div className="contact-info-left-box">
              <p>yashmyeole@gmail.com</p>
            </div>
            <div className="contact-info-left-links">
              <a href="https://www.instagram.com/yashmyeole/">
                <img
                  className="contact-info-link-image"
                  alt=""
                  src={Insta}
                />
              </a>
              <a href="https://www.linkedin.com/in/yash-yeole-86175b191/">
                <img
                  className="contact-info-link-image"
                  alt=""
                  src={LinkedIn}
                />
              </a>
              <a href="https://github.com/yashmyeole">
                <img
                  className="contact-info-link-image"
                  alt=""
                  src={GitHub}
                />
              </a>
            </div>
          </div>
          <div className="contact-info-right">
            <div className="contact-info-right-box">
              <p>(+91) 9930382380</p>
            </div>
            <div className="contact-info-right-links">
              <a href="https://leetcode.com/yashmyeole/">
                <img
                  className="contact-info-link-image"
                  alt=""
                  src={LeetCode}
                />
              </a>
              <a href="https://www.hackerrank.com/yashmyeole">
                <img
                  className="contact-info-link-image"
                  alt=""
                  src={HackerRank}
                />
              </a>
              <a href="https://auth.geeksforgeeks.org/user/yashmyeole/practice">
                <img
                  className="contact-info-link-image"
                  alt=""
                  src={GFG}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="contact-bottom-top">
          <div className="contact-input-left">
            <input
              placeholder="Your Mail"
              className="contact-input-mail"
            />
            <input
              placeholder="Your Number"
              className="contact-input-number"
            />
          </div>
          <div className="contact-input-right">
            <input
              placeholder="Message for Me?"
              className="contact-input-message"
            />
          </div>
        </div>
        <div className="contact-bottom-bottom">
          <button className="contact-bottom-submit">Submit</button>
          <div> See You Soon 😉</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
