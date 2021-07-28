import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Link } from 'gatsby'
import Image from "gatsby-image"
import parse from "html-react-parser"
//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//components
import Button from "../components/button"


export default function StatCaro(data){
  return(
    <StaticQuery
    query={graphql`
      query staticCaru {
        wpPost(slug: {eq: "for-education"}) {
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
              <Container fluid className="caruselContainer">
                <Row flex className="ideaBoxStat">
                      <Col>
                        <div className="vertCenter">
                          <h1>{data.wpPost.title}</h1>
                          <p>{parse(data.wpPost.excerpt)}</p>
                          <Button >
                            <Link to="/form">Get in touch</Link>
                          </Button>
                        </div>
                      </Col>
                      <Col className="colImagePadding">
                        <Image
                          fluid = {data.wpPost.featuredImage.node.localFile.childImageSharp.fluid}
                          alt = {data.wpPost.featuredImage.node.alt}
                          />
                      </Col>
                </Row>
              </Container>
            </div>
        )}
      />

  )
}
