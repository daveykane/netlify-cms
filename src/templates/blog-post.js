import React from "react";

export default function Template( { data } ) {
    const post = data.markdownRemark;
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return(
        <div className="blog-post-container">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
}

export const query = graphql `
  query BlogPostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;