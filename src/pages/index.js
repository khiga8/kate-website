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
      <h1> hi, I'm Kate. </h1>
      <ul>
        <li> software engineer at Informed K12</li>
        <li> based in the Bay Area</li>
        <li> focused on Ruby on Rails, building UI, Social Impact, a11y</li>
      </ul>
      <p> I like to write from time-to-time as a way to look back on my experiences and
        learnings! Feel free to lurk around.
      </p>
      <SocialLinks />
      <h2>Recent blog</h2>
      <Blogs blogs={blogs} />
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
