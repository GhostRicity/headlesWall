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


export default function Half(data){
  return(
    <StaticQuery
      query={graphql`
        query contacts6 {
          wpPost(slug: {eq: "out-of-your-mind-and-on-to-the-wall"}) {
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
              <Container fluid className="halfBg">
                <Row className="verticalCenter">
                  <Col md={6}>
                    <Image
                      fluid = {data.wpPost.featuredImage.node.localFile.childImageSharp.fluid}
                      alt = {data.wpPost.featuredImage.node.alt}
                      objectFit="none"
                      objectPosition="50% 50%"
                      />
                  </Col>
                  <Col md={6}>
                    <div className="halfText">
                      <h1>{data.wpPost.title}</h1>
                      <p>{parse(data.wpPost.excerpt)}</p>
                      <Button >
                        <Link to="/form">Get in touch</Link>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
        )}
      />
  )
}
