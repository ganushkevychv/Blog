import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from 'gatsby-background-image'
import { Card, CardTitle, CardBody, CardText, Badge } from "reactstrap"





const ProjectPage = (props) => (
  
  <Layout pageTitle="Projects">
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <Card>
      <div className="container">
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Projects
          <CardTitle className="text-center text-uppercase">
                tracken web page
              </CardTitle>
          <Card
          style={{ boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
          >
          <a href="https://ganushkevychv.github.io/tracken/">
            <BackgroundImage className="background" fluid={props.data.tracken.childImageSharp.fluid} >
            </BackgroundImage>
            
            <CardBody >
              <CardText className="text-center text-uppercase">
              <ul className="project-badge">
              <li><Badge color="primary">html</Badge></li>
              <li><Badge color="primary">CSS</Badge></li>
              <li><Badge color="primary">javascript</Badge></li>
              </ul>
              </CardText>
            </CardBody>
            </a>
            </Card>
            <CardTitle className="text-center text-uppercase">
                tracken web game
              </CardTitle>
              <CardTitle className="text-center text-uppercase" color="primery">
                Desctop only!
              </CardTitle>
          <Card style={{ boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <a href="https://ganushkevychv.github.io/tracken/game/">
            <BackgroundImage className="background" fluid={props.data.game.childImageSharp.fluid} >
            </BackgroundImage>
            
            <CardBody >
              <CardText className="text-center text-uppercase">
              <ul className="project-badge">
              <li><Badge color="primary">html</Badge></li>
              <li><Badge color="primary">CSS</Badge></li>
              <li><Badge color="primary">javascript</Badge></li>
              <li><Badge color="primary">firebase</Badge></li>
              </ul>
              </CardText>
            </CardBody>
            </a>
            </Card>
            <CardTitle className="text-center text-uppercase">
                tracken web app
              </CardTitle>
          <Card style={{ boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <a href="http://app.nan.jfdd11.is-academy.pl/">
            <BackgroundImage className="background" fluid={props.data.tracken.childImageSharp.fluid} >
            </BackgroundImage>
            
            <CardBody >
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
            </a>
            </Card>
            <CardTitle className="text-center text-uppercase">
            maze web game
              </CardTitle>
              <CardTitle className="text-center text-uppercase" color="primery">
                Desctop only!
              </CardTitle>
          <Card style={{ boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <a href="https://ganushkevychv.github.io/maze-game/">
            <BackgroundImage className="background" fluid={props.data.maze.childImageSharp.fluid} >
            </BackgroundImage>
            
            <CardBody >
              <CardText className="text-center text-uppercase">
              <ul className="project-badge">
              <li><Badge color="primary">html</Badge></li>
              <li><Badge color="primary">CSS</Badge></li>
              <li><Badge color="primary">javascript</Badge></li>
              </ul>
              </CardText>
            </CardBody>
            </a>
            </Card>
            <CardTitle className="text-center text-uppercase">
            my old portfolio
              </CardTitle>
          <Card style={{ boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <a href="https://ganushkevychv.github.io/">
            <BackgroundImage className="background" fluid={props.data.me.childImageSharp.fluid} >
            </BackgroundImage>
            
            <CardBody >
              <CardText className="text-center text-uppercase">
              <ul className="project-badge">
              <li><Badge color="primary">html</Badge></li>
              <li><Badge color="primary">CSS</Badge></li>
              <li><Badge color="primary">javascript</Badge></li>
              </ul>
              </CardText>
            </CardBody>
            </a>
            </Card>
            <CardTitle className="text-center text-uppercase">
            Simple FDP calculator
              </CardTitle>
          <Card style={{ boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <a href="https://cocky-jackson-cf646d.netlify.com/">
            <BackgroundImage className="background" fluid={props.data.aircraft.childImageSharp.fluid} >
            </BackgroundImage>
            
            <CardBody >
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
            </a>
            </Card>
            <CardTitle className="text-center text-uppercase">
            Landing Page created with Gatsby
              </CardTitle>
          <Card style={{ boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <a href="https://syndicate-trade.netlify.com/">
            <BackgroundImage className="background" fluid={props.data.syndicate.childImageSharp.fluid} >
            </BackgroundImage>
            
            <CardBody >
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
            </a>
            </Card>
            <CardTitle className="text-center text-uppercase">
            FTL and CC dictionary
              </CardTitle>
          <Card style={{ boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <a href="https://wonderful-elion-130752.netlify.com">
            <BackgroundImage className="background" fluid={props.data.iata.childImageSharp.fluid} >
            </BackgroundImage>
            
            <CardBody >
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
            </a>
            </Card>
            <CardTitle className="text-center text-uppercase">
            Waste segregation game
              </CardTitle>
              <CardTitle className="text-center text-uppercase" color="primery">
                Desctop only!
              </CardTitle>
          <Card style={{ boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <a href="https://waste-segregation.netlify.app">
            <BackgroundImage className="background" fluid={props.data.recycle.childImageSharp.fluid} >
            </BackgroundImage>
            
            <CardBody >
              <CardText className="text-center text-uppercase">
              <ul className="project-badge">
              <li><Badge color="primary">html</Badge></li>
              <li><Badge color="primary">CSS</Badge></li>
              <li><Badge color="primary">javascript</Badge></li>
              </ul>
              </CardText>
            </CardBody>
            </a>
            </Card>
            <CardTitle className="text-center text-uppercase" color="primery">
            LANDING PAGE CREATED WITH GATSBY V1
              </CardTitle>
          <Card style={{ boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <a href="https://elisavetdorbudv1.netlify.app/">
            <BackgroundImage className="background" fluid={props.data.logoRollerv1.childImageSharp.fluid} >
            </BackgroundImage>
            
            <CardBody >
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
            </a>
            </Card>
            <CardTitle className="text-center text-uppercase" color="primery">
            LANDING PAGE CREATED WITH GATSBY V2
              </CardTitle>
          <Card style={{ boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <a href="https://elisavetdorbud.netlify.app/">
            <BackgroundImage className="background" fluid={props.data.logoRollerv1.childImageSharp.fluid} >
            </BackgroundImage>
            
            <CardBody >
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
            </a>
            </Card>
            <CardTitle className="text-center text-uppercase" color="primery">
            photographer portfolio not finished
              </CardTitle>
          <Card style={{ boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <a href="https://ganushkevycha.netlify.app/">
            <BackgroundImage className="background" fluid={props.data.portfolioA.childImageSharp.fluid} >
            </BackgroundImage>
            
            <CardBody >
              <CardText className="text-center text-uppercase">
              <ul className="project-badge">
              <li><Badge color="primary">gatsby</Badge></li>
              <li><Badge color="primary">scss</Badge></li>
              <li><Badge color="primary">jsx</Badge></li>
              <li><Badge color="primary">reactstrap</Badge></li>
              <li><Badge color="primary">graphql</Badge></li>
              <li><Badge color="primary">i18next</Badge></li>
              <li><Badge color="primary">crisp</Badge></li>
              </ul>
              </CardText>
            </CardBody>
            </a>
            </Card>
            <CardTitle className="text-center text-uppercase" color="primery">
            Windows XP Desctop clone, just for fun
              </CardTitle>
          <Card style={{ boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <a href="https://romantic-johnson-a557e4.netlify.app/">
            <BackgroundImage className="background" fluid={props.data.xp.childImageSharp.fluid} >
            </BackgroundImage>
            
            <CardBody >
              <CardText className="text-center text-uppercase">
              <ul className="project-badge">
              <li><Badge color="primary">gatsby</Badge></li>
              <li><Badge color="primary">scss</Badge></li>
              <li><Badge color="primary">jsx</Badge></li>
              <li><Badge color="primary">reactstrap</Badge></li>
              <li><Badge color="primary">graphql</Badge></li>
              <li><Badge color="primary">react-calendar</Badge></li>
              </ul>
              </CardText>
            </CardBody>
            </a>
            </Card>
        </CardTitle>
        <CardText />
      </CardBody>
      </div>
    </Card>
</Layout>
)

export default ProjectPage

export const pageQuery = graphql`
query {
  tracken: file(relativePath: { eq: "tracken.png" }){
    childImageSharp {
      fluid(quality:100, maxWidth: 1900){
        ...GatsbyImageSharpFluid
      }
    }
  }
  game: file(relativePath: { eq: "game.png" }){
    childImageSharp {
      fluid(quality:100, maxWidth: 1900){
        ...GatsbyImageSharpFluid
      }
    }
  }
  maze: file(relativePath: { eq: "maze.png" }){
    childImageSharp {
      fluid(quality:100, maxWidth: 1900){
        ...GatsbyImageSharpFluid
      }
    }
  }
  me: file(relativePath: { eq: "me.png" }){
    childImageSharp {
      fluid(quality:100, maxWidth: 1900){
        ...GatsbyImageSharpFluid
      }
    }
  }
  aircraft: file(relativePath: { eq: "aircraft.png" }){
    childImageSharp {
      fluid(quality:100, maxWidth: 1900){
        ...GatsbyImageSharpFluid
      }
    }
  }
  syndicate: file(relativePath: { eq: "syndicate.jpg" }){
    childImageSharp {
      fluid(quality:100, maxWidth: 1900){
        ...GatsbyImageSharpFluid
      }
    }
  }
  iata: file(relativePath: { eq: "iata.jpg" }){
    childImageSharp {
      fluid(quality:100, maxWidth: 1900){
        ...GatsbyImageSharpFluid
      }
    }
  }
  recycle: file(relativePath: { eq: "recycle.png" }){
    childImageSharp {
      fluid(quality:100, maxWidth: 1900){
        ...GatsbyImageSharpFluid
      }
    }
  }
  logoRollerv1: file(relativePath: { eq: "logoRollerv1.png" }){
    childImageSharp {
      fluid(quality:100, maxWidth: 1900){
        ...GatsbyImageSharpFluid
      }
    }
  }
  portfolioA: file(relativePath: { eq: "portfolioA.png" }){
    childImageSharp {
      fluid(quality:100, maxWidth: 1900){
        ...GatsbyImageSharpFluid
      }
    }
  }
  xp: file(relativePath: { eq: "xp.png" }){
    childImageSharp {
      fluid(quality:100, maxWidth: 1900){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;