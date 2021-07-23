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

export default function Gallery(data){
  return(
    <StaticQuery
      query={graphql`
        query GalerryPhotos {
          allWpMediaItem(
            filter: {wpParent: {node: {slug: {eq: "our-beloved-writewallers"}}}}
          ) {
            edges {
              node {
                id
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 70) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
          wpPost(slug: {eq: "our-beloved-writewallers"}) {
            title
            excerpt
          }
        }



        `}
        render={ data => (
          <div>
              <Container fluid className="alingedContainer">
              {console.log(data.allWpMediaItem.edges)}
                <Row>
                  <Col>
                    <div className="vertCenter">
                      <h1>{data.wpPost.title}</h1>
                      <p>{parse(data.wpPost.excerpt)}</p>
                      <Button >
                        <Link to="/404">Get in touch</Link>
                      </Button>
                    </div>
                  </Col>
                  <Col>
                  <div>
                    <ul class="flex-container wrap">
                      <li class="flex-item">
                       {data.allWpMediaItem.edges.map (({ node }) => (
                          <Image
                            fluid = {node.localFile.childImageSharp.fluid}
                          />
                        ))}
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
        )}
      />
  )
}
