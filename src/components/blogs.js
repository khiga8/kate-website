import React from 'react'
import { rhythm } from "../utils/typography"
import Tags from "../components/tags"
import { Link } from "gatsby"

const Blogs = ({ blogs, heading }) => {
  const Tag = heading;
  return (
    blogs.map(({ node }) => (
        <article
          key={node.fields.slug}
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <Tag
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link
                to={node.fields.slug}
                itemProp="url"
              >
                <span itemProp="headline" style={{fontWeight:400}}>{node.frontmatter.title || node.fields.slug}</span>
              </Link>
            </Tag>
            <small>{node.frontmatter.date}</small>
            {node.frontmatter.tags && node.frontmatter.tags.length > 0 ? ` - ` : ``}
            <Tags>{node.frontmatter.tags}</Tags>
          </header>

          <section>
            <div
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
              itemProp="description"
            />
          </section>
        </article>
      )
    )
  )
}

export default Blogs
