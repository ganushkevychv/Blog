import React from 'react'
import Layout from '../components/layout.js'
//import Sidebar from '../components/Sidebar.js'
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo.js'
import { Card, CardBody, CardSubtitle, Badge } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from "../util/utilityFunction.js"
import authors from "../util/authors.js"


const SinglePost = ({ data }) =>{
const post = data.markdownRemark.frontmatter
const author = authors.find(x => x.name === post.author)

    return (
        <Layout pageTitle={post.title} postAuthor={author} authorImageFluid={data.file.childImageSharp.fluid}>
<SEO title={post.title}/>
 <Card>
<Img className="card-image-top" fluid={post.image.childImageSharp.fluid}/>
<CardBody>
    <CardSubtitle>
      <span className="text-info">{post.date}</span> by{''} 
      <span className="text-info">{post.author}</span>
    </CardSubtitle>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}/>
    <ul className="post-tags">
    {post.tags.map(tag => (
        <li key={tag}>
        <Link to={`/tag/${slugify(tag)}`}>
        <Badge color="primary">{tag}</Badge>
        </Link>
        </li>
    ))}
    </ul>
</CardBody>
 </Card>
        </Layout>
    )
}
export const postQuery = graphql`
query BlogPostBySlug($slug: String!, $imageUrl: String!){
    markdownRemark(fields: { slug: { eq: $slug } }){
        id
        html
        frontmatter{
            title
            author
            date(formatString: "MMM Do YYYY")
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
    file(relativePath: {eq: $imageUrl}){
childImageSharp{
    fluid(maxWidth: 300){
        ...GatsbyImageSharpFluid
    }
}
    }
}
`

export default SinglePost