import React from 'react'
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

const Blogs = ({ blogs, heading, showDescription=false }) => {
  const Tag = heading;
  return (
    <ul>
      {
            blogs.map(({ node }) => (
              <li
                style={{
                  marginBottom: rhythm(1),
                }}
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
                </header>
                { showDescription && <section>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                    itemProp="description"
                  />
                </section> }
              </li>
            )
          )
      }
    </ul>

  )
}

export default Blogs
