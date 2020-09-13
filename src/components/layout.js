import React from "react"
import Navigation from "./navigation"
import { rhythm } from "../utils/typography"

const Layout = ({ location, children }) => {

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(35),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Navigation location={location}/>
      <main>{children}</main>
      <footer style={{marginBottom: rhythm(1 / 4)}}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
