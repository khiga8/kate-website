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
      <section className="intro-section about">
        <h1 className="about-me">about me</h1>
        <p className="intro">
          Hi, I'm Kate! I'm a full-stack engineer at Informed K12.
          We're focus on solving operational challenges at school districts!
          <br />
          <br />
          Having spend most of my life in the Bay Area, I've become aware of the
          influence that the tech industry and technology has on our lives and
          society, both good and bad.
          As I continue in this field, I strive to be mindful of the impact of my
          work and the choices that I make. I am motivated by mission-driven
          technology and hope to leave a positive impact through my everyday work.
          <br />
          <br />
          I carry a background in Cognitive Science, and love learning
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
