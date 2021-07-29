import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import { Link } from 'gatsby'
//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import Button from "../components/button"


export default function SixCards(data){
  return(
    <StaticQuery
      query={graphql`
        query sixcards666 {
          wpPost(slug: {eq: "for-work"}) {
            id
            title
            excerpt
          }
        }

        `}
        render={ data => (
          <div>
              <Container fluid style={{paddingTop:"8%", paddingBottom:"8%"}}>
                <Row className="verticalCenter">
                  <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title>What do we do?</Card.Title>
                        <Card.Text>
                          We help from A-Z and we make sure the your creative framework with our WriteWall solutions is ready to use - what ever it takes.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title>Delivery of products and accessories!</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Title>MSDS</Card.Title>
                        <Card.Body>
                          <Card.Text>
                            We can also be hired to perform test installation.
                          </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="verticalCenter">
                  <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title>We make our 200 m2 showroom available in Køge.</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
        )}
      />
  )
}
