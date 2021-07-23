import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import parse from "html-react-parser"
import { Link } from 'gatsby'
//bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from "../components/button"

//import styles
import '../styles/styles.scss'


export default function Hero(data){

  return(
    <StaticQuery
      query={graphql`
        query hero {
          wpPost(slug: {eq: "why-not"}) {
            id
            title
            excerpt
            featuredImage {
              node {
                altText
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }

      `}
      render={ data => (
        <div>
          <BackgroundImage
            fluid = {data.wpPost.featuredImage.node.localFile.childImageSharp.fluid}
            alt={data.wpPost.featuredImage.node.alt}
            style={{
               opacity: '0'
            }}
          >
          <Jumbotron fluid id="home" className="jumbotron">
            <Container fludi className="container1">
              <Row>
                <Col>
                  <div className="jumboHight">
                    <h1>{data.wpPost.title}</h1>
                    <p>{parse(data.wpPost.excerpt)}</p>
                    <Button >
                      <Link to="/form">Get in touch</Link>
                    </Button>
                  </div>
                </Col>
                <Col>
                </Col>
              </Row>
            </Container>
           </Jumbotron>
          </BackgroundImage>
        </div>
      )}
    />
    )
}
/// TODO: add alt altText
// TODO: split screan in to to alingh text on left side
// TODO: uhmmm, button
