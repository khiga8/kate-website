import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const AboutPage = ({ location }) => {

  const data = useStaticQuery(graphql`
  query AboutQuery {
    avatar: file(absolutePath: { regex: "/kate.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 250) {
            ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
        }
      }
    }
  }
`)
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Kate" />
        <div style={{ display: `flex`}}>
        <Image
          alt={data.site.siteMetadata.author.name}
          fixed={data.avatar.childImageSharp.fixed}
          style={{
            marginRight: rhythm(1 / 2),
            minWidth: 200,
            borderRadius: `10%`,
          }}
       />
      <section>
        <h1> Hi there! </h1>
        <p>
          I'm  Kate. Currently I work as a fullstack engineer at <a href="https://www.informedk12.com">Informed K12</a>
          , where we focus on helping school districts bring paperwork
          processes online.
        </p>
        <p>
          In my day to day, I work primarily with Ruby on Rails. I gravitate towards
          the frontend side of the stack but I'm always excited to explore new ideas
          and deepen my knowledge in all areas of engineering. I have a love for learning
          which is largely fueled by a desire to continuously improve the codebase,
          end-user experiences, and ultimately make a positive social impact. I have
          a background in Cognitive Science and am fascinated by the human mind.
          I enjoy thinking about the intersection of computers and people.
        </p>
        <p>
          Outside of coding, you can find me listening to podcasts, watercoloring, and
          <a href="https://www.instagram.com/baketeito/?hl=en"> baking!</a>
        </p>
        <p>
          If you want to chat about career development, UI, working at a startup,
          Ruby on Rails, accessibility...or even baking, feel free to reach out!
        </p>
      </section>
    </div>
    </Layout>
  )
}


export default AboutPage
