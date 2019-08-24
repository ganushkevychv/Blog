import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardTitle, CardBody, CardText } from "reactstrap"
const AboutPage = () => (
  <Layout pageTitle="About me">
    <SEO title="About Me" keywords={[`gatsby`, `application`, `react`]} />
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          about me
        </CardTitle>
        <CardText />
      </CardBody>
    </Card>
  </Layout>
)

export default AboutPage