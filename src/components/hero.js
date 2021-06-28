import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

//bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'



const Hero = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "header_v3 copy.png" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <div>
        <BackgroundImage
        fluid={imageData}
        >
        <Jumbotron fluid id="home" className="jumbotron">
          <Container>

            <h1>“We make people creative”</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal space of
              its parent.
            </p>

        </Container>
      </Jumbotron>
      </BackgroundImage>
      </div>
      )
    }
    }
  />
)


const StyledBackgroundSection = styled(Hero)`
  width: 100%;

`

export default Hero
