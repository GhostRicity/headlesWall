import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import { Link } from 'gatsby'
//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from "../components/button"


export default function ForFun(data){
  return(
    <StaticQuery
      query={graphql`
        query contacts3 {
          wpPost(slug: {eq: "for-fun"}) {
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
              <Container fluid className="alingedContainer" style={{paddingTop:"2%", paddingBottom:"8%"}}>
                <Row className="verticalCenter">
                  <Col md={6}>
                    <div className="vertCenter">
                      <h1>{data.wpPost.title}</h1>
                      <p>{parse(data.wpPost.excerpt)}</p>
                      <Button >
                        <Link to="/form">Get in touch</Link>
                      </Button>
                    </div>
                  </Col>
                  <Col md={6}>
                    <Image
                      fluid = {data.wpPost.featuredImage.node.localFile.childImageSharp.fluid}
                      alt = {data.wpPost.featuredImage.node.alt}
                      objectFit="contain"
                      objectPosition="50% 50%"
                      />
                  </Col>
                </Row>
              </Container>
            </div>
        )}
      />
  )
}
