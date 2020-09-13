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
            height: 250,
            minWidth: 200,
            borderRadius: `10%`,
          }}
       />
      <section>
        <h1> Hi I'm Kate! </h1>
        <p>
          I'm a fullstack engineer at <a href="https://www.informedk12.com">Informed K12, </a>
          where we focus on helping school districts eliminate paperwork
        </p>
        <p>
          Currently I work primarily with Ruby on Rails. Previously I was a UI developer
          working in React. Although I've always gravitated towards the front-end,
          delving into Rails and working full-stack has been absolutely amazing.
          I'm excited to keep learning and growing in all dimensions of software engineering.
        </p>
        <p>
          Outside of coding, you can find me listening to podcasts, watercoloring,
          and <a href="https://www.instagram.com/baketeito/?hl=en">baking.</a>
        </p>
      </section>
    </div>
    </Layout>
  )
}


export default AboutPage
