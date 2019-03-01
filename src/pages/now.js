import React from "react";
import { Header } from "../components/Header.js";
import { Helmet } from "react-helmet";
import favicon from "./favicon.png";

import { Link } from "gatsby";

const Now = () => {
  return (
    <div className="main">
      <Helmet>
        <title>Kate</title>
        <meta name="description" content="Kate" />
        <link rel="icon" type="/image/png" href={favicon} />
      </Helmet>
      <Header />
      <section className="intro-section">
        <h1>feb</h1>
        <ul>
          <li>
            I attended my first React.js&nbsp;
            <a
              className="highlight-link"
              target="_blank"
              href="https://www.meetup.com/ReactJS-San-Francisco/events/247283821/"
            >
              meetup
            </a>
            &nbsp;in SF. There was a talk by the founder of Gatbsy.js. I thought
            that was really neat as I recenty discovered it. Also some
            discussions about the new React hook feature, and a talk by an
            instacart engineer about using CSS in JS. Really educational. I
            think it's important for me to go out to these events and learn.
          </li>
          <li>
            I started reading&nbsp;
            <a
              className="highlight-link"
              target="_blank"
              href="https://github.com/getify/You-Dont-Know-JS/"
            >
              You Don't Know JS
            </a>
            . There's a lot to get through but Javascript is an interesting
            language, and this book is thorough. As of the end of Feb, I'm
            almost done with Chapter 3.
          </li>
        </ul>
        <h1>jan</h1>
        <ul>
          <li>
            I discovered the Codepen community. I found a lot of front end
            developers I can look up to. It's really inspiring to see what
            others create.
          </li>
          <li>
            I have been challenging myself to have fun with my own mini
            code&nbsp;
            <a
              className="highlight-link"
              target="_blank"
              href="https://codepen.io/khiga8/"
            >
              creations
            </a>
            . Amazing what one can do with just CSS.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Now;
