import React from "react"
import { graphql, link } from "gatsby"

//import componets
import Header from "../components/header"
import Footer from "../components/footer"
import ProductHero from "../components/productHero"
import HalfServ from "../components/halfImageServices"
import Aqua from "../components/productAqua"
import Text from "../components/servicesText"
//import styles
import '../styles/styles.scss'

//bootstrap

const ProductSales = ({ data }) => (

    <div>
      <Header/>
      <ProductHero/>
      <Aqua/>
      <Text/>
      <HalfServ/>
      <Footer/>
    </div>
  )


  export const query = graphql`
  query pro {
    allWpPost(filter: {slug: {eq: "why-not"}}) {
      nodes {
        id
        title
        excerpt
      }
    }
  }
  `


export default ProductSales
