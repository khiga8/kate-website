import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
        Software Engineer at Informed K12
        <br/>
        Ruby on Rails, UI development, Social Impact
        <br/>
        <br/>
        <div style={{fontSize: '20px'}}>
            <span style={{marginRight: rhythm(1)}}><a target='_blank' rel='noreferrer' href='https://dev.to/kateh'>DEV</a></span>
            <span style={{marginRight: rhythm(1)}}><a target='_blank' rel='noreferrer' href='https://twitter.com/kate8pug'>Twitter</a></span>
            <span style={{marginRight: rhythm(1)}}><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/kate-higa-2bab87108/'>LinkedIn</a></span>
            <span style={{marginRight: rhythm(1)}}><a target='_blank' rel='noreferrer' href='https://codepen.io/khiga8'>Codepen</a></span>
            <span style={{marginRight: rhythm(1)}}><a target='_blank' rel='noreferrer' href='https://github.com/khiga8'>Github</a></span>
        </div>

      </div>
    </div>
  )
}

export default Bio
