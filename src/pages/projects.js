import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardTitle, CardBody, CardText, Badge } from "reactstrap"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();



const ProjectPage = () => (
  
  <Layout pageTitle="Projects">
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <Card>
      <div className="container" data-aos="fade-in">
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Projects
          
            <CardBody data-aos="fade-up">
              <CardTitle className="text-center text-uppercase">
                tracken web page
              </CardTitle>
              <a href="https://ganushkevychv.github.io/tracken/">
                <img
                  src={require("../images/tracken.png")}
                  alt="tracken"
                  style={{ width: "50%", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
                />
              </a>
              <CardText className="text-center text-uppercase">
              <ul className="project-badge">
              <li><Badge color="primary">html</Badge></li>
              <li><Badge color="primary">CSS</Badge></li>
              <li><Badge color="primary">javascript</Badge></li>
              </ul>
              </CardText>
            </CardBody>
          
  
            <CardBody>
              <CardTitle className="text-center text-uppercase">
                tracken web game
              </CardTitle>
              <a href="https://ganushkevychv.github.io/tracken/game/">
                <img
                  src={require("../images/game.png")}
                  alt="tracken"
                  style={{ width: "50%", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
                />
              </a>
              <CardText className="text-center text-uppercase">
              <ul className="project-badge">
              <li><Badge color="primary">html</Badge></li>
              <li><Badge color="primary">CSS</Badge></li>
              <li><Badge color="primary">javascript</Badge></li>
              <li><Badge color="primary">firebase</Badge></li>
              </ul>
              </CardText>
            </CardBody>
        
          
            <CardBody data-aos="fade-up">
              <CardTitle className="text-center text-uppercase">
                tracken web app
              </CardTitle>
              <a href="http://app.nan.jfdd11.is-academy.pl/">
                <img
                  src={require("../images/tracken.png")}
                  alt="tracken"
                  style={{ width: "50%", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
                />
              </a>
              <CardText className="text-center text-uppercase">
              <ul className="project-badge">
              <li><Badge color="primary">React</Badge></li>
              <li><Badge color="primary">jsx</Badge></li>
              <li><Badge color="primary">firebase</Badge></li>
              <li><Badge color="primary">semantic ui</Badge></li>
              <li><Badge color="primary">react-moment</Badge></li>
              <li><Badge color="primary">react-leaflet</Badge></li>
              </ul>
              </CardText>
            </CardBody>
         
        
            <CardBody data-aos="fade-up">
              <CardTitle className="text-center text-uppercase">
                maze web game
              </CardTitle>
              <a href="https://ganushkevychv.github.io/maze-game/">
                <img
                  src={require("../images/maze.png")}
                  alt="tracken"
                  style={{ width: "50%", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
                />
              </a>
              <CardText className="text-center text-uppercase">
              <ul className="project-badge">
              <li><Badge color="primary">html</Badge></li>
              <li><Badge color="primary">CSS</Badge></li>
              <li><Badge color="primary">javascript</Badge></li>
              </ul>
              </CardText>
            </CardBody>

            <CardBody data-aos="fade-up">
              <CardTitle className="text-center text-uppercase">
                my old portfolio
              </CardTitle>
              <a href="https://ganushkevychv.github.io/">
                <img
                  src={require("../images/me.png")}
                  alt="tracken"
                  style={{ width: "50%", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
                />
              </a>
              <CardText className="text-center text-uppercase">
              <ul className="project-badge">
              <li><Badge color="primary">html</Badge></li>
              <li><Badge color="primary">CSS</Badge></li>
              <li><Badge color="primary">JS</Badge></li>
              </ul>
              </CardText>
            </CardBody>

            <CardBody data-aos="fade-up">
              <CardTitle className="text-center text-uppercase">
                Simple FDP calculator
              </CardTitle>
              <a href="https://cocky-jackson-cf646d.netlify.com/">
                <img
                  src={require("../images/aircraft.jpg")}
                  alt="tracken"
                  style={{ width: "50%", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
                />
              </a>
              <CardText className="text-center text-uppercase">
              <ul className="project-badge">
              <li><Badge color="primary">html</Badge></li>
              <li><Badge color="primary">CSS</Badge></li>
              <li><Badge color="primary">JS</Badge></li>
              <li><Badge color="primary">momentjs</Badge></li>
              <li><Badge color="primary">pwa</Badge></li>
              </ul>
              </CardText>
            </CardBody>

            <CardBody data-aos="fade-up">
              <CardTitle className="text-center text-uppercase">
                Landing Page created with Gatsby
              </CardTitle>
              <a href="https://syndicate-trade.netlify.com/">
                <img
                  src={require("../images/syndicate.jpg")}
                  alt="syndicate"
                  style={{ width: "50%", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
                />
              </a>
              <CardText className="text-center text-uppercase">
              <ul className="project-badge">
              <li><Badge color="primary">gatsby</Badge></li>
              <li><Badge color="primary">scss</Badge></li>
              <li><Badge color="primary">jsx</Badge></li>
              <li><Badge color="primary">react-bootstrap</Badge></li>
              <li><Badge color="primary">graphql</Badge></li>
              </ul>
              </CardText>
            </CardBody>
            <CardBody data-aos="fade-up">
              <CardTitle className="text-center text-uppercase">
                FTL and CC dictionary
              </CardTitle>
              <a href="https://wonderful-elion-130752.netlify.com">
                <img
                  src={require("../images/iata.jpg")}
                  alt="dictionary"
                  style={{ width: "50%", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
                />
              </a>
              <CardText className="text-center text-uppercase">
              <ul className="project-badge">
              <li><Badge color="primary">html</Badge></li>
              <li><Badge color="primary">CSS</Badge></li>
              <li><Badge color="primary">js</Badge></li>
              <li><Badge color="primary">momentjs</Badge></li>
              <li><Badge color="primary">pdfjs</Badge></li>
              <li><Badge color="primary">pwa</Badge></li>
              </ul>
              </CardText>
            </CardBody>
        </CardTitle>
        <CardText />
      </CardBody>
      </div>
    </Card>
</Layout>
)

export default ProjectPage