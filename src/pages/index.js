import React from "react";
import { Gallery } from "../components/Gallery.js";
import { Me } from "../components/Me.js";
import Resume from "../data/kate-resume.pdf";
import chatbot from "./portfolio/chatbot.png";
import boba from "./portfolio/boba.png";
import clock from "./portfolio/clock.png";
import menu from "./portfolio/menu.png";
import pug from "./portfolio/pug.png";
import todo from "./portfolio/todo.png";
import favicon from "./favicon.ico";
import Helmet from "react-helmet";

const name = "Kate Higa";
const positions = "UI Developer @IBM | Grad of Cog Sci/CS @UC Berkeley";
const codedMe = true;
const imageGallery = [
  [
    clock,
    "time-responsive clock | css illustration & vanilla JS",
    "https://codepen.io/khiga8/pen/yZNXjN"
  ],
  [chatbot, "chatbot | React", "https://codepen.io/khiga8/pen/vvqBJb"],
  [
    boba,
    "boba guys | css illustration & animation",
    "https://codepen.io/khiga8/pen/wNKxGm"
  ],
  [
    menu,
    "dream bakery menu | jquery/js",
    "https://codepen.io/khiga8/pen/REOvam"
  ],
  [pug, "pug | pure css illustration", "https://codepen.io/khiga8/pen/NeLvqX"],
  [todo, "goals list | React/js", "https://codepen.io/khiga8/pen/pGNgjV"]
];
let portrait;
if (codedMe === true) {
  portrait = (
    <div className="portrait">
      <Me />
    </div>
  );
}

const HomePage = () => {
  return (
    <div className="main">
      {portrait}
      <section className="intro-section">
        <div className="content">
          <h1>{name}</h1>
          <h3>{positions}</h3>
          <p className="intro">
            Hi! I&apos;m a software developer who enjoys coding visual
            experiences. I have worked in various areas within software
            development.&nbsp;
            <a className="text-link" target="_blank" href={Resume}>
              Here&apos;s my resume.
            </a>
            &nbsp; <br />
            <br />
            My current interests are in&nbsp;
            <span className="emphasis">front-end & web development</span>. My
            desire to contribute to&nbsp;
            <span className="emphasis">
              mission-driven & purposeful technology
            </span>
            &nbsp;motivates me to continue learning and growing in this field.
          </p>
          <div className="links">
            <p className="contact">
              Feel free to shoot me an email at
              <span className="email"> katehiga8@gmail.com</span>!
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
          This year, I have been challenging myself to unleash the power of
          fundamental HTML/CSS/JS (& sometimes React) with mini creations :D
          <br />
        </p>
        <Gallery imageMap={imageGallery} rowNum={2} />
      </section>
    </div>
  );
};

export default HomePage;
