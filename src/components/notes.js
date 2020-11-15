import React from 'react'
import { rhythm } from "../utils/typography"

const Notes = ({ notes }) => {
  return (
    notes.map(({ node }) => (
      <article
        key={node.fields.slug}
        itemScope
        itemType="http://schema.org/Article"
      >
        <section>
          <div style={{fontWeight: 'bold', fontSize: '25px'}}>{node.frontmatter.date}</div>
          <div
            dangerouslySetInnerHTML={{
              __html: node.html,
            }}
          />
        </section>
      </article>
      )
    )
  )
}

export default Notes
