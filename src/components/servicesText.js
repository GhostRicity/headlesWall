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


export default function Text(data){
  return(
    <StaticQuery
      query={graphql`
        query services4 {
          wpPost(slug: {eq: "professional-installation-courses"}) {
            id
            title
            excerpt
          }
        }

        `}
        render={ data => (
          <div>
              <Container fluid className="alingedContainer" style={{paddingTop:"8%", paddingBottom:"8%"}}>
                <Row className="verticalCenter" style={{paddingLeft:"15%", paddingRight:"15%"}}>
                  <Col>
                    <div className="centerTextCenter">
                      <h1>{data.wpPost.title}</h1>
                      <p>{parse(data.wpPost.excerpt)}</p>
                      <Button>
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
