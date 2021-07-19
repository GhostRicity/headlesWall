import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Link } from 'gatsby'
//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
//components
import Button from "../components/button"
import WeProd from "../components/weProduce"
import Insatll from "../components/weInstall"
import WeService from "../components/weCreate"
import Wediliver from "../components/weDiliver"

export default function Caro(data){
  return(
    <StaticQuery
    query={graphql`
      query caruselQuery {
        slideShow: allFile(
          filter: {relativeDirectory: {eq: "slider"}}
          sort: {fields: base, order: ASC}
        ) {
          edges {
            node {
              id
              base
                childImageSharp {
      					 fluid(maxWidth: 752, maxHeight:845 quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
      `}

        render={ data => (
          <div>
              <Container fluid>
                <Row className="ideaBox" fluid>
                  <Tab.Container defaultActiveKey="WeProduce">
                    <Row>
                      <Col>
                        <Nav className="tabAlingment">
                          <Nav.Item>
                            <Nav.Link eventKey="WeProduce">We Produce</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="WeInstall">We Install</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="WeService">We Service</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="WeDeliver">We Deliver</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content>
                          <Tab.Pane eventKey="WeProduce">
                          <div>
                            <h1>Family owned dream.</h1>
                            <p>The technology behind AquaWrite was developed by our uncle,
                            an 88-year old chemical engeneer, Carl Schmidt Nielsen,
                            and us Lars Frey and Betina Vandrup.</p>
                            <p> AquaWrite spend years in the making with thousands
                            of hours in research and development,
                            and started proving itself since 2015.</p>
                              <p><Link className="btn--read_more" to="#">Lern more about us -><span class="span--read_more"></span></Link></p>
                              <p><Link to="#">Lern more about products -></Link></p>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="WeInstall">
                            <div>
                              <h1>6000+ Installations</h1>
                              <p>From inseption, we have supported and served some of the largest and most innovative companies and institutions across Scandinavia with alternative whiteboard sollutions.</p>
                              <p>We help from the idea and planning phase to the installation and final solution..</p>
                              <p><Link to="#">Installations services ->
                                <span class="span--read_more"></span>
                                </Link>
                              </p>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="WeService">
                          <div>
                            <h1>Write, Delete & Repeat</h1>
                            <p>In addition to daily maintenance, we offer ad hoc cleaning and service agreements where we take care of everything that involves maintaing your whiteboard installation.</p>
                            <p>We guarantee that you will be able to do that for 10 full years, if the maintenance guides are followed.</p>
                            <p><Link to="#">Maintenece -></Link></p>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="WeDeliver">
                          <div>
                            <h1>Small carbon footprint.</h1>
                            <p>We are retailing our products all over the globe trough our own webshop or accredited distributors.</p>
                            <p>Writewall offers installation training for all our distributors and interested partyes.</p>
                            <p><Link to="https://writewallpaint.com/">Shop now -></Link></p>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                      <Col>
                        <Tab.Content>
                          <Tab.Pane eventKey="WeProduce">
                            {<WeProd/>}
                          </Tab.Pane>
                          <Tab.Pane eventKey="WeInstall">
                            {<Insatll/>}
                          </Tab.Pane>
                          <Tab.Pane eventKey="WeService">
                            {<WeService/>}
                          </Tab.Pane>
                          <Tab.Pane eventKey="WeDeliver">
                            {<Wediliver/>}
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Row>
              </Container>
            </div>
        )}
      />

  )
}
