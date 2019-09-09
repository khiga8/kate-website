import React from "react";
import { Header } from "../components/Header.js";
import { Helmet } from "react-helmet";
import favicon from "./favicon.png";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const About = props => {
  return (
    <div className="main">
      <Helmet>
        <title>Kate</title>
        <meta name="description" content="Kate" />
        <link rel="icon" type="/image/png" href={favicon} />
      </Helmet>
      <Header />
      <Img
        className="portrait"
        fixed={props.data.imageOne.childImageSharp.fixed}
        style={{ display: `block` }}
      />
      <section className="intro-section about">
        <h1 className="about-me">about me</h1>
        <p className="intro">
          Hi, I'm Kate! I'm a software engineer excited by mission-driven
          technology. My main interests lie in UI and web development.
          Sometimes, I like to fiddle around with CSS and javascript and create
          code illustrations! <br />
          <br />
          Growing up in the Bay Area, I've become mindful of how technology and
          the tech industry shapes our society, community, and lives. As I
          continue in this field, I strive to be mindful of the impact of my
          work and the choices I make. I enjoy working on mission-driven
          technology and hope to leave a positive impact on society through my
          everyday work!
          <br />
          <br /> I carry a background in Cognitive Science, and love learning
          about human psychology and behavior. You might find me listening to
          podcasts like
          <a
            className="highlight-link"
            target="_blank"
            href="https://www.npr.org/podcasts/510298/ted-radio-hour"
          >
            &nbsp;Ted Radio Hour
          </a>
          ,
          <a
            className="highlight-link"
            target="_blank"
            href="https://www.npr.org/podcasts/510308/hidden-brain"
          >
            &nbsp;Hidden Brain
          </a>
          ,
          <a
            className="highlight-link"
            target="_blank"
            href="https://www.npr.org/podcasts/510307/invisibilia"
          >
            &nbsp;Invisibilia
          </a>
          . I am also a baking and baked goods fanatic, so you might find me
          <a
            className="highlight-link"
            target="_blank"
            href="https://www.instagram.com/baketeito/"
          >
            &nbsp;baking often too.
          </a>
          &nbsp;(Fun Fact: I spent a week of my vacation days at a bread baking
          institute!)
        </p>
      </section>
    </div>
  );
};

export default About;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "portrait.png" }) {
      childImageSharp {
        fixed(height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
