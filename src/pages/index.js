import React from "react";
import { Gallery } from "../components/Gallery.js";
import Resume from "../data/kate-resume.pdf";
import { Header } from "../components/Header.js";

import chatbot from "./portfolio/chatbot.png";
import boba from "./portfolio/boba.png";
import clock from "./portfolio/clock.png";
import menu from "./portfolio/menu.png";
import pug from "./portfolio/pug.png";
import todo from "./portfolio/todo.png";
import { Helmet } from "react-helmet";
import favicon from "./favicon.png";
import portrait from "./portfolio/portrait.png";
import { Link } from "gatsby";

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

const self = (
  <div className="portrait">
    <img src={portrait} />
  </div>
);

const HomePage = () => {
  return (
    <div className="main">
      <Helmet>
        <title>Kate</title>
        <meta name="description" content="Kate" />
        <link rel="icon" type="/image/png" href={favicon} />
      </Helmet>
      <Header />
      <section className="intro-section">
        <div className="content">
          <div className="intro-text">
            <h1>
              I'm Kate Higa. I'm a software developer. I like to work on user
              interfaces. I also like pugs and bread.
            </h1>
            <h2> Currently a UI developer @IBM.</h2>
            <h3> Previously @UCBerkeley, @IBM BigFix, @Goodpatch.</h3>
          </div>
          <p className="intro">
            <a className="resume-link" target="_blank" href={Resume}>
              Here's my resume.
            </a>
            <br /> <br />
            If you'd like to chat about any topics related to software
            development, Cognitive Science, pugs, or bread, shoot me an email at
            <span className="email"> katehiga8@gmail.com</span>!
          </p>
        </div>
        <div className="links">
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
      </section>
      <section className="project-section">
        <h2> Mini Code Challenges</h2>
        <p className="caption">
          This year, I have been challenging myself to unleash the power of
          fundamental HTML/CSS/JS (& sometimes React) with mini projects. You
          can follow my work on
          <a
            className="text-link"
            target="_blank"
            href="https://codepen.io/khiga8/"
          >
            Codepen.
          </a>
          <br />
        </p>
        <Gallery imageMap={imageGallery} rowNum={2} />
      </section>
    </div>
  );
};

export default HomePage;
