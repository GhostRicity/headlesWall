import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import BackgroundImage from 'gatsby-background-image'
import parse from "html-react-parser"
//bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'


export default function Hero2(data){

  return(
    <StaticQuery
      query={graphql`
      query Hero3 {
        allWpPost(filter: {slug: {eq: "why-not"}}) {
          nodes {
            id
            title
            excerpt
            featuredImage {
              node {
                altText
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
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
        <Jumbotron fluid id="home" className="jumbotron">
          <Container>
            <h1>{data.post.title}</h1>
            <p>fuck my life</p>
        </Container>
        </Jumbotron>
        </div>
      )}
    />
    )
}
