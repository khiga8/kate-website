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
          I'm a software developer who likes to carry a multidisciplinary
          mindset. I care a lot about contributing to technology that changes
          the world for the better. My current interests are in front-end & web
          app development. <br />
          <br /> Growing up in the Bay Area, I've become mindful of how tech and
          the tech industry shapes our society, community, and lives. As I
          continue in this field, I strive to deepen my understanding of the
          technological world we live in, and be mindful of my choices and the
          impact of my work. My strong desire to contribute to to&nbsp;
          <span className="emphasis">
            mission-driven, purposeful technology
          </span>
          &nbsp; motivates me to keep learning and growing in this field.
          <br />
          <br />I carry a background in Cognitive Science, and love learning
          about human psychology and behavior. When I'm not coding, you might
          find me listening to podcasts like
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
          . I dream of owning a cafe bakery someday, so you might find me
          <a
            className="highlight-link"
            target="_blank"
            href="https://www.instagram.com/baketeito/"
          >
            &nbsp;baking bread too.
          </a>
          &nbsp;(Fun Fact: I spent a week at a bread baking institute last
          year!)
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
