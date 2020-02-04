import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const LatestPostListQuery = graphql`
        query LatestPostListQuery {
            allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
                edges {
                    node {
                        excerpt(truncate: true, pruneLength: 200)
                        frontmatter {
                            title
                            path
                            date(formatString: "MMM DD, YYYY")
                        }
                        id
                    }
                }
            }
        }
    `;

const IndexPage: React.FC = () => {
  const data = useStaticQuery<Query>(LatestPostListQuery)
  
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Recently Posts</h1>
      {data.allMarkdownRemark.edges.map(({ node }: any) => (
          <p key={node.id}>
              <div>
              <h2 style={{display:'inline-block'}}>
                  <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
              </h2>{' - '}
              <h4 style={{display:'inline-block'}}>{node.frontmatter.date}</h4>
              </div>
              <p>{node.excerpt}</p>
              <hr />
          </p>
        ))}
    </Layout>
  )
}

export default IndexPage
