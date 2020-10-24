import React from "react"
import { Link, graphql } from "gatsby"
import Tags from "../components/tags"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Kate Higa" />
      <Bio />
      <h2>Latest musings</h2>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const tags = node.frontmatter.tags
        return (
          <article
            key={node.fields.slug}
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{ boxShadow: `none`, color: '#bd70ba' }}
                  to={node.fields.slug}
                  itemProp="url"
                >
                  <span itemProp="headline" style={{fontWeight:400}}>{title}</span>
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              {tags && tags.length > 0 ? ` - ` : ``}
              <Tags>{tags}</Tags>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
                itemProp="description"
              />
            </section>
          </article>
        )
      })}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
  }
`
