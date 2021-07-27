import React from "react"
import { graphql, link } from "gatsby"

//import componets
import Header from "../components/header"
import Footer from "../components/footer"
import SolutionsHero from "../components/solutionsHero"
import ForWork from "../components/forWork"
import ForFun from "../components/forFun"
import StatCaro from "../components/staticCarosel"
import Half from "../components/halfImage"
//import styles
import '../styles/styles.scss'

//bootstrap

const Solutions = ({ data }) => (

    <div>
      <Header/>
      <SolutionsHero/>
      <ForWork/>
      <StatCaro/>
      <ForFun/>
      <Half/>
      <Footer/>
    </div>
  )


  export const query = graphql`
  query sol {
    allWpPost(filter: {slug: {eq: "why-not"}}) {
      nodes {
        id
        title
        excerpt
      }
    }
  }
  `


export default Solutions
