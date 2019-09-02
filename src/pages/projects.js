import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardTitle, CardBody, CardText } from "reactstrap"

const ProjectPage = () => (
  <Layout pageTitle="Projects">
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <Card>
      <div className="container">
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Projects
          
            <CardBody>
              <CardTitle className="text-center text-uppercase">
                tracken web page
              </CardTitle>
              <a href="https://ganushkevychv.github.io/tracken/">
                <img
                  src={require("../images/tracken.png")}
                  alt="tracken"
                  style={{ width: "50%" }}
                />
              </a>
            </CardBody>
          
  
            <CardBody>
              <CardTitle className="text-center text-uppercase">
                tracken web game
              </CardTitle>
              <a href="https://ganushkevychv.github.io/tracken/game/">
                <img
                  src={require("../images/game.png")}
                  alt="tracken"
                  style={{ width: "50%" }}
                />
              </a>
            </CardBody>
        
          
            <CardBody>
              <CardTitle className="text-center text-uppercase">
                tracken web app
              </CardTitle>
              <a href="http://app.nan.jfdd11.is-academy.pl/">
                <img
                  src={require("../images/tracken.png")}
                  alt="tracken"
                  style={{ width: "50%" }}
                />
              </a>
            </CardBody>
         
        
            <CardBody>
              <CardTitle className="text-center text-uppercase">
                maze web game
              </CardTitle>
              <a href="https://ganushkevychv.github.io/maze-game/">
                <img
                  src={require("../images/maze.png")}
                  alt="tracken"
                  style={{ width: "50%" }}
                />
              </a>
            </CardBody>
            <CardBody>
              <CardTitle className="text-center text-uppercase">
                my old portfolio
              </CardTitle>
              <a href="https://ganushkevychv.github.io/">
                <img
                  src={require("../images/me.png")}
                  alt="tracken"
                  style={{ width: "50%" }}
                />
              </a>
            </CardBody>
        </CardTitle>
        <CardText />
      </CardBody>
      </div>
    </Card>
  </Layout>
)

export default ProjectPage
