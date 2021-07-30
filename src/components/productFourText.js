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


const Text4 = () => {
  return(
          <div>
              <Container fluid className="alingedContainer" style={{paddingTop:"8%", paddingBottom:"8%"}}>
                <Row className="verticalCenter" style={{paddingLeft:"15%", paddingRight:"15%", paddingBottom:"6%"}}>
                  <Col>
                    <div className="centerTextLeft">
                      <h1>Most durable</h1>
                      <p>AquaWrite is the most durable dry-erase product available on the market to date. Our paints are supported by a 10 year warranty. We guarantee that the AquaWrite white-board paint will not crack, peel, stain or face away with proper use and maintenance.</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="centerTextLeft">
                      <h1>Perfect for short throw projectors.</h1>
                      <p>AquaWrite high performance whiteboard paint surfaces are perfect for short throw projection and interactive surfaces. This means, that our surfaces replace both the Smartboard, projection screen and the whiteboard.</p>
                    </div>
                  </Col>
                </Row>
                <Row className="verticalCenter" style={{paddingLeft:"15%", paddingRight:"15%"}}>
                  <Col>
                    <div className="centerTextLeft">
                      <h1>All colours, all surfaces.</h1>
                      <p>Paint from wall to wall from floor to ceiling in the colour of choice. Think doors, desks, full walls, lockers, all colours and surfaces possible, without chalk dust as your upcoming whiteboard</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="centerTextLeft">
                      <h1>Susteinablity.</h1>
                      <p>AquaWrite is a water base paint and it is the most environmentally friendly dry erase, whiteboard paint on the market. Easily wash your tools in water and reuse them if you like.</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
  )
}

export default Text4
