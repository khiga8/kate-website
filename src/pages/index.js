import React from "react";
import { Link } from "gatsby";
import { Gallery } from "../components/Gallery.js";
import { Me } from "../components/Me.js";

const name = "Kate Higa";
const positions =
  "UI Developer @IBM | Recent Grad of Cog Sci and CS at UC Berkeley";
const codedMe = true;
const imageGallery = [
  [
    "./site-img/clock.png",
    "time-responsive clock | css illustration & vanilla JS",
    "https://codepen.io/khiga8/pen/yZNXjN"
  ],
  [
    "./site-img/chatbot.png",
    "chatbot | React",
    "https://codepen.io/khiga8/pen/vvqBJb"
  ],
  [
    "./site-img/boba.png",
    "boba guys | css illustration & animation",
    "https://codepen.io/khiga8/pen/wNKxGm"
  ],
  [
    "./site-img/menu.png",
    "dream bakery menu | jquery/js",
    "https://codepen.io/khiga8/pen/REOvam"
  ],
  [
    "./site-img/pug.png",
    "pug | pure css illustration",
    "https://codepen.io/khiga8/pen/NeLvqX"
  ],
  [
    "./site-img/todo.png",
    "goals list | React/js",
    "https://codepen.io/khiga8/pen/pGNgjV"
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
        <h3>{positions}</h3>
        <p className="intro">
          Hello! I&apos;m a software developer who loves to create visual
          experiences with code. I have experience in various areas of software
          dev. &nbsp;
          <a
            className="text-link"
            target="_blank"
            href="./resources/kate-resume.pdf"
          >
            Here&apos;s my resume.
          </a>
          &nbsp; <br />
          <br />
          Currently, my interests are in&nbsp;
          <span className="emphasis">front-end & web development</span>. My
          desire to contribute to&nbsp;
          <span className="emphasis">
            mission-driven & purposeful technology
          </span>
          &nbsp;motivates me to keep learning and growing!
        </p>
        <div className="links">
          <p className="contact">
            If you&apos;d like to chat, shoot me an email at
            <span className="email"> katehiga8@gmail.com </span>!
          </p>
          <ul>
            <li>
              <a
                className="text-link"
                target="_blank"
                href="https://www.linkedin.com/in/kate-higa-2bab87108"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                className="text-link"
                target="_blank"
                href="https://codepen.io/khiga8/"
              >
                Codepen
              </a>
            </li>
            <li>
              <a
                className="text-link"
                target="_blank"
                href="https://github.com/khiga8"
              >
                Github
              </a>
            </li>

            <li>
              <a
                className="text-link"
                target="_blank"
                href="https://medium.com/@katehiga8"
              >
                Medium
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="project-section">
      <h2> Mini Code Challenges</h2>
      <p className="caption">
        This year, I am challenging myself to understand and unleash the power
        of fundamental HTML/CSS/JS with mini creations.
        <br /> (Disclaimer: There may be bits of React along the way)
      </p>
      <Gallery imageMap={imageGallery} rowNum={2} />
    </section>
  </div>
);
