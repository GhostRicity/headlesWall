import React from "react"
import { StaticImage } from "gatsby-plugin-image"

//bootstrap
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

//import styles
import '../styles/styles.scss'


const Header = () => (
<header>
  <Navbar lassName="justify-content-end" collapseOnSelect c fixed="top" expand="lg">
  <Navbar.Brand href="/">
    <StaticImage className="d-inline-block align-top"
    src="../images/logo2.png" alt="WriteWall logo" />
  </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
      <Nav className="justify-content-end">
        <Nav.Link href="/solutions">Solutions</Nav.Link>
        <Nav.Link href="/#">Services</Nav.Link>
        <Nav.Link href="/#">Product Sales</Nav.Link>
        <Nav.Link href="/#">About</Nav.Link>
        <Nav.Link href="/#">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</header>
)

export default Header
