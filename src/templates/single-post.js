import React from 'react'
import Layout from '../components/layout.js'
import Sidebar from '../components/Sidebar.js'
import { graphql } from 'gatsby';


const SinglePost = ({ data }) =>{
const post = data.markdownRemark.frontmatter
console.log(post)
    return (
        <Layout>

        </Layout>
    )
}
/*export const postQuery = graphql`
query blogPostBySlug($slug: String!){
    markdownRemark(fields: { path: { eq: $slug } }){
        id
        html
        frontmatter{
            title
            author
            date(formatString: "MMM DD YYYY")
            tags
            image{
                childImageSharp{
                    fluid(maxWidth: 700){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
}
`*/

export default SinglePost