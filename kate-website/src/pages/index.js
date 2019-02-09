import React from "react";
import { Link } from "gatsby";
import { Gallery } from "../components/Gallery.js";
import { Me } from "../components/Me.js";

const name = "Kate Higa";
const positions = "UI Developer @IBM | Recent Grad of Cog Sci and CS at Cal";
const codedMe = true;
const projectMap = [
  [
    "./site-img/boba.png",
    "Look at this cute doggo",
    "https://codepen.io/khiga8/pen/wNKxGm"
  ],
  [
    "./site-img/chatbot.png",
    "Look at this cute doggo",
    "https://codepen.io/khiga8/pen/vvqBJb"
  ]
];
let portrait;
if (codedMe === true) {
  portrait = (
    <div className="portrait" onclick="codeMe()">
      <Me />
    </div>
  );
} else {
  portrait = (
    <img
      onclick="codeMe()"
      className="portrait"
      src="./site-img/portrait.png"
    />
  );
}

function codeMe() {
  codeMe = !codeMe;
}
export default () => (
  <div className="main">
    {portrait}
    <section className="intro-section">
      <div className="content">
        <h1>{name}</h1>
        <h2>{positions}</h2>
        <p className="intro">
          Hello! I&apos;m a software developer who loves to create visual
          experiences with code. I have experience in various areas of software
          development. &nbsp;
          <a target="_blank" href="./resources/kate-resume.pdf">
            Here is my resume.
          </a>
          &nbsp; <br />
          <br />
          My current interests are in&nbsp;
          <span className="emphasis">front-end & web app development.</span> My
          desire to contribute to&nbsp;
          <span className="emphasis">
            mission-driven & purposeful technology
          </span>
          &nbsp;drives me to keep learning and growing in this field.
        </p>
        <div className="links">
          <p className="contact">
            If you&apos;d like to chat, feel free to shoot me an email at
            <span className="email"> katehiga8@gmail.com </span>!
          </p>
          <ul>
            <li>
              <a target="_blank" href="https://codepen.io/khiga8/">
                Codepen
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/khiga8">
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/kate-higa-2bab87108"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a target="_blank" href="https://medium.com/@katehiga8">
                Medium
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);
