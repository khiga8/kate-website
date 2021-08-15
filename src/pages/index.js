import React from "react"
import { Link, graphql } from "gatsby"
import Blogs from "../components/blogs"
import Notes from "../components/notes"
import SocialLinks from "../components/social-links"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const blogs = data.blogs.edges
  const notes = data.notes.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Kate Higa" />
      <h1> Kate Higa</h1>
      <p>

        I am a software engineer interested in the intersection of people and technology.
        I'm currently at GitHub where I am focused on accessibility.
        <br/><br/>
        I have a background in Cognitive Science and am fascinated by the human mind.
        I am a Japanese American fluent in English and Japanese.
        On the weekends, I love visiting bakeries in the area, baking, 
        and unwinding with my dog, Tagé.
      </p>
      <SocialLinks />
      <h2>Recent blog</h2>
      <Blogs blogs={blogs} heading={"h3"}/>
    <Link style={{float: 'right'}} to='/blog'>more blog posts</Link>
      <h2>Recent note</h2>
      <Notes notes={notes} />
      <Link style={{float: 'right'}} to='/notes'>more notes</Link>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    blogs: allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/(blog)/"}}
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
    notes: allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/(notes)/"}}
      ) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
