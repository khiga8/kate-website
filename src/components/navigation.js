import React from "react"
import { Link, useStaticQuery } from "gatsby"

const Navigation = ({ location }) => {

  const data = useStaticQuery(graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
  }
  `)
  const { menuLinks } = data.site.siteMetadata

  return (
    <nav aria-label="Main">
      <ul style={{ display: "flex", flex: 1 }}>
      { menuLinks.map(link => (
          <li
            key={link.name}
            style={{
              listStyleType: `none`,
              padding: `1rem`,
            }}
          >
            <Link
              to={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation

