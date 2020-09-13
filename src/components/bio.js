import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
      <p>
        Software Engineer at Informed K12
        <br/>
        👩🏻‍💻 Ruby on Rails, UI development, Social Impact
      </p>
    </div>
  )
}

export default Bio
