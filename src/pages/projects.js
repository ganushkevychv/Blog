import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardTitle, CardBody, CardText } from "reactstrap"

const ProjectPage = () => (
  <Layout pageTitle="Projects">
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Projects
        </CardTitle>
        <CardText />
      </CardBody>
    </Card>
  </Layout>
)

export default ProjectPage
