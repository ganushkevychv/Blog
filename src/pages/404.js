import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'
const NotFoundPage = () => (
  <Layout pageTitle="404 Page not found">
    <SEO title="404: Not found" />
   
    <Link className="btn btn-primary" to={'/'}>Go Home</Link>
  </Layout>
)

export default NotFoundPage
