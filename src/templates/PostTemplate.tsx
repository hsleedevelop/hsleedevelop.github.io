import React from "react"
import Layout from "../components/layout"
import { ITemplateProps } from "../interface"

type IPostTemplateProps = ITemplateProps <{
    html: string
    title: string
    date: string
    category: string
}>

const PostTemplate: React.FC<IPostTemplateProps> = React.memo(props => {
    const { title, date, category, html } = props.pageContext
    const category2 = category ? `[${category}]` : ``
    return (
        <Layout>
            <div>
                <h2 style={{display: 'inline-block'}}>{category2} {title}</h2>{' - '}
                <h4 style={{display: 'inline-block'}}>{date}</h4>
            </div>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    )
})

PostTemplate.displayName = "PostTemplate"

export default PostTemplate