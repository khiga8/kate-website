import React from 'react'

import { rhythm } from "../utils/typography"

const SocialLinks = () => {

  return (
    <nav aria-label="Social links">
      <ul style={{fontSize: '1.0em'}}>
          <li style={{marginRight: rhythm(1), display: "inline"}}><a target='_blank' rel='noreferrer' href='https://dev.to/kateh'>DEV</a></li>
          <li style={{marginRight: rhythm(1), display: "inline"}}><a target='_blank' rel='noreferrer' href='https://twitter.com/kate8keito'>Twitter</a></li>
          <li style={{marginRight: rhythm(1), display: "inline"}}><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/kate-higa-2bab87108/'>LinkedIn</a></li>
          <li style={{marginRight: rhythm(1), display: "inline"}}><a target='_blank' rel='noreferrer' href='https://codepen.io/khiga8'>CodePen</a></li>
          <li style={{marginRight: rhythm(1), display: "inline"}}><a target='_blank' rel='noreferrer' href='https://github.com/khiga8'>GitHub</a></li>
      </ul>
    </nav>
  )
}

export default SocialLinks
