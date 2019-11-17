import React from "react";
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
            <h1>Kate　Higa</h1>
            <br />
            <h2>Software Engineer @Informed K12</h2>
            <br />
            <h3>Previously @IBM SVL, @UC Berkeley, @IBM BigFix, @Goodpatch.</h3>
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
                  href="https://medium.com/@kate_h"
                >
                  Medium
                </a>
              </li>
            </ul>
          </div>
          <p className="intro">
            If you'd like to chat about anything, shoot me an email at
            <span className="email"> katehiga8@gmail.com</span>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
