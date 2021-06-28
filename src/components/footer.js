import React from "react"

//bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// TODO: optimize for smaller screens

const Footer = () => {
return (
<footer>
    <div className="sticky-bottom">
    <Navbar className="justify-content-center">
        <Nav.Item eventKey="disabled" disabled>
        </Nav.Item>
    </Navbar>
        <p className="text-center mt-4 mb-4">This is a footer </p>
    <Navbar className="justify-content-center" variant="dark" justify>
        <Nav.Item>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="http://www.disleksija.lv/" target="_blank">WriteWall</a>
        </Nav.Item>
    </Navbar>
    </div>
</footer>
)
}

export default Footer
