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
      <h1> This site is currently undergoing construction... </h1>
      <p>Meanwhile, feel free to reach out to me on the following:</p>
      <SocialLinks />
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
