import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SocialLinks from "./social-links"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        marginBottom: rhythm(2.0),
      }}
    >
      <h1>
        {author.name}
      </h1>
      <div style={{fontSize: '20px', lineHeight: rhythm(1.5)}}>
       <SocialLinks />
      </div>
    </div>
  )
}

export default Bio
