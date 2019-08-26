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
          <div className="content">
          <p>about me</p>
          </div>
        </CardTitle>
        <div>
          I believe that my strong educational background and an extensive
          knowledge, experience, management skills makes me a good candidate for
          possition of Junior Front-end Developer. I am flexible with my work
          timings and can work in a team. I strongly believe that I can perform
          well all the delegated duties and tasks. I would be grateful if you
          could contact with me and conduct an interview wherein we can discuss
          my experience.
        </div>
        <CardText />
        <CardTitle className="text-center text-uppercase mb-3">
        <div className="content">
          my skills
          </div>
        </CardTitle>
        <CardText />
        <div>
          The basics development tools in the daily work of the developer
          (including IDE, GIT, GitHub and Jira),
          <br />
          Learned how to effectively use the git version control system,
          <br />
          Learned how to work in SCRUM,
          <br />
          Learned HTML5 and CSS3 syntax and tags,
          <br />
          Understand the HTTP Protocol,
          <br />
          Learned how to program in JavaScript and how to use it for dynamic web
          <br />
          Learned object-oriented programming elements and functions,
          <br />
          Learned how to communicate with the server using AJAX technology,
          <br />
          Learned how to prepare friendly and useful interfaces,
          <br />
          Know the rules of communication with servers and databases REST API,
          <br />
          Know the features of the React library when create web applications
          <br />
          Understand the value of code reviews
          <br />
          Learned how to prepare friendly and useful interfaces
          <br />
          Learned the basics of code testing
          <br />
          Learned how to use libraries of ready-made components
          <br />
          Learned how routing works in the browser
        </div>
      </CardBody>
    </Card>
  </Layout>
)

export default AboutPage
