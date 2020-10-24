import React from "react"
import { rhythm } from "../utils/typography"

const Tags = ({ children }) => {
  const tag_map = {
    'accessibility': '#f69e7b',
    'ethics': '#df6a6a',
    'intro': '#acdeaa',
    'career': '#99e1e5',
    'reflection': '#516091',
    'other': '#bd70ba'
  }

  return children && (
    <ul style={{ marginBottom: 0, marginLeft: 0, display: "inline-flex" }}>
      {children.split(", ").map(t => (
        <li
          key={t}
          style={{
            borderRadius: '15px',
            padding: '2px 8px',
            fontSize: rhythm(1 / 2),
            marginRight: rhythm(1 / 2),
            backgroundColor: tag_map[t] ||'#bd70ba' ,
            color: "white",
            listStyle: "none",
          }}
        >
          {t}
        </li>
      ))}
    </ul>
  )
}
export default Tags