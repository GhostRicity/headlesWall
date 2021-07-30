import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import { Link } from 'gatsby'
//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//import Button from "../components/button"

import Button from 'react-bootstrap/Button'


export default function Aqua(data){
  return(
    <StaticQuery
      query={graphql`
        query Product11 {
          wpPost(slug: {eq: "we-work-with-architects-designers-office-managers-and-the-creative-you"}) {
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
              <Container fluid className="alingedContainer" style={{paddingTop:"8%", paddingBottom:"8%"}}>
                <Row className="verticalCenter">
                  <Col md={6}>
                    <Image
                      fluid = {data.wpPost.featuredImage.node.localFile.childImageSharp.fluid}
                      alt = {data.wpPost.featuredImage.node.alt}
                      objectFit="contain"
                      objectPosition="50% 50%"
                      />
                  </Col>
                  <Col md={6}>
                    <div className="vertCenter">
                      <h1>{data.wpPost.title}</h1>
                      <p>{parse(data.wpPost.excerpt)}</p>
                       <Button href="https://www.writewallpaint.com/">WebShop</Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
        )}
      />
  )
}
