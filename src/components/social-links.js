import React from 'react'

import { rhythm } from "../utils/typography"

const SocialLinks = () => {

  return (
      <div style={{fontSize: '20px'}}>
          <span style={{marginRight: rhythm(1)}}><a target='_blank' rel='noreferrer' href='https://dev.to/kateh'>DEV</a></span>
          <span style={{marginRight: rhythm(1)}}><a target='_blank' rel='noreferrer' href='https://twitter.com/kate8pug'>Twitter</a></span>
          <span style={{marginRight: rhythm(1)}}><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/kate-higa-2bab87108/'>LinkedIn</a></span>
          <span style={{marginRight: rhythm(1)}}><a target='_blank' rel='noreferrer' href='https://codepen.io/khiga8'>Codepen</a></span>
          <span style={{marginRight: rhythm(1)}}><a target='_blank' rel='noreferrer' href='https://github.com/khiga8'>Github</a></span>
      </div>
  )
}

export default SocialLinks
