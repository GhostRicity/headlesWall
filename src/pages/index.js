import React from "react"
import { graphql, link } from "gatsby"

//import componets
import Header from "../components/header"
import Footer from "../components/footer"
import Hero2 from "../components/hero2"

//import styles
import '../styles/styles.scss'

//bootstrap

const IndexPage = ({ data }) => (

    <div>
    {console.log("YO YO")}
    {console.log(data.allWpPost.nodes[0].title)}
    {console.log(Object.keys(data))}
      <Header/>
      <h1>{data.allWpPost.nodes[0].title}</h1>
      <h1>Kill me</h1>
      <Hero2/>
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
