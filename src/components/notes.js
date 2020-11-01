import React from 'react'

const Notes = ({ notes }) => {
  return (
    notes.map(({ node }) => (
      <article
        key={node.fields.slug}
        itemScope
        itemType="http://schema.org/Article"
      >
        <section>
          <small>{node.frontmatter.date}</small>
          <p
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
