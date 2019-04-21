import React from "react";
import Layout from "../components/Layout.js";
import Img from 'gatsby-image';
import {graphql} from "gatsby";

function BlogPost(props) {
  const post = props.data.markdownRemark;
  const { title, image } = props.data.markdownRemark.frontmatter;


  return (
    <Layout>
      <div>
        <h1> {title} </h1>
        {image && <Img fluid={image.childImageSharp.fluid} />}
          <div className="blog-text"
            dangerouslySetInnerHTML={{
              __html: post.html
            }}
          />
          </div>
    </Layout>
  );
}

export default BlogPost;

export const query = graphql`

 query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       excerpt
       frontmatter {
        title
        image {
          childImageSharp {
            resize(width: 500, height: 300) {
              aspectRatio
              src
            }
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
   }
}
`
