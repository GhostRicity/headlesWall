import React from "react"
import { graphql, link } from "gatsby"

//import componets
import Header from "../components/header"
import Footer from "../components/footer"
import ServicesHero from "../components/servicesHero"
import WeWorkWith from "../components/servicesWeWorkWith"
import HalfServ from "../components/halfImageServices"
import Years from "../components/servicesEx"
import Delete from "../components/servicesDelete"
import Text from "../components/servicesText"
import SixCards from "../components/SixCards"
//import styles
import '../styles/styles.scss'

//bootstrap

const ServicesPage = ({ data }) => (

    <div>
      <Header/>
      <ServicesHero/>
      <WeWorkWith/>
      <Years/>
      <Text/>
      <Delete/>
      <HalfServ/>
      <Footer/>
    </div>
  )


  export const query = graphql`
  query ser {
    allWpPost(filter: {slug: {eq: "why-not"}}) {
      nodes {
        id
        title
        excerpt
      }
    }
  }
  `


export default ServicesPage
