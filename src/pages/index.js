import React from "react"
import { graphql, link } from "gatsby"

//import componets
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import GetIn from "../components/getInTouch"
//import Gallery from "../components/indexGallery"
import Carousel from "../components/carusel"
import Fake from "../components/fakeGallery"

//import styles
import '../styles/styles.scss'

//bootstrap

const IndexPage = ({ data }) => (

    <div>
      <Header/>
      <Hero/>
      <Carousel/>
      <Fake/>
      <GetIn/>
      <Footer/>
    </div>
  )


export const query = graphql`
query MyHero {
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
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
            }
          }
        }
      }
    }
  }
}
`

export default IndexPage
