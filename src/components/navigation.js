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
    <nav>
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
            style={{
              color: location.pathname === link.link ? '#bd70ba' : '#545454'
            }}
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

