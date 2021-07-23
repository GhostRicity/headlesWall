import React from "react"
import { graphql, link } from "gatsby"

//import componets
import Header from "../components/header"
import Footer from "../components/footer"
import Button from "../components/button"

//import styles
import '../styles/styles.scss'

//bootstrap
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FormPage = (data) => (

    <div>
      <Container fluid>
        <Row className="mailRow">
        <Col className="mailForm">
          <h1>Contact form:</h1>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control placeholder="First Name" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control placeholder="Last Name" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Contry" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Phone Number" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Check
              type="checkbox"
              id="disabledFieldsetCheck"
              label="Yes, I would like to receive marketing communications from WriteWall. I can unsubscribe at a later time."
            />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col>
        </Col>
      </Row>
      </Container>
    </div>
  )



export default FormPage
