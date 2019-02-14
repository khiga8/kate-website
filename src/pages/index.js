import React from "react";
import { Gallery } from "../components/Gallery.js";
import Resume from "../data/kate-resume.pdf";
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
      <section className="intro-section">
        <div className="content">
          <h1>
            Hi, I'm Kate Higa. <br />
          </h1>
          <h2> Currently a UI developer @IBM.</h2>
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
          <p className="intro">
            I&apos;m a software developer who loves to code visual experiences.
            I studied Cognitive Science and Computer Science at UC Berkeley, and
            like to understand and intersect different perspectives. I have
            worked in a few different areas of software development. &nbsp;
            <a className="text-link" target="_blank" href={Resume}>
              Here&apos;s my resume.
            </a>
            &nbsp; <br />
            <br />
            My current interests are&nbsp;
            <span className="emphasis">
              front-end & web app development.
            </span>{" "}
            It excites me to see code transform into something beautiful and
            interactive. My desire to create to&nbsp;
            <span className="emphasis">purposeful technology</span>
            &nbsp;pushes me to keep learning. When I'm not coding or studying
            JS, you might find me
            <a
              className="text-link"
              target="_blank"
              href="https://www.instagram.com/baketeito/"
            >
              baking bread!
            </a>
          </p>
          <p className="contact">
            If you'd like to talk about topics related to software development,
            Cognitive Science, or even bread, I'd love to chat! Shoot me an
            email at
            <span className="email"> katehiga8@gmail.com</span>!
          </p>
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
