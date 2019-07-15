import React from "react";
import { Header } from "../components/Header.js";
import { Helmet } from "react-helmet";
import favicon from "./favicon.png";
import Layout from "../components/Layout.js";

import { Link, graphql } from "gatsby";

const Now = props => {
  return (
    <div className="main">
      <Helmet>
        <title>Kate</title>
        <meta name="description" content="Kate" />
        <link rel="icon" type="/image/png" href={favicon} />
      </Helmet>
      <Header />
      <section className="intro-section">
        <h1>july</h1>
        <ul>
          <li>
            It's been one year since I graduated and started working as a
            fulltime software engineering. It's been a year of ups and downs. I
            wrote a reflection here: &nbsp;
            <Link to="/now/july2019-reflection" className="blog-link">
              "Reflecting on One Year after Graduation"
            </Link>
          </li>
        </ul>
        <h1>june</h1>
        <i> Whoops, nothing here...</i>
        <h1>may</h1>
        <ul>
          <li>
            I attended another&nbsp;
            <a
              className="highlight-link"
              target="_blank"
              href="https://www.eventbrite.com/e/cultivating-diversity-and-inclusion-in-tech-panel-mixer-tickets-61180141450"
            >
              "Cultivating Diversity and Inclusion in Tech: Panel & Mixer"
            </a>
            &nbsp;hosted by Women4Good.
            <Link to="/now/may2019-w4good-erg/" className="blog-link">
              &nbsp;Read more about it here!
            </Link>
          </li>
        </ul>

        <h1>april </h1>
        <ul>
          <li>
            I attended the{" "}
            <a
              className="highlight-link"
              target="_blank"
              href="https://women.dev/"
            >
              Women Who Code Connect Conference 2019,
            </a>{" "}
            an annual conference with women from all over the world! &nbsp;
            <Link to="/now/apr2019-wwcc/" className="blog-link">
              Read more about my experience here.
            </Link>
          </li>
        </ul>
        <h1>march</h1>
        <ul>
          <li>
            I attended a&nbsp;
            <a
              className="highlight-link"
              target="_blank"
              href="https://www.eventbrite.com/e/women-changemakers-in-social-innovation-panel-mixer-tickets-57772065804"
            >
              "Changemakers in Social Innovation Panel & Mixer"
            </a>
            &nbsp;hosted by Women4Good in SF. From women who work at startups,
            to women who work at corporations, to women who work in non-profits,
            it was a gathering of women of various background.&nbsp;
          </li>
          <li>
            One of my little&nbsp;
            <a
              className="highlight-link"
              target="_blank"
              href="https://codepen.io/khiga8/pen/MxrRpK"
            >
              codepen&nbsp;
            </a>
            was featured on the Picked Pens page! I got excited knowing that
            there are people who see and like my work!
          </li>
          <li>
            I attended a Reactjs &nbsp;
            <a
              className="highlight-link"
              target="_blank"
              href="https://www.meetup.com/ReactJS-San-Francisco/events/253391724/"
            >
              meetup&nbsp;
            </a>
            hosted by Postmates. There was another talk about hooks (I have yet
            to try it out) by a Postmates developer, a really awesome demo
            of&nbsp;
            <a
              className="highlight-link"
              target="_blank"
              href="https://parceljs.org/"
            >
              Parcel&nbsp;
            </a>
            by the creator of Parcel himself, and an engaging talk about the
            cost of transpiling by Jamie Kyle.
          </li>
          <li>
            <a
              className="highlight-link"
              target="_blank"
              href="https://www.internationalwomensday.com/"
            >
              International Women's Day &nbsp;
            </a>
            is coming up on March 8th! There was a panel discussion at work
            today discussing women in the workplace. I had some mixed feelings
            about some of what was said, but I'll hold my thoughts. This
            discussion made me reflect on my identity as a woman in a
            male-dominated field, my own perceptions and biases. It was really
            interesting to hear of different people's perspectives. It would be
            really great if open discussions related to diversity and inclusion
            were more prevalent.
          </li>
        </ul>
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
            developers I can look up to. It is really inspiring to see what
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

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`;
