import React from "react";
import { Gallery } from "../components/Gallery.js";
import Resume from "../data/kate-resume.pdf";
import { Header } from "../components/Header.js";

import { Helmet } from "react-helmet";
import favicon from "./favicon.png";
import { Link } from "gatsby";

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
              Hi! My name is Kate. <br /> I'm a software developer.
              <br /> I like to work on user interfaces.
              <br /> I also like pugs and bread.
            </h1>
            <br />
            <h2> Currently a UI developer @IBM.</h2>
            <h3> Previously @UCBerkeley, @IBM BigFix, @Goodpatch.</h3>
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
                  href="https://twitter.com/kate8pug"
                >
                  Twitter
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
            <a className="highlight-link" target="_blank" href={Resume}>
              Here's my resume.
            </a>
            <br />
            If you'd like to chat about anything, shoot me an email at
            <span className="email"> katehiga8@gmail.com</span>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
