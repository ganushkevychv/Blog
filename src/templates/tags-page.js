import React from 'react'
import Layout from '../components/layout.js'
import SEO from '../components/seo.js'
import { Button, Badge} from 'reactstrap'
import { slugify } from '../util/utilityFunction.js'

const tagsPage = ({ pageContext }) => {
    const { tags, tagPostCounts } = pageContext;
return (
    <Layout pageTitle="All tags">
    <SEO title="All tags" keywords={['tags', 'topics']}/>
    <ul>
        {tags.map(tag => (
            <li key={tag} style={{marginBottom: '10px'}}>
            <Button color="primary" href={`/tag/${slugify(tag)}`}>
            {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
            </Button>
            </li>
        ))}
    </ul>
    </Layout>
)
}

export default tagsPage