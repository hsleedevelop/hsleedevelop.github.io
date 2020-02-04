import { CreatePagesArgs, graphql } from "gatsby"
import path from "path"
//import { Query } from "../graphql-types"

export async function createPages({ actions, graphql }: CreatePagesArgs) {
    const { createPage } = actions
    //const { data, errors } = await graphql<Query>(`
    const { data, errors } = await graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        html
                        frontmatter {
                            title
                            path
                            date(formatString: "MMM DD, YYYY")
                            category
                        }
                    }
                }
            }
        }
    `)

    if (errors) { throw errors }

    data.allMarkdownRemark.edges.forEach(({ node }: any) => {
        createPage({
            path: node.frontmatter.path,
            //path: node.frontmatter.title,
            context: {
                html: node.html,
                title: node.frontmatter.title,
                date: node.frontmatter.date,
                category: node.frontmatter.category,
            },
            component: path.resolve(__dirname, "../templates/PostTemplate.tsx")
        })
    })
}