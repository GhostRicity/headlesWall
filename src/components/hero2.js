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
        query hero2 {
          wpPost(slug: {eq: "why-not"}) {
            id
            title
            excerpt
            featuredImage {
              node {
                altText
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
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
        {console.log( "new shit")}
        {console.log(data)}
        <BackgroundImage
          fluid = {data.wpPost.featuredImage.node.localFile.childImageSharp.fluid}
        >
        <Jumbotron fluid id="home" className="jumbotron">
          <Container>
            <h1>{data.wpPost.title}</h1>
            <p>fuck my life</p>

        </Container>
        </Jumbotron>
        </BackgroundImage>
        </div>
      )}
    />
    )
}
